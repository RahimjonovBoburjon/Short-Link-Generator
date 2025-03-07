<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <p class="text-xl font-semibold">Redirecting...</p>
    </div>
</template>

<script>
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { useRoute } from 'vue-router';

export default {
    async setup() {
        const db = getFirestore();
        const route = useRoute();
        const shortId = route.params.shortId;

        try {
            const q = query(collection(db, "shortLinks"), where("shortId", "==", shortId));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                const doc = querySnapshot.docs[0];
                const longUrl = doc.data().longUrl;
                window.location.href = longUrl;
            } else {
                console.log("Short link not found!");
            }
        } catch (error) {
            console.error("Error fetching short link:", error);
        }
    }
};
</script>
