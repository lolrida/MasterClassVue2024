<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient';

const user = await supabase.auth.getUser('profiles');

if(user.data.user){
  usePageStore().pageData.title = `Welcome Back ${user.data.user.email} `;
} else {
  usePageStore().pageData.title = 'Profile Page'
  console.log('No user logged in');
}


</script>

<template>
  <div>
    <h1 class="text-3xl font-bold underline">
      Welcome to your profile page!
    </h1>
  </div>
</template>

