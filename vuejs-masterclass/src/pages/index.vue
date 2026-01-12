<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ArrowUpRightIcon } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
</script>

<template>
  <div class="">
    <h2>Check <Icon icon="fluent:arrow-turn-left-right-48-regular" width="24" height="24" /></h2>
    <div class="flex flex-col items-start gap-8 sm:flex-row">
      <div class="flex items-start gap-2">
        <h2 class="font-stretch-60% p-0.5">Go to Projects page</h2>
        <RouterLink to="/projects">
          <Button size="icon-sm" aria-label="Submit" variant="outline">
            <ArrowUpRightIcon />
          </Button>
        </RouterLink>
      </div>
    </div>
    <div class="flex flex-col items-start gap-8 sm:flex-row">
      <div class="flex items-start gap-2">
        <h2 class="font-stretch-60% p-0.5">Go to Tasks page</h2>
        <RouterLink to="/tasks">
          <Button size="icon-sm" aria-label="Submit" variant="outline">
            <ArrowUpRightIcon />
          </Button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
