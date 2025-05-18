<template>
  <section id="skills" class="py-20 bg-gray-50 dark:bg-darkbg px-6">
    <div class="container mx-auto max-w-4xl text-center">
      <h2 class="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 slide-down">
        {{ $t('skills.title') }}
      </h2>
      <p class="text-lg text-gray-700 dark:text-gray-400 mb-10">
        {{ $t('skills.description') }}
      </p>

      <div class="space-y-4 text-left">
        <div v-for="(group, category) in categorizedSkills" :key="category" class="border border-gray-300 dark:border-gray-600 rounded-lg">
          <button
            class="w-full px-4 py-3 flex justify-between items-center text-lg font-semibold bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-primary dark:text-accent transition"
            @click="toggle(category)"
          >
            <span>{{ category }}</span>
            <svg
              :class="open.includes(category) ? 'rotate-180' : ''"
              class="w-5 h-5 transition-transform transform"
              fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <transition name="fade">
            <div v-show="open.includes(category)" class="px-4 py-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <div
                  v-for="skill in group"
                  :key="skill.name"
                  class="flex flex-col items-center bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-md transition"
                >
                  <img :src="getIcon(skill.name)" :alt="skill.name" class="w-8 h-8 mb-2" />
                  <span class="text-sm text-gray-900 dark:text-gray-100 font-medium">{{ skill.name }}</span>
                  <span class="text-xs mt-1 px-2 py-0.5 rounded-full" :class="badge(skill.level)">
                    {{ skill.level }}
                  </span>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const categorizedSkills = {
  Frontend: [
    { name: 'HTML', level: 'Avanzado' },
    { name: 'CSS', level: 'Avanzado' },
    { name: 'JavaScript', level: 'Avanzado' },
    { name: 'TypeScript', level: 'Básico' },
    { name: 'Vue 3', level: 'Avanzado' },
    { name: 'React', level: 'Básico' }
  ],
  Backend: [
    { name: 'PHP', level: 'Intermedio' },
    { name: 'Python', level: 'Intermedio' },
    { name: 'Laravel', level: 'Básico' },
    { name: 'Flask', level: 'Intermedio' },
    { name: 'MySQL', level: 'Intermedio' }
  ],
  DevOps: [
    { name: 'Git', level: 'Avanzado' },
    { name: 'GitHub', level: 'Avanzado' },
    { name: 'Docker', level: 'Avanzado' },
    { name: 'Kubernetes', level: 'Intermedio' },
    { name: 'Azure', level: 'Intermedio' },
    { name: 'AWS', level: 'Básico' },
    { name: 'OpenShift', level: 'Básico' }
  ],
  Herramientas: [
    { name: 'Linux', level: 'Intermedio' },
    { name: 'Office', level: 'Avanzado' },
    { name: 'AI', level: 'Intermedio' },
    { name: 'WordPress', level: 'Intermedio' }
  ]
}

const open = ref(['Frontend'])

function toggle(category) {
  open.value.includes(category)
    ? open.value = open.value.filter(c => c !== category)
    : open.value.push(category)
}

function badge(level) {
  return {
    Avanzado: 'bg-green-200 text-green-800 dark:bg-green-300/20 dark:text-green-300',
    Intermedio: 'bg-yellow-200 text-yellow-800 dark:bg-yellow-300/20 dark:text-yellow-300',
    Básico: 'bg-red-100 text-red-800 dark:bg-red-300/20 dark:text-red-300'
  }[level]
}

function getIcon(skill) {
  const icons = {
    Python: 'https://img.icons8.com/?size=100&id=13441&format=png&color=000000',
    PHP: 'https://img.icons8.com/?size=100&id=39856&format=png&color=000000',
    HTML: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000',
    CSS: 'https://img.icons8.com/?size=100&id=21278&format=png&color=000000',
    JavaScript: 'https://img.icons8.com/?size=100&id=108784&format=png&color=000000',
    TypeScript: 'https://img.icons8.com/?size=100&id=ntDA7SYwfBs4&format=png&color=000000',
    Flask: 'https://img.icons8.com/?size=100&id=MHcMYTljfKOr&format=png&color=000000',
    React: 'https://img.icons8.com/?size=100&id=voJ15GoZniHZ&format=png&color=000000',
    'Vue 3': 'https://img.icons8.com/?size=100&id=rY6agKizO9eb&format=png&color=000000',
    Laravel: 'https://img.icons8.com/?size=100&id=lRjcvhvtR81o&format=png&color=000000',
    Git: 'https://img.icons8.com/?size=100&id=20906&format=png&color=000000',
    GitHub: 'https://img.icons8.com/?size=100&id=12599&format=png&color=000000',
    MySQL: 'https://img.icons8.com/?size=100&id=f34HG4w9RjQk&format=png&color=000000',
    Linux: 'https://img.icons8.com/?size=100&id=17842&format=png&color=000000',
    Wordpress: 'https://img.icons8.com/?size=100&id=13664&format=png&color=000000',
    Docker: 'https://img.icons8.com/color/48/docker.png',
    Kubernetes: 'https://img.icons8.com/?size=100&id=cvzmaEA4kC0o&format=png&color=000000',
    Azure: 'https://img.icons8.com/?size=100&id=VLKafOkk3sBX&format=png&color=000000',
    AWS: 'https://img.icons8.com/color/48/amazon-web-services.png',
    OpenShift: 'https://img.icons8.com/color/48/openshift.png',
    Office: 'https://img.icons8.com/?size=100&id=37619&format=png&color=000000',
    AI: 'https://img.icons8.com/fluency/48/artificial-intelligence.png'
  }
  return icons[skill] || 'https://img.icons8.com/ios-filled/50/code.png'
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: max-height 0.5s ease, opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  max-height: 0;
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  max-height: 600px;
  opacity: 1;
}
.slide-down {
  animation: slideDown 0.8s ease-out both;
}
@keyframes slideDown {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
