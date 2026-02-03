import { profilesQuery } from "./supaQuery"

export const handleEmail = (email: string) => {
  const emailTrim = email.trim()
  const error = []

  if (!emailTrim) return []
  const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/

  const emailValidationRegex = emailRegex.test(emailTrim)

  if (emailValidationRegex) error.push(emailValidationRegex)

  return error
}


export const handlePassword = (password: string) => {

  const error = []

  if(password.length <= 6){
    error.push('La password deve essere di almeno 8 caratteri ')

  return error


  }
}

export const handleUsername = async (username: string) => {

  const error = []

  const getUserQuery = await profilesQuery({column: 'username', value: username})

  if(!getUserQuery) error.push('Username gia registrato')

    return error

}

export const handleRegisterEmail = async (email: string) => {
  const error = []

  const getUserQuery = await profilesQuery({column: 'username', value: email})

  if(!getUserQuery) error.push('Email gia registrato')
    return error
}
