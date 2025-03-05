<template>
    <div class="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md transform transition-all hover:scale-105">
        <input v-model="longUrl" type="text" placeholder="Enter your long URL"
            class="w-full p-3 border-2 border-gray-200 rounded-lg mb-6 focus:border-blue-500 focus:outline-none transition-colors" />
        <button @click="shortenUrl"
            class="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all">
            Shorten URL
        </button>
        <div v-if="shortUrl" class="mt-6">
            <p class="text-gray-700 mb-2">Shortened URL:</p>
            <a :href="shortUrl" target="_blank"
                class="text-blue-500 hover:text-blue-600 transition-colors break-all animate-text-fade">
                {{ shortUrl }}
            </a>
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

<style scoped>
@keyframes textFade {
    0% {
        opacity: 0;
        transform: translateY(10px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-text-fade {
    animation: textFade 0.5s ease-in-out;
}
</style>