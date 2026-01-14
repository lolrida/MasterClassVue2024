<script setup lang="ts">
defineOptions({ name: 'TasksListPage' })
import { tasksWithProjectsQuery } from '@/utils/supaQuery'
import type { tasksWithProjects } from '@/utils/supaQuery'
import { columns } from '@/utils/tableColums/tasksColumns'
import { errorPageStore } from '@/stores/error'
import ErrorPage from '@/Error/errorPage.vue'

usePageStore().pageData.title = 'Tasks Page'

const tasks = ref<tasksWithProjects | null>(null)
const errorStore = errorPageStore()

const getTasks = async () => {
  const { data, error } = await tasksWithProjectsQuery

  if (error) {
    console.error('I am an uncaught error', error)
    errorStore.stateErrorPage({ error: Error('I am an uncaught error') })
    return
  }

  tasks.value = data
}

await getTasks()
</script>

<template>
  <div class="container py-10 mx-auto">
    <template v-if="errorStore.statusError">
      <ErrorPage />
    </template>
    <template v-else>
      <DataTable :columns="columns" :data="tasks ?? []" />
    </template>
  </div>
</template>

<style scoped></style>
