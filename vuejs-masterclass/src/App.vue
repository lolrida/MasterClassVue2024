<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'


onMounted(async () => {})




</script>

<template>
  <AuthLayout>
    <RouterView v-slot="{ Component, route }">
      <Suspense :timeout="0">
        <Component :is="Component" :key="route.name">Hi</Component>
        <template #fallback>
          <div class="flex justify-start">
            <Button variant="secondary" disabled size="sm">
              <Spinner />
              Processing
            </Button>
          </div>
        </template>
      </Suspense>
    </RouterView>
  </AuthLayout>
</template>
