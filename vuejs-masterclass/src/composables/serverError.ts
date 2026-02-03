import type { LoginForm } from '@/types/authForm'
import type { AuthError } from '@supabase/supabase-js'
    const { handleEmail, handlePassword } = await import('@/utils/formValidation')

type FormError<T> = {
  [K in keyof T]: string[]
}

export const useServerError = () => {
  const serverError = ref('')
  const realtimeError = ref<FormError<LoginForm>>()
  const handleError = (error: AuthError) => {
    serverError.value =
      error.message === 'Invalid login credentials' ? 'Invalid Email or Password' : error.message
  }

  const handleLoginFormError = async (formData: LoginForm) => {
    realtimeError.value = {
      email: [],
      password: [],
    }

    const emailError = handleEmail(formData.email)
    if (emailError.length) realtimeError.value.email = emailError
    const passwordError = handlePassword(formData.password)
    if (passwordError?.length) realtimeError.value.password = passwordError
  }


  return {
    handleError,
    serverError,
    handleLoginFormError,
    realtimeError,
  }
}
