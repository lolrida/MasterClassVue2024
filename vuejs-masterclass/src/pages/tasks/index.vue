<script setup lang="ts">
defineOptions({ name: 'TasksListPage' })
import { columns } from '@/utils/tableColums/tasksColumns'
import ErrorPage from '@/Error/errorPage.vue'
import Spinner from '@/components/ui/spinner/Spinner.vue'

usePageStore().pageData.title = 'Tasks Page'
const errorStore = errorPageStore()
const loading = ref(true)
const tasksLoader = useTaskStore()
const { tasks } = storeToRefs(tasksLoader)
const { getTasks } = tasksLoader

await getTasks()
loading.value = false
</script>

<template>
  <div class="container py-10 mx-auto">
    <template v-if="errorStore.statusError">
      <ErrorPage />
    </template>
    <template v-else>
      <Spinner v-if="loading" class="mx-auto my-10" />
      <DataTable v-else-if="tasks" :columns="columns" :data="tasks" />
    </template>
  </div>
</template>

<style scoped></style>
