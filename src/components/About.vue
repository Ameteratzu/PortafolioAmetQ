<template>
  <section id="about" class="py-20 bg-gray-50 dark:bg-darkbg px-6">
    <div class="container mx-auto max-w-3xl space-y-12">
      <!-- Título -->
      <h2
        ref="title"
        class="text-4xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 slide-down"
      >
        {{ $t('about.title') }}
      </h2>

      <!-- Descripción general -->
      <div class="space-y-6">
        <!-- v-html debe cerrarse correctamente -->
        <p
          class="text-base leading-relaxed text-gray-800 dark:text-gray-200"
          v-html="$t('about.bio1')"
        ></p>
        <p class="text-base leading-relaxed text-gray-800 dark:text-gray-200">
          <strong>{{ $t('about.professionalPathLabel') }}</strong>
          {{ $t('about.professionalPath') }}
        </p>
        <p class="text-base leading-relaxed text-gray-800 dark:text-gray-200">
          <strong>{{ $t('about.keySkillsLabel') }}</strong>
          {{ $t('about.keySkills') }}
        </p>
      </div>

      <!-- Slider de Certificaciones -->
      <div>
        <h3
          class="text-4xl md:text-4xl font-bold section-subtitle text-gray-900 dark:text-gray-100 mb-6"
        >
          {{ $t('about.certificationsTitle') }}
        </h3>
        <Carousel :images="certImages" :interval="3000" />
      </div>

      <!-- Línea de tiempo de experiencia -->
      <Timeline />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Carousel from './Carousel.vue'
import Timeline from './Timeline.vue'

// Rutas absolutas en public/
const certImages = [
  {
    image: '/certificaciones/cert1.jpg',
    title: 'Vue.js Avanzado',
    institution: 'Platzi',
    year: 2023,
    tags: ['Frontend', 'Avanzado'],
    link: 'https://platzi.com/certificado/vue'
  },
  {
    image: '/certificaciones/cert2.jpg',
    title: 'APIs con Laravel',
    institution: 'Udemy',
    year: 2022,
    tags: ['Backend', 'Laravel'],
    link: 'https://udemy.com/cert/laravel'
  },
  {
    image: '/certificaciones/cert3.jpg',
    title: 'GitHub para Devs',
    institution: 'Coursera',
    year: 2023,
    tags: ['DevOps', 'Herramientas'],
    link: 'https://coursera.org/certificate/github'
  }
]


// Animación de título
const title = ref(null)
onMounted(() => {
  requestAnimationFrame(() => {
    title.value?.classList.add('slide-down')
  })
})
</script>

<style scoped>
/* Asegura que la animación slideDown esté definida globalmente */
.slide-down {
  animation: slideDown 0.8s ease-out both;
}
</style>
