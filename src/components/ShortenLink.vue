<template>
    <div
        class="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md transform transition-all hover:scale-105 font-poppins">
        <input v-model="longUrl" type="text" placeholder="Enter your long URL"
            class="w-full p-3 border-2 border-gray-200 rounded-lg mb-6 focus:border-blue-500 focus:outline-none transition-colors placeholder-gray-400" />
        <p v-if="errorMessage" class="text-red-500 text-sm mb-4">{{ errorMessage }}</p>
        <button @click="shortenUrl"
            class="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all">
            Shorten URL
        </button>
        <div v-if="shortUrl" class="mt-6">
            <p class="text-gray-700 mb-2">Shortened URL:</p>
            <div class="flex items-center justify-between">
                <a :href="shortUrl" target="_blank"
                    class="text-blue-500 hover:text-blue-600 transition-colors break-all animate-text-fade">
                    {{ shortUrl }}
                </a>
                <button @click="copyToClipboard"
                    class="bg-gray-200 px-10 py-2 rounded-lg text-gray-700 text-sm hover:bg-gray-300 transition-all">
                    {{ copied ? "Copied!" : "Copy" }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

export default {
    setup() {
        const longUrl = ref('');
        const shortUrl = ref('');
        const copied = ref(false);
        const errorMessage = ref('');
        const db = getFirestore();

        const isValidUrl = (url) => {
            try {
                new URL(url);
                return true;
            } catch {
                return false;
            }
        };

        const shortenUrl = async () => {
            if (!isValidUrl(longUrl.value)) {
                errorMessage.value = 'Please enter a valid URL!';
                return;
            }
            errorMessage.value = '';
            const shortId = Math.random().toString(36).substr(2, 6);
            await addDoc(collection(db, 'shortLinks'), {
                longUrl: longUrl.value,
                shortId: shortId,
            });
            shortUrl.value = `${window.location.origin}/${shortId}`;
        };

        const copyToClipboard = async () => {
            try {
                await navigator.clipboard.writeText(shortUrl.value);
                copied.value = true;
                setTimeout(() => (copied.value = false), 2000);
            } catch (err) {
                console.error('Copy failed', err);
            }
        };

        return { longUrl, shortUrl, copied, errorMessage, shortenUrl, copyToClipboard };
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