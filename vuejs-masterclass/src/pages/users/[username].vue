<script setup lang="ts">
import { profilesQuery } from '@/utils/supaQuery'
import type { Tables } from 'database/types'
const { username } = useRoute('/users/[username]').params
const profile = ref<Tables<'profiles'> | null>(null)

const userQuery = async () => {
  const { data, error } = await profilesQuery({ column: 'username', value: username })
  profile.value = data || null

  if (error) 

  profile.value = data
}
await userQuery()
</script>

<template>
  <div class="mx-auto mb-10 flex w-full flex-col items-center justify-center py-10 text-center">
    <div class="flex flex-col items-center justify-center pb-4">
      <Avatar size="lg">
        <AvatarImage src="" alt="@radix-vue" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <p class="mt-2 text-gray-500">{{ '@' + profile?.username }}</p>
      <h1 class="mt-5 text-4xl font-bold">{{ profile?.full_name.toUpperCase() }}</h1>
      <p class="mt-2 text-sm">{{ profile?.bio }}</p>
    </div>
    <Button>Edit profile</Button>
  </div>
</template>
