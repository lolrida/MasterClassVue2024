import { supabase } from '@/lib/supabaseClient'
import { profilesQuery } from '@/utils/supaQuery'
import type { Session, User } from '@supabase/supabase-js'
import type { Tables } from 'database/types'

export const useAuthUser = defineStore('authUser', () => {
  const user = ref<null | User>(null)
  const profile = ref<null | Tables<'profiles'>>(null)

  const setProfile = async () => {
    if (!user.value) {
      profile.value = null
      return
    }

    if (!profile.value || profile.value.id !== user.value.id) {
      const { data } = await profilesQuery(user.value.id)
      profile.value = data || null
    }
  }

  const setAuth = async (userSession: null | Session = null) => {
    if (!userSession) {
      user.value = null
      return
    } else {
      user.value = userSession.user
      await setProfile()
    }
  }

  const getSession = async () => {
    const { data } = await supabase.auth.getSession()
    if (data.session?.user) await setAuth(data.session)
  }

  return {
    user,
    profile,
    setAuth,
    getSession
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthUser, import.meta.hot))
}
