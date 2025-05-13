<template>
  <section
    id="contact"
    class="py-20 bg-gray-50 dark:bg-darkbg px-6"
  >
    <div class="container mx-auto max-w-md space-y-8">
      <!-- Título + Imagen lateral -->
      <div class="flex flex-col md:flex-row items-center justify-center gap-4">
        <h2
          ref="title"
          class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 slide-down"
        >
          {{ $t('contact.title') }}
        </h2>
        <img
          src="https://img.icons8.com/clouds/100/messaging-.png"
          alt="mensajería"
          class="w-24 h-24 md:w-28 md:h-28"
        />
      </div>

      <!-- Descripción -->
      <p class="text-lg text-gray-700 dark:text-gray-300 text-center">
        {{ $t('contact.description') }}
      </p>

      <!-- Formulario con borde e i18n -->
      <form
        @submit.prevent="submitForm"
        class="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg
               border-2 border-primary dark:border-accent"
      >
        <input
          v-model="form.name"
          type="text"
          :placeholder="$t('contact.fields.name')"
          class="form-input w-full border-2 border-primary dark:border-accent rounded-md p-2"
          required
        />
        <input
          v-model="form.email"
          type="email"
          :placeholder="$t('contact.fields.email')"
          class="form-input w-full border-2 border-primary dark:border-accent rounded-md p-2"
          required
        />
        <textarea
          v-model="form.message"
          rows="4"
          :placeholder="$t('contact.fields.message')"
          class="form-textarea w-full border-2 border-primary dark:border-accent rounded-md p-2"
          required
        ></textarea>
        <button
          type="submit"
          class="btn-primary w-full border-2 border-primary dark:border-accent rounded-md py-2"
        >
          {{ $t('contact.sendButton') }}
        </button>
      </form>

      <!-- Modal centrado con i18n -->
      <div
        v-if="showModal"
        class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      >
        <div
          class="bg-gradient-to-r from-primary to-accent text-white p-8 rounded-xl
                 shadow-2xl max-w-sm text-center space-y-4"
        >
          <h3 class="text-2xl font-semibold">
            {{ $t('contact.modalTitle') }}
          </h3>
          <p>{{ $t('contact.modalMessage') }}</p>
          <button
            @click="closeModal"
            class="mt-4 px-4 py-2 bg-white text-primary rounded-full font-medium
                   hover:bg-white/90 transition"
          >
            {{ $t('contact.modalClose') }}
          </button>
        </div>
      </div>

      <!-- Botones de redes (sin traducir) -->
      <div class="flex justify-center gap-6 mt-4">
        <a
          href="mailto:quispeamet2@gmail.com"
          class="btn-primary flex items-center gap-2 border-2 border-primary
                 dark:border-accent rounded-lg p-2"
          aria-label="Gmail"
        >
          <img src="/src/assets/images/iconos/icons8-gmail.svg"
               alt="Gmail"
               class="w-8 h-8"
          />
          <span>Gmail</span>
        </a>
        <a
          href="https://github.com/aamama"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-secondary flex items-center gap-2 border-2 border-primary
                 dark:border-accent rounded-lg p-2"
          aria-label="GitHub"
        >
          <img src="/src/assets/images/iconos/icons8-github.svg"
               alt="GitHub"
               class="w-8 h-8"
          />
          <span>GitHub</span>
        </a>
        <a
          href="https://linkedin.com/in/aamama"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-secondary flex items-center gap-2 border-2 border-primary
                 dark:border-accent rounded-lg p-2"
          aria-label="LinkedIn"
        >
          <img src="/src/assets/images/iconos/icons8-linkedin.svg"
               alt="LinkedIn"
               class="w-8 h-8"
          />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

const form = reactive({ name: '', email: '', message: '' })
const showModal = ref(false)

function submitForm() {
  showModal.value = true
  form.name = ''
  form.email = ''
  form.message = ''
}

function closeModal() {
  showModal.value = false
}

const title = ref(null)
onMounted(() => {
  requestAnimationFrame(() => {
    title.value?.classList.add('slide-down')
  })
})
</script>

<style scoped>
.slide-down {
  animation: slideDown 0.8s ease-out both;
}
</style>
