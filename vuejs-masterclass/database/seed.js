/* eslint-env node */

import 'dotenv/config'
import { faker as faker } from '@faker-js/faker'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SERVICE_ROLE_KEY)

console.log(supabase)
