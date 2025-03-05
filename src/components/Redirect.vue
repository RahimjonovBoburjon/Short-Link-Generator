<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <p class="text-xl font-semibold">Redirecting...</p>
    </div>
</template>

<script>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

export default {
    setup() {
        const route = useRoute();
        const db = getFirestore();

        onMounted(async () => {
            const q = query(collection(db, "shortLinks"), where("shortId", "==", route.params.shortId));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                const doc = querySnapshot.docs[0];
                const longUrl = doc.data().longUrl;
                window.location.replace(longUrl);
            } else {
                alert("Short link not found!");
            }
        });
    },
};
</script>