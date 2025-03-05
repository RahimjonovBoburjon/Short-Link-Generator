<template>
    <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <input v-model="longUrl" type="text" placeholder="Enter your long URL" class="w-full p-2 border rounded mb-4" />
        <button @click="shortenUrl" class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Shorten URL
        </button>
        <div v-if="shortUrl" class="mt-4">
            <p class="text-gray-700">Shortened URL:</p>
            <a :href="shortUrl" target="_blank" class="text-blue-500">{{ shortUrl }}</a>
        </div>
    </div>
</template>

<script>
import { ref, inject } from 'vue';
import { collection, addDoc } from 'firebase/firestore';

export default {
    setup() {
        const longUrl = ref('');
        const shortUrl = ref('');
        const db = inject('db');

        const shortenUrl = async () => {
            if (!longUrl.value) return;
            const shortId = Math.random().toString(36).substr(2, 6);
            await addDoc(collection(db, 'shortLinks'), {
                longUrl: longUrl.value,
                shortId: shortId,
            });
            shortUrl.value = `${window.location.origin}/${shortId}`;
        };

        return { longUrl, shortUrl, shortenUrl };
    }
};
</script>

<style scoped></style>