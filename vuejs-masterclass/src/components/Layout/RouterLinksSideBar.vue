<script setup lang="ts">
interface linksProps {
  title: string
  icon: string
  to?: string
}

defineProps<{
  links: linksProps[]
}>()
</script>
<template>
  <template v-for="link in links" :key="link.title">
    <RouterLink
      v-if="link.to"
      exact-active-class="bg-muted text-primary" :to="link.to"
      class="flex items-center gap-3 px-4 py-2 mx-2 transition-colors rounded-lg justify-center text-muted-foreground"
    >
      <iconify-icon :icon="link.icon"></iconify-icon>
      <span class="hidden lg:block text-nowrap">{{ link.title }}</span>
    </RouterLink>
    <div v-else class="flex items-center gap-3 px-4 py-2 mx-2 transition-colors rounded-lg justify-center text-muted-foreground cursor-pointer">
      <iconify-icon :icon="link.icon"></iconify-icon>
      <span class="hidden lg:block text-nowrap">{{ link.title }}</span>
    </div>
  </template>
</template>

