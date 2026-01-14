<script setup lang="ts">
import errorPage from '../Error/errorPage.vue'

errorPageStore().stateErrorPage({ error: "Route not available", errorCode: 404 })


</script>

<script setup lang="ts"></script>

<template>
  <errorPage />
</template>


