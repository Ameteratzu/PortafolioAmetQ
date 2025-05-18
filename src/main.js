import './style.css'
import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'
import VueScrollTo from 'vue-scrollto'

const htmlEl = document.documentElement

const saved = localStorage.getItem('theme')
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches

if (saved === 'dark' || (saved === null && systemDark)) {
  htmlEl.classList.add('dark')
} else {
  htmlEl.classList.remove('dark')
}

if (saved === null) {
  window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', e => {
      htmlEl.classList.toggle('dark', e.matches)
    })
}

createApp(App)
  .use(i18n)
  .use(VueScrollTo) // ✅ Activar scroll animado
  .mount('#app')
