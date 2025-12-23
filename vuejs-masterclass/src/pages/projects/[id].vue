<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

<template>
    <div>
        Project View: {{ route.params?.id }}
    </div>
    <router-link to="/">Go Home</router-link>

</template>

<style scoped></style>
