<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 p-4">
    <h1 class="text-4xl font-bold mb-8 text-gray-800 animate-text-pop">Short Link Generator</h1>
    <ShortenLink />
  </div>
</template>

<script>
import ShortenLink from './components/ShortenLink.vue';

export default {
  components: {
    ShortenLink,
  },
};
</script>

<style>
@keyframes textPop {
  0% {
    transform: scale(0.9);
    opacity: 0;
  }

  50% {
    transform: scale(1.1);
    opacity: 1;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-text-pop {
  animation: textPop 1s ease-out;
}
</style>