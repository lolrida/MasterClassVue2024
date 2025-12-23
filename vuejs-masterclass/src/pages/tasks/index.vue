<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient';
import  {ref} from 'vue';
import type { Tables } from '../../../database/types';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const tasks = ref<Tables<'tasks'>[] | null>(null);

(async () => {
    const {data, error} = await supabase
        .from('tasks')
        .select('*')

    if (error) 
        console.error('Error fetching tasks:', error)
    tasks.value = data

   
})()
</script>

<template>
    <div>Tasks page</div>
    <router-link to="/">Go to Home</router-link>
    <ul>
        <li v-for="task in tasks" :key="task.id">
            {{ task.name }}
        </li>
    </ul>



</template>

<style scoped></style>
