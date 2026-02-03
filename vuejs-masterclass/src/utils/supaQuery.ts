import { supabase } from '@/lib/supabaseClient'
import type { QueryData } from '@supabase/supabase-js'

export const tasksWithProjectsQuery = supabase.from('tasks').select('*, projects (id, name, slug)')

export type tasksWithProjects = QueryData<typeof tasksWithProjectsQuery>

export const projectsQuery = () =>
  supabase
    .from('projects')
    .select(
      `
  *,
  tasks(
    id,
    name,
    status,
    due_date
  )
  `,
    )
export type Projects = QueryData<typeof projectsQuery>
export type Project = QueryData<ReturnType<typeof projectQuery>>
export const projectQuery = (slug: string) =>
  supabase
    .from('projects')
    .select(
      `
  *,
  tasks(
    id,
    name,
    status,
    due_date
  )
  `,
    )
    .eq('slug', slug)
    .single()

export type projectBySlug = QueryData<ReturnType<typeof projectQuery>>

export const tasksQuery = supabase.from('tasks').select('*')

export type Task = QueryData<typeof tasksQuery>

export const taskQueryById = (id: number) =>
  supabase
    .from('tasks')
    .select(
      `
  *,
  projects(
    id,
    name,
    slug
  )
  `,
    )
    .eq('id', id)
    .single()

export type taskById = QueryData<ReturnType<typeof taskQueryById>>

export const profilesQuery = ({ column, value }: { column: string; value: string }) => {
  return supabase.from('profiles').select('*').eq(column, value).single()
}

export const groupProfileQuery = (usersIds: string[]) => {
  return supabase.from('profiles').select().in('id', usersIds)
}
export type Collabs = QueryData<ReturnType<typeof groupProfileQuery>>
