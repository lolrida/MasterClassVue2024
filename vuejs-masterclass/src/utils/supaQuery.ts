import { supabase } from '@/lib/supabaseClient'
import type { QueryData } from '@supabase/supabase-js'

export const tasksWithProjectsQuery = supabase.from('tasks').select('*, projects (id, name, slug)')


export type tasksWithProjects = QueryData<typeof tasksWithProjectsQuery>

export const projectQuery = supabase.from('projects').select()

export type Project = QueryData<typeof projectQuery>

export const projectQueryBySlug = (slug: string) => supabase.from('projects').select(`
  *,
  tasks(
    id,
    name,
    status,
    due_date
  )
  `).eq('slug', slug).single()

  export type projectBySlug = QueryData<ReturnType<typeof projectQueryBySlug>>

export const tasksQuery = supabase.from('tasks').select('*')

export type Task = QueryData<typeof tasksQuery>

export const taskQueryById = (id: number) => supabase.from('tasks').select(`
  *,
  projects(
    id,
    name,
    slug
  )
  `).eq('id', id).single()

export type taskById = QueryData<ReturnType<typeof taskQueryById>>


