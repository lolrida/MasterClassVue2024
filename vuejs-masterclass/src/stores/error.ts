import type { ErrorPage } from '@/types/Error'

export const errorPageStore = defineStore('error-page', () => {
  const statusError = ref<null | ErrorPage>(null)

  const stateErrorPage = ({ error, errorCode }: { error: string | Error; errorCode?: number }) => {
    if (typeof error === 'string' || error instanceof Error) {
      const errorPage: ErrorPage = typeof error === 'string' ? new Error(error) : error
      errorPage.errorCode = errorCode || 500
      statusError.value = errorPage
      return
    }

    if (statusError.value) {
      statusError.value.errorCode = errorCode || 500
    }
  }

  return {
    statusError,
    stateErrorPage,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(errorPageStore, import.meta.hot))
}
