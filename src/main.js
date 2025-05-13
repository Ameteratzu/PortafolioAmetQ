// src/main.js
import './style.css'
import { createApp } from 'vue'
import App            from './App.vue'
import i18n           from './i18n'

const htmlEl = document.documentElement

// 1) Mira si el usuario ya guardó preferencia
const saved = localStorage.getItem('theme')
// 2) Si no, usa prefers-color-scheme
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches

if (saved === 'dark' || (saved === null && systemDark)) {
  htmlEl.classList.add('dark')
} else {
  htmlEl.classList.remove('dark')
}

// Escucha cambios en preferencia del sistema si NO hay override
if (saved === null) {
  window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', e => {
      htmlEl.classList.toggle('dark', e.matches)
    })
}

createApp(App)
  .use(i18n)
  .mount('#app')
