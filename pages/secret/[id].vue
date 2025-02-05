<script setup>
definePageMeta({ ssr: true });

const route = useRoute();

const { data } = await useAsyncData(
  `blog-${route.params.id}`, // Unique key per blog post
  async () => {
    return await $fetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`);
  },
  { watch: [route] } // Re-fetch when route changes
);
</script>

<template>
  <div class="p-6">
    <NuxtLink to="/" class="text-blue-500">← Back</NuxtLink>
    <h1 class="text-3xl font-bold mt-4">{{ data.title }}</h1>
    <p class="text-gray-700 mt-2">{{ data.body }}</p>
  </div>
</template>
