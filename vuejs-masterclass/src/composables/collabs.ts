import type { callGroup } from '@/types/callGroup'
import { groupProfileQuery, type Projects, type tasksWithProjects } from '@/utils/supaQuery'

export const useCollabs = () => {
  const groupedCollab = ref<callGroup>({})
  const getProfileByIds = async (usersIds: string[]) => {
    const { data, error } = await groupProfileQuery(usersIds)
    if (error) {
      return []
    }
    if (!data) {
      return []
    }
    return data
  }

  const getGroupCollabs = async (items: Projects | tasksWithProjects | undefined) => {
    if (!items?.length) return
    const filteredItems = items.filter((item) => item.collaborators.length)
    if (!filteredItems.length) return

    const promises = filteredItems.map((item) => getProfileByIds(item.collaborators))

    const results = await Promise.all(promises)

    filteredItems.forEach((item, index) => {
      groupedCollab.value[item.id] = results[index] ?? []
    })
  }

  return {
    getProfileByIds,
    useCollabs,
    getGroupCollabs,
    groupedCollab,
  }
}
