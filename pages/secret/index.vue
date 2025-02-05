<template>
    <div>
        <h1>Secret Page inside</h1>
        <p>Click the button below to navigate to the about page</p>
        <nuxt-link to="/about">About Page</nuxt-link>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    title: 'Secret Page',
    description: 'This is the secret page',
   
});
</script>