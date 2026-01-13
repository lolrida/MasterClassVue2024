import { supabase } from '@/lib/supabaseClient'
import type { QueryData } from '@supabase/supabase-js'

export const tasksWithProjectsQuery = supabase.from('tasks').select('*, projects (id, name, slug)')


export type tasksWithProjects = QueryData<typeof tasksWithProjectsQuery>

export const projectQuery = supabase.from('projects').select('*')

export type project = QueryData<typeof projectQuery>
