/* eslint-disable @typescript-eslint/no-unused-vars */
import { tasksWithProjectsQuery } from '@/utils/supaQuery'
import type { tasksWithProjects } from '@/utils/supaQuery'
import { useMemoize } from '@vueuse/core'
export const useTaskStore = defineStore('tasks-store', () => {
  const tasks = ref<tasksWithProjects | null>(null)
  const loadTasks = useMemoize(async (k: string) => await tasksWithProjectsQuery)

  const getLoadTasks = () => {
    tasksWithProjectsQuery.then(({ data, error }) => {
      if (JSON.stringify(tasks.value) === JSON.stringify(data)) {
        return
      } else {
        loadTasks.delete('tasks')
        if (!error && data) tasks.value = data
      }
    })
  }

  const getTasks = async () => {
    const { data, error } = await loadTasks('tasks')

    if (error) {
      console.error('I am an uncaught error', error)
      return
    }

    tasks.value = data
    getLoadTasks()
  }

  return {
    tasks,
    getTasks,
  }
})
