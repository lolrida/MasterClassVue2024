import { supabase } from "@/lib/supabaseClient"
import type { LoginForm, RegisterForm } from "@/types/authForm"


export const register = async (formData: RegisterForm) => {
  const { data, error } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
  })

  if (error) {
    console.log('email o password errati')
    return error
  }

  if (data.user) {
    const {error} = await supabase.from('profiles').insert({
      id: data.user.id,
      username: formData.username,
      full_name: formData.first_name.concat(" ", formData.last_name)
    })

    if(error) return console.log('Profile error : ', error)
  }

    return true
}

export const login = async (formData: LoginForm) => {
  const { error } = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password,
  })

  if(error) return console.log('Errore nel login')

}

export const logout = async() => {
  const {error} = await supabase.auth.signOut()
  if(error) console.log(error)

    return true
  }

