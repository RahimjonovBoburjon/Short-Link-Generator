<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <p class="text-xl font-semibold">Redirecting...</p>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { onMounted } from 'vue';

const route = useRoute();
const db = getFirestore();

onMounted(async () => {
    const shortId = route.params.shortId;
    console.log("Short ID:", shortId);

    const linksRef = collection(db, 'links');
    const q = query(linksRef, where('shortId', '==', shortId));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        const longUrl = doc.data().longUrl;
        console.log("Redirecting to:", longUrl);
        window.location.href = longUrl;
    } else {
        console.log("Short link not found!");
    }
});
</script>
