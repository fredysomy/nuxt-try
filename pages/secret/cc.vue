<script setup>
definePageMeta({ ssr: true });

const route = useRoute();

const { data, refresh } = await useAsyncData(
  "posts",
  async () => {
    return await $fetch("https://jsonplaceholder.typicode.com/posts");
  },
  { watch: [route] } // Re-fetch when route changes
);
</script>

<template>
  <div>
    <h1>Blog Posts</h1>
    <ul>
      <li v-for="post in data" :key="post.id">
        <NuxtLink :to="`/secret/${post.id}`">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
