<template>
  <section
    id="timeline"
    class="py-20 bg-gray-50 dark:bg-darkbg px-6"
  >
    <div class="container mx-auto max-w-3xl">
      <!-- Título de sección -->
      <h2 class="section-title text-gray-900 dark:text-gray-100 mb-8">
        {{ $t('timelineSection.title') }}
      </h2>

      <div class="relative">
        <!-- Línea vertical -->
        <div class="absolute left-4 top-0 bottom-0 w-1 bg-primary dark:bg-accent"></div>

        <!-- Cada ítem -->
        <div
          v-for="(period, idx) in periods"
          :key="period"
          class="relative mb-12 pl-12 flex items-start animate-slide-up"
          :style="{ animationDelay: idx * 150 + 'ms' }"
        >
          <!-- Punto -->
          <div
            class="absolute left-0 w-8 h-8 bg-primary dark:bg-accent rounded-full
                   border-4 border-white dark:border-darkbg"
          ></div>

          <!-- Contenido -->
          <div>
            <span class="text-sm font-medium text-primary dark:text-accent">
              {{ period }}
            </span>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-1">
              {{ $t(`timeline.${period}.role`) }}
            </h3>
            <p class="text-gray-700 dark:text-gray-400 mt-2">
              {{ $t(`timeline.${period}.desc`) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const periods = [
  'Nov 2022–Nov 2023',
  'Sep 2024–Nov 2024',
  'Ene 2025–Mar 2025'
]
</script>

<style scoped>
@keyframes slide-up {
  from { opacity: 0; transform: translateY(1rem); }
  to   { opacity: 1; transform: translateY(0);       }
}
.animate-slide-up {
  animation: slide-up 0.6s ease-out forwards;
  will-change: transform, opacity;
}
/* Clase reutilizable para títulos de sección */
.section-title {
  @apply text-4xl font-bold;
}
</style>
