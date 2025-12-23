<script setup lang="ts">

</script>

<template>
    <div>Home page</div>
    <router-link :to="{ name: '/projects/[id]', params: { id: 1 } }">Go to Project 1</router-link>
</template>

<style scoped></style>
