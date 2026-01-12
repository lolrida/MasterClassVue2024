<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import type { Tables } from '../../../database/types'
import type { ColumnDef } from '@tanstack/vue-table'
import { RouterLink } from 'vue-router'
import Spinner from '@/components/ui/spinner/Spinner.vue'

const projects = ref<Tables<'projects'>[] | null>(null)
const loading = ref(true)

usePageStore().pageData.title = 'Projects Page'

const getProjects = async () => {
  loading.value = true
  const { data, error } = await supabase.from('projects').select('*')
  if (error) console.error('Error fetching projects:', error)
  projects.value = data
  loading.value = false
  console.log('Projects:', projects.value)
}

await getProjects()
const columns: ColumnDef<Tables<'projects'>>[] = [
  {
    accessorKey: 'name',
    header: () => h('div', { class: 'text-left' }, 'Name'),
    cell: ({ row }) => {
      return h(
        RouterLink,
        {
          to: `/projects/${row.original.name}`,
          class: 'text-left font-medium hover:bg-muted block w-full',
        },
        () => row.getValue('name'),
      )
    },
  },
  {
    accessorKey: 'slug',
    header: () => h('div', { class: 'text-left' }, 'Slug'),
    cell: ({ row }) => {
      return h(
        RouterLink,
        { to: `/projects/${row.original.slug}`, class: 'text-left font-medium' },
        row.getValue('slug'),
      )
    },
  },
  {
    accessorKey: 'status',
    header: () => h('div', { class: 'text-left' }, 'Status'),
    cell: ({ row }) => {
      return h('div', { class: 'text-left font-medium' }, row.getValue('status'))
    },
  },
  {
    accessorKey: 'collaborators',
    header: () => h('div', { class: 'text-left' }, 'Collaborators'),
    cell: ({ row }) => {
      return h(
        'div',
        { class: 'text-left font-medium' },
        JSON.stringify(row.getValue('collaborators')),
      )
    },
  },
]
</script>

<template>
  <div class="container py-10 mx-auto">
    <Spinner v-if="loading" class="mx-auto my-10" />
    <DataTable v-else-if="projects" :columns="columns" :data="projects ?? []" />
  </div>
</template>

<style scoped></style>
