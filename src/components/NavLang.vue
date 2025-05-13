<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const open     = ref(false)

// Sólo Español e Inglés
const locales = [
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'en', label: 'English', flag: '🇺🇸' }
]

const current = computed(() =>
  locales.find(l => l.code === locale.value)
)

function toggle() {
  open.value = !open.value
}

function changeLocale(code) {
  locale.value = code
  open.value  = false
}
</script>

<template>
  <div class="fixed top-4 right-4 z-50">
    <div class="relative">
      <!-- Botón principal -->
      <button
        @click="toggle"
        class="flex items-center gap-2 px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-sm hover:shadow-md transition"
      >
        <span>{{ current.flag }}</span>
        <span>{{ current.label }}</span>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <!-- Menú desplegable -->
      <ul
        v-if="open"
        class="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden"
      >
        <li
          v-for="l in locales"
          :key="l.code"
        >
          <button
            @click="changeLocale(l.code)"
            class="w-full flex items-center gap-2 px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            <span>{{ l.flag }}</span>
            <span>{{ l.label }}</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
