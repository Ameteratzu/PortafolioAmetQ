<template>
  <section id="timeline" class="py-20 bg-gray-50 dark:bg-darkbg px-6">
    <div class="container mx-auto max-w-3xl">
      <h2 class="section-title text-4xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 slide-down mb-10">
        {{ $t('timelineSection.title') }}
      </h2>

      <div class="relative">
        <div class="absolute left-6 top-0 bottom-0 w-1 bg-primary dark:bg-accent"></div>

        <div
          v-for="(entry, idx) in timeline"
          :key="entry.period"
          class="relative mb-12 pl-16 flex items-start animate-slide-up"
          :style="{ animationDelay: idx * 150 + 'ms' }"
        >
          <div class="absolute left-0 w-12 h-12 rounded-full bg-white dark:bg-darkbg border-4 border-primary dark:border-accent flex items-center justify-center shadow-md">
            <img :src="entry.icon" alt="icono" class="w-6 h-6" />
          </div>

          <div>
            <span class="text-sm font-medium text-primary dark:text-accent">
              {{ entry.period }}
            </span>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-1">
              {{ entry.role }}
            </h3>
            <p class="text-gray-700 dark:text-gray-400 mt-2">
              {{ entry.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

  <script setup>
  const timeline = [
    {
      period: 'Marzo 2025 – Abril 2025',
      role: 'Desarrollador Freelance – Perú',
      desc: 'Diseñé e implementé una tienda virtual completa en WordPress, configurando métodos de pago, personalización de módulos y diseño responsive para un cliente peruano.',
      icon: 'https://img.icons8.com/color/48/online-store.png'
    },
    {
      period: 'Enero 2025 – Febrero 2025',
      role: 'Ingeniero Azure DevOps – Digital Solutions 324',
      desc: 'Automatización de pipelines CI/CD, gestión de contenedores en AKS (Azure Kubernetes Service), despliegues eficientes en la nube y monitoreo continuo en entornos productivos.',
      icon: 'https://img.icons8.com/color/48/azure-1.png'
    },
    {
      period: 'Septiembre 2024 – Noviembre 2024',
      role: 'Servicio de atención al cliente – Proyecto externo',
      desc: 'Actualización, manejo y análisis de bases de datos de clientes, asegurando información precisa y asistencia técnica personalizada en un entorno remoto.',
      icon: 'https://img.icons8.com/ios-filled/50/customer-support.png'
    },
    {
      period: 'Mayo 2024 – Agosto 2024',
      role: 'Profesor de Criptografía – Salesland',
      desc: 'Dicté clases de criptografía aplicada, seguridad de datos y protocolos criptográficos. Además, realicé tutorías especializadas y resolución de dudas técnicas.',
      icon: 'https://img.icons8.com/ios-filled/50/security-checked.png'
    },
    {
      period: 'Noviembre 2022 – Noviembre 2023',
      role: 'Asistente TI – Zerobyte Spa',
      desc: 'Proporcioné soporte técnico, automatización de tareas administrativas mediante scripting, mantenimiento de sistemas informáticos y respaldo de bases de datos.',
      icon: 'https://img.icons8.com/ios-filled/50/laptop-settings.png'
    }
  ]
</script>

<style scoped>
@keyframes slide-up {
  from { opacity: 0; transform: translateY(1rem); }
  to   { opacity: 1; transform: translateY(0); }
}
.animate-slide-up {
  animation: slide-up 0.6s ease-out forwards;
  will-change: transform, opacity;
}
.section-title {
  @apply text-4xl font-bold;
}
</style>
