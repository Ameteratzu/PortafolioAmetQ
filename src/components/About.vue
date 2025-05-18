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
        <p
          class="text-base leading-relaxed text-gray-800 dark:text-gray-200"
          v-html="$t('about.bio1')"
        ></p>

        <!-- Reconocimientos -->
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 class="text-lg font-semibold text-primary dark:text-accent mb-2">
            {{ $t('about.recognitionTitle') }}
          </h3>
          <p class="text-base text-gray-700 dark:text-gray-300">
            {{ $t('about.recognitionText') }}
          </p>
        </div>
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

const certImages = [
  {
    image: "/certificaciones/certFelicitacionEjercito.jpg",
    tittle: "FELICITACION DEL EJERCITO",
    institution: "EJERCITO DEL PERU",
    year: "JUL 21- JUL 23",
    tags: ["SMV"],
    links: "/certificaciones/certFelicitacionEjercito.jpg"
  },
  {
    image: "/certificaciones/cert1.jpg",
    title: "Python for Data Science, AI & Development",
    institution: "IBM",
    year: "2023",
    tags: ["Python"],
    link: "/certificaciones/cert1.jpg"
  },
  {
    image: "/certificaciones/cert2.jpg",
    title: "Algoritmo y Estructura de datos Avanzada",
    institution: "Universidad Nacional de Ingeniería",
    year: "2023",
    tags: ["Ciencia de datos"],
    link: "/certificaciones/cert2.jpg"
  },
  {
    image: "/certificaciones/cert3.jpg",
    title: "GITHUB para programadores",
    institution: "LinkedIn",
    year: "2023",
    tags: ["Github"],
    link: "/certificaciones/cert3.jpg"
  },
  {
    image: "/certificaciones/cert4.jpg",
    title: "Curso especializado de Hacking Etico",
    institution: "MINPE",
    year: "2023",
    tags: ["Hacking"],
    link: "/certificaciones/cert4.jpg"
  },
  {
    image: "/certificaciones/cert6.jpg",
    title: "Ciberseguridad en el teletrabajo",
    institution: "Google activate",
    year: "2023",
    tags: ["Seguridad"],
    link: "/certificaciones/cert6.jpg"
  },
  {
    image: "/certificaciones/cert7.jpg",
    title: "Information Security Awareness",
    institution: "Fortinet",
    year: "2023",
    tags: ["Seguridad"],
    link: "/certificaciones/cert7.jpg"
  },
  {
    image: "/certificaciones/cert9.jpg",
    title: "Hacking Junior",
    institution: "INIF",
    year: "2023",
    tags: ["Seguridad"],
    link: "/certificaciones/cert9.jpg"
  },
  {
    image: "/certificaciones/cert10.jpg",
    title: "Certificado 10",
    institution: "Institución Desconocida",
    year: "2023",
    tags: ["General"],
    link: "/certificaciones/cert10.jpg"
  },
  {
    image: "/certificaciones/cert11.jpg",
    title: "Ensamblaje de computadoras",
    institution: "Cañetano Heredia",
    year: "2023",
    tags: ["Ensamblaje"],
    link: "/certificaciones/cert11.jpg"
  },
  {
    image: "/certificaciones/cert12.jpg",
    title: "Digital Security Basics for Democracy Activists",
    institution: "T.N.D.I.I.A",
    year: "2023",
    tags: ["Seguridad"],
    link: "/certificaciones/cert12.jpg"
  },
  {
    image: "/certificaciones/cert13.jpg",
    title: "C++ Esencial",
    institution: "LinkedIn",
    year: "2023",
    tags: ["General"],
    link: "/certificaciones/cert13.jpg"
  },
  {
    image: "/certificaciones/cert14.jpg",
    title: "Curso Hacking Completo",
    institution: "Udemy",
    year: "2023",
    tags: ["Seguridad"],
    link: "/certificaciones/cert14.jpg"
  },
  {
    image: "/certificaciones/cert15.jpg",
    title: "NSE 1 Network Security Associate",
    institution: "Fortinet",
    year: "2023",
    tags: ["General"],
    link: "/certificaciones/cert15.jpg"
  },
  {
    image: "/certificaciones/cert16.jpg",
    title: "Curso de algoritmo y estructura de datos - Basica",
    institution: "Universidad Nacional de Ingeniería",
    year: "2023",
    tags: ["General"],
    link: "/certificaciones/cert16.jpg"
  },
  {
    image: "/certificaciones/cert17.jpg",
    title: "Cybersegurity",
    institution: "CISCO",
    year: "2023",
    tags: ["General"],
    link: "/certificaciones/cert17.jpg"
  }
]


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
@keyframes slideDown {
  from { opacity: 0; transform: translateY(-10px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
