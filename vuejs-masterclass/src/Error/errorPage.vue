<script setup lang="ts">
import { errorPageStore } from '@/stores/error'

usePageStore().pageData.title = ''

const errorStore = errorPageStore()
const error = ref(errorStore.statusError)

const message = ref('')
const codeError = ref(0)

if (error.value) {
  message.value = error.value.message
  codeError.value = error.value.errorCode ?? 0
}
</script>

<template>
  <section class="error">
    <div>
      <iconify-icon icon="lucide:triangle-alert" class="error__icon" />
      <h1 class="error__code">{{ codeError }}</h1>
      <p class="error__msg">{{ message }}</p>
      <div class="error-footer">
        <p class="error-footer__text">You'll find lots to explore on the home page.</p>
        <RouterLink to="/">
          <Button class="max-w-36"> Back to homepage </Button>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
@reference "tailwindcss"

.error {
  @apply mx-auto flex justify-center items-center flex-1 p-10 text-center -mt-20 min-h-[90vh];
}

.error__icon {
  @apply text-7xl text-red-600 flex items-center;
}

.error__code {
  @apply font-extrabold text-7xl text-gray-800 ml-108;
}

.error__msg {
  @apply text-3xl font-extrabold text-shadow-black flex  justify-center mt-4;
}

.error-footer {
  @apply flex flex-col items-center justify-center gap-5 mt-6 font-light;
}

.error-footer__text {
  @apply text-lg;
}

p {
  @apply my-2;
}
</style>
