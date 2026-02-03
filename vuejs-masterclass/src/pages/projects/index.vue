<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Spinner from '@/components/ui/spinner/Spinner.vue'
import { columns } from '@/utils/tableColums/projectsColumns'

const loading = ref(true)

usePageStore().pageData.title = 'Projects Page'

const projectsLoader = useProjectsStore()
const { projects } = storeToRefs(projectsLoader)
const { getProject } = projectsLoader

await getProject()

loading.value = false

const { getGroupCollabs, groupedCollab } = useCollabs()

await getGroupCollabs(projects.value ?? [])

const columnsWithCollabs = columns(groupedCollab)
</script>

<template>
  <div class="container py-10 mx-auto">
    <Spinner v-if="loading" class="mx-auto my-10" />
    <DataTable v-else-if="projects" :columns="columnsWithCollabs" :data="projects" />
  </div>
  
</template>

