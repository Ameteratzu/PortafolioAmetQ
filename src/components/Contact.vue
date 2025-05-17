<template>
  <section id="contact" class="py-20 bg-gray-50 dark:bg-darkbg px-6">
    <div class="container mx-auto max-w-md space-y-8">
      <div class="flex flex-col md:flex-row items-center justify-center gap-4">
        <h2 ref="title"
            class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 slide-down">
          {{ $t('contact.title') }}
        </h2>
        <img src="https://img.icons8.com/clouds/100/messaging-.png"
             alt="mensajería"
             class="w-24 h-24 md:w-28 md:h-28"/>
      </div>

      <p class="text-lg text-gray-700 dark:text-gray-300 text-center">
        {{ $t('contact.description') }}
      </p>

      <form @submit.prevent="submitForm"
            class="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg
                   border-2 border-primary dark:border-accent">

        <input v-model="form.name" type="text"
               :placeholder="$t('contact.fields.name')"
               class="w-full border-2 border-primary dark:border-accent rounded-md p-2"
               required/>

        <input v-model="form.email" type="email"
               :placeholder="$t('contact.fields.email')"
               class="w-full border-2 border-primary dark:border-accent rounded-md p-2"
               required/>

        <textarea v-model="form.message" rows="4"
                  :placeholder="$t('contact.fields.message')"
                  class="w-full border-2 border-primary dark:border-accent rounded-md p-2"
                  required></textarea>

        <button :disabled="status==='sending'"
                type="submit"
                class="btn-primary w-full border-2 border-primary dark:border-accent rounded-md py-2">
          <span v-if="status==='idle'">{{ $t('contact.sendButton') }}</span>
          <span v-else-if="status==='sending'">{{ $t('contact.sending') }}</span>
          <span v-else-if="status==='success'">{{ $t('contact.sent') }}</span>
          <span v-else>{{ $t('contact.error') }}</span>
        </button>

        <p v-if="status==='error'" class="text-red-500">{{ errorMsg }}</p>
      </form>

      <div class="flex justify-center gap-6 mt-4">
        <!-- redes… -->
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const form = reactive({ name: '', email: '', message: '' })
const status = ref('idle')
const errorMsg = ref('')

async function submitForm() {
  status.value = 'sending'
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(form)
    })
    if (!res.ok) throw new Error(await res.text())
    status.value = 'success'
    form.name = form.email = form.message = ''
  } catch (err) {
    status.value = 'error'
    errorMsg.value = err.message
  }
}

const title = ref(null)
onMounted(() => requestAnimationFrame(() => title.value?.classList.add('slide-down')))
</script>

<style scoped>
.slide-down {
  animation: slideDown 0.8s ease-out both;
}
</style>
