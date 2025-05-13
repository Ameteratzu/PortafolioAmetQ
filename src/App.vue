<script setup>
import './style.css'
import { ref, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'

import Navbar   from './components/Navbar.vue'
import Hero     from './components/Hero.vue'
import About    from './components/About.vue'
import Skills   from './components/Skills.vue' 
import Projects from './components/Projects.vue'
import Contact  from './components/Contact.vue'
import Footer   from './components/Footer.vue'

/* — Idiomas — */
const { locale } = useI18n()
const locales = [
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
]
const showLang = ref(false)
function selectLocale(c) {
  locale.value = c
  showLang.value = false
}

/* — Dark / Light Mode — */
const htmlEl = document.documentElement
const theme = ref(
  localStorage.getItem('theme')
    ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
)

function applyTheme(mode) {
  htmlEl.classList.toggle('dark', mode === 'dark')
}
applyTheme(theme.value)

watch(theme, val => {
  localStorage.setItem('theme', val)
  applyTheme(val)
})

onMounted(() => {
  if (localStorage.getItem('theme') === null) {
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', e => {
        theme.value = e.matches ? 'dark' : 'light'
      })
  }
})

function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <!-- Selector de idioma + Toggle tema -->
  <div class="fixed top-2 right-4 z-50 flex items-center space-x-3 dark:bg-darkbg">
    <!-- Dropdown idiomas -->
    <div class="relative">
      <button
        @click="showLang = !showLang"
        class="flex items-center space-x-2 px-3 py-1 border-2 rounded-full
                     bg-white dark:bg-darkbg border-gray-800 dark:border-gray-600
                     text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
      >
        <span>{{ locales.find(l => l.code === locale)?.flag }}</span>
        <span class="text-sm font-medium">{{ locale.toUpperCase() }}</span>
        <svg xmlns="http://www.w3.org/2000/svg"
             class="w-4 h-4 transition-transform"
             :class="{ 'rotate-180': showLang }"
             fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <ul
        v-if="showLang"
        class="absolute right-0 mt-2 w-36 bg-white dark:bg-darkbg border border-gray-200 dark:border-gray-700 
               rounded-lg shadow-lg overflow-hidden"
      >
        <li v-for="l in locales" :key="l.code">
          <button
            @click="selectLocale(l.code)"
            class="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 
                   flex items-center space-x-2 text-sm"
          >
            <span>{{ l.flag }}</span>
            <span>{{ l.label }}</span>
          </button>
        </li>
      </ul>
    </div>

    <!-- Toggle tema -->
    <button
      @click="toggleTheme"
      class="flex items-center justify-center w-10 h-10 border-2 rounded-full
                   bg-white dark:bg-darkbg border-gray-800 dark:border-gray-600
                   text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
      :aria-label="theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'"
    >
      <svg v-if="theme === 'light'" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 14a4 4 0 100-8 4 4 0 000 8zm8-4a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM4 10a.75.75 0 01-.75.75H1.75a.75.75 0 010-1.5H3.25A.75.75 0 014 10zM15.364 4.636a.75.75 0 011.061 0l1.06 1.06a.75.75 0 11-1.06 1.061l-1.061-1.06a.75.75 0 010-1.061zM5.576 14.424a.75.75 0 011.061 0l1.06 1.06a.75.75 0 01-1.06 1.061l-1.061-1.06a.75.75 0 010-1.061zM15.364 15.364a.75.75 0 010 1.06l-1.061 1.061a.75.75 0 11-1.06-1.06l1.06-1.061a.75.75 0 011.061 0zM5.576 5.576a.75.75 0 010 1.061L4.515 7.698a.75.75 0 11-1.061-1.06l1.06-1.061a.75.75 0 011.062 0z" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
        <path d="M17.293 13.293a8 8 0 11-10.586-10.586 7 7 0 0010.586 10.586z" />
      </svg>
    </button>
  </div>

  <!-- Navbar y contenido -->
  <Navbar />
  <main class="pt-14 dark:bg-darkbg bg-gray-50 min-h-screen">
    <Hero />
    <About />
    <skills />
    <Projects />
    <Contact />
  </main>
  <Footer />
</template>
