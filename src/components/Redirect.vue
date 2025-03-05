<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <p class="text-xl font-semibold">Redirecting...</p>
    </div>
</template>

<script>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

export default {
    setup() {
        const route = useRoute();
        const db = getFirestore();

        onMounted(async () => {
            const querySnapshot = await getDocs(collection(db, 'shortLinks'));
            let foundUrl = null;
            querySnapshot.forEach(doc => {
                if (doc.data().shortId === route.params.shortId) {
                    foundUrl = doc.data().longUrl;
                }
            });
            if (foundUrl) {
                window.location.href = foundUrl;
            } else {
                alert('Short link not found!');
            }
        });
    }
};
</script>

<style scoped></style>