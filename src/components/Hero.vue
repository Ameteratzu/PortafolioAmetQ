<template>
  <section
    ref="heroSection"
    id="hero"
    class="min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6
           bg-gradient-to-r from-primary to-accent gap-4"
  >
    <!-- Avatar -->
    <img
      src="/amet-pixelado.png" 
      alt="Avatar Amet Quispe"
      class="w-40 h-40 md:w-80 md:h-80 rounded-full shadow-lg mb-6 md:mb-0 md:mr-10"
    />

    <div class="max-w-2xl">
      <h1 class="text-5xl md:text-6xl font-bold text-white mb-4">
        {{ $t('hero.title') }}
      </h1>
      <p class="text-lg md:text-xl text-white/90 mb-8">
        {{ $t('hero.subtitle') }}
      </p>
      <div class="flex flex-wrap gap-4 justify-center md:justify-start">
        
        <a
          href="https://github.com/Ameteratzu"
          target="_blank"
          class="btn-primary inline-flex items-center gap-2 px-6 py-3 font-medium rounded-full
                 bg-white text-primary hover:bg-white/90 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.17c-3.338.727-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.304.76-1.604-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.47-2.38 1.236-3.22-.124-.304-.536-1.527.116-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.65.241 2.872.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.62-5.48 5.92.43.37.815 1.102.815 2.222v3.293c0 .32.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          GitHub
        </a>

        <!-- Botones -->
        <a
          href="https://www.linkedin.com/in/aamama"
          target="_blank"
          class="btn-secondary inline-flex items-center gap-2 px-6 py-3 font-medium rounded-full
                 bg-white/20 text-white hover:bg-white/30 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 48 48" fill="currentColor">
            <path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
          </svg>          
          LinkedIn
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const heroSection = ref(null)
onMounted(() => {
  gsap.from(heroSection.value, {
    opacity: 0,
    y: -50,
    duration: 1
  })
})
</script>

<style scoped>
.btn-primary {
  @apply bg-white text-primary;
}
.btn-secondary {
  @apply bg-white/20 text-white;
}
</style>
