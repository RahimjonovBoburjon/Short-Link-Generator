<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
    <h1 class="text-2xl font-bold mb-4">Short Link Generator</h1>
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

<style scoped></style>