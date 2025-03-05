<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 p-4">
    <h1 class="text-4xl text-center font-bold mb-8 text-gray-800 animate-text-pop font-poppins">Short Link Generator</h1>
    <ShortenLink />

    <footer
      class="bg-gradient-to-br from-blue-800 to-purple-800 text-white text-lg py-4 fixed bottom-0 left-0 right-0 shadow-lg rounded-t-lg backdrop-blur-md bg-opacity-90 animate-fade-in border-t border-x border-blue-400">
      <p class="font-semibold text-center">
        Powered by
        <span class="text-yellow-300 hover:text-yellow-400 transition-colors duration-300">
          <a href="https://github.com/RahimjonovBoburjon" target="_blank" rel="noopener noreferrer">Bobur</a>
        </span>
      </p>
    </footer>
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

<style scoped>
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

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}
</style>