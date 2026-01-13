<script setup lang="ts">
defineOptions({ name: 'TasksListPage' })
import { tasksWithProjectsQuery } from '@/utils/supaQuery'
import type { tasksWithProjects } from '@/utils/supaQuery'
import { columns } from '@/utils/tableColums/tasksColumns'

usePageStore().pageData.title = 'Tasks Page'

const tasks = ref<tasksWithProjects | null>(null)

const getTasks = async () => {
  const { data, error } = await tasksWithProjectsQuery

  if (error) console.error('Error fetching tasks:', error)
  tasks.value = data
}

await getTasks()
</script>

<template>
  <div class="container py-10 mx-auto">
    <DataTable v:if="tasks" :columns="columns" :data="tasks ?? []" />
  </div>
</template>

<style scoped></style>
