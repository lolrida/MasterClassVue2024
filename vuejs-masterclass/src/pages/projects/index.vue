<script setup lang="ts">
import Spinner from '@/components/ui/spinner/Spinner.vue'
import { projectQuery } from '@/utils/supaQuery'
import type { Project } from '@/utils/supaQuery'
import { columns } from '@/utils/tableColums/projectsColumns'

const projects = ref<Project | null>(null)
const loading = ref(true)

usePageStore().pageData.title = 'Projects Page'

const getProjects = async () => {
  loading.value = true
  const { data, error } = await projectQuery

  if (error) console.error('Error fetching projects:', error)

  projects.value = data
  loading.value = false
}

await getProjects()
</script>

<template>
  <div class="container py-10 mx-auto">
    <Spinner v-if="loading" class="mx-auto my-10" />
    <DataTable v-else-if="projects" :columns="columns" :data="projects ?? []" />
  </div>
</template>

<style scoped></style>
