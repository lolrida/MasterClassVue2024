import { projectQuery, projectsQuery } from '@/utils/supaQuery'
import type { Project, Projects } from '@/utils/supaQuery'
import { useMemoize } from '@vueuse/core'

export const useProjectsStore = defineStore('projects-store', () => {
  const projects = ref<Projects | null>(null)
  const project = ref<Project | null>(null)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const loadProjects = useMemoize(async (key: string) => await projectsQuery())
  const loadProject = useMemoize(async (slug: string) => await projectQuery(slug))

  interface validateLoader {
    ref: typeof projects | typeof project
    query: typeof projectQuery | typeof projectsQuery
    key: string
    loaderFn: typeof loadProject | typeof loadProjects
  }

  const getLoadProjects = ({ ref, query, key, loaderFn }: validateLoader) => {
    if (ref.value) {
      const finalQuery = typeof query === 'function' ? query(key) : query
      finalQuery.then(({ data, error }) => {
        if (JSON.stringify(ref.value) === JSON.stringify(data)) {
          return
        }

        loaderFn.delete(key)
        if (!error && data) ref.value = data

      })
    }
  }

  const getProjects = async () => {
    const { data, error } = await loadProjects('projects')

    if (error) {
      console.error('I am an uncaught error', error)
      return
    }

    if (data) projects.value = data

    getLoadProjects({
      ref: projects,
      query: projectsQuery,
      key: 'projects',
      loaderFn: loadProjects
    })
  }

  const getProject = async (slug: string) => {
    const { data, error } = await loadProject(slug)

    if (error) {
      console.error('I am an uncaught error', error)
      return
    }

    if (data) project.value = data


    getLoadProjects({
      ref:project,
      query: projectQuery,
      key: slug,
      loaderFn: loadProject
    })
  }

  return {
    projects,
    getProjects,
    getProject,
    project,
  }
})
