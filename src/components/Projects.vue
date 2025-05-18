<template>
  <section id="projects" class="py-20 bg-gray-50 dark:bg-darkbg px-6">
    <div class="container mx-auto">
      <!-- Título  -->
      <h2 class="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center slide-down">
        {{ $t('projects.title') }}
      </h2>

      <!-- Descripción de la sección -->
      <p class="text-center text-lg text-gray-700 dark:text-gray-400 mb-10">
        {{ $t('projects.description') }}
      </p>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="p in projects" :key="p.name"
          class="bg-white dark:bg-darkbg border-2 border-primary dark:border-accent 
                 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-transform hover:scale-105">
          <img
            :src="p.image"
            alt=""
            class="rounded-lg mb-4 object-cover h-40 w-full"
          />
          <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
            {{ p.name }}
          </h3>
          <p class="text-gray-700 dark:text-gray-400 mb-4">
            {{ p.description }}
          </p>
          <a
            :href="p.link"
            target="_blank"
            class="inline-block btn-secondary px-4 py-2 border-2 border-primary 
                   dark:border-accent rounded-full text-primary dark:text-accent 
                   hover:bg-primary/10 dark:hover:bg-accent/10 transition">
            {{ $t('projects.viewMore') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Datos de proyectos 
const projects = ref([
  {
    name: 'Portafolio Vue.js',
    description: 'Este mismo portafolio dinámico con Vue 3, Vue Router y Vite.',
    link: 'https://github.com/tu-usuario/portafolio-vue',
    image: '/assets/images/project1.jpg',
  },
  {
    name: 'Cerveza Huaytapallana',
    description: 'Aplicación web para gestionar tareas y proyectos, desarrollada con Django y React.',
    link: 'https://cervezahuaytapallana.com',
    image: '/assets/images/project2.png',
  },
  {
    name: 'Formulario de registro',
    description: 'Aplicación web para gestionar tareas y proyectos, desarrollada con Django y React.',
    link: 'formularioapruebaamet.netlify.app',
    image: '/assets/images/project2.png',
  },
  {
    name: 'Pagina de Mecanica',
    description: 'Aplicación web para gestionar tareas y proyectos, desarrollada con Django y React.',
    link: 'https://cervezahuaytapallana.com',
    image: '/assets/images/project2.png',
  },
])

// Animación del título
onMounted(() => {
  const el = document.querySelector('#projects .slide-down')
  if (el) requestAnimationFrame(() => el.classList.add('slide-down'))
})
</script>

<style scoped>
.slide-down {
  animation: slideDown 0.8s ease-out both;
}
</style>
