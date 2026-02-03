import type { ColumnDef } from '@tanstack/vue-table'
import type { Project } from '../supaQuery'
import { RouterLink } from 'vue-router'
import type { callGroup } from '@/types/callGroup'
import type { Ref } from 'vue'
import Avatar from '@/components/ui/avatar/Avatar.vue'
import AvatarImage from '@/components/ui/avatar/AvatarImage.vue'
import AvatarFallback from '@/components/ui/avatar/AvatarFallback.vue'
export const columns = (collabs: Ref<callGroup>): ColumnDef<Project>[] => [
  {
    accessorKey: 'name',
    header: () => h('div', { class: 'text-left' }, 'Name'),
    cell: ({ row }) => {
      return h(
        RouterLink,
        {
          to: `/projects/${row.original.slug}`,
          class: 'text-left font-medium hover:bg-muted block w-full',
        },
        () => row.getValue('name'),
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
        collabs.value[row.original.id]
          ? collabs.value[row.original.id].map((collabs) => {
              return h(RouterLink, { to: `/users/${collabs.username}` }, () => {
                return h(Avatar, { class: 'hover:scale-110 transition-transform' }, () =>
                  h(AvatarImage, { src: collabs.avatar_url || '' }),
                )
              })
            })
          : row.original.collaborators.map(() => {
              return h(Avatar, { class: 'animate-pulse' }, () => h(AvatarFallback))
            }),
      )
    },
  },
]

