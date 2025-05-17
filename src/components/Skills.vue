<template>
  <section id="skills" class="py-20 bg-gray-50 dark:bg-darkbg px-6">
    <div class="container mx-auto max-w-3xl text-center">
      <h2 class="text-4xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 slide-down mb-4">
        {{ $t('skills.title') }}
      </h2>
      <p class="text-lg text-gray-700 dark:text-gray-400 mb-8">
        {{ $t('skills.description') }}
      </p>
      <div class="flex flex-wrap justify-center gap-4">
        <div
          v-for="skill in skillsList"
          :key="skill"
          class="flex items-center space-x-2 bg-primary/10 dark:bg-accent/20
                 px-4 py-2 rounded-full text-lg font-medium text-primary dark:text-gray-200"
        >
          <img :src="getIcon(skill)" alt="" class="w-6 h-6" />
          <span>{{ skill }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const skillsList = [
  'Python', 'PHP' ,'HTML','CSS','JavaScript','TypeScript', 'Flask','React', 'Vue 3', 'Laravel',
  'Git', 'GitHub', 'MySQL','Linux', 'Odoo', 'Docker', 'Kubernetes', 'Azure', 'AWS',
  'OpenShift','Office', 'AI'
]

function getIcon(skill) {
  const icons = {
    Python: 'https://img.icons8.com/?size=100&id=13441&format=png&color=000000',
    PHP: 'https://img.icons8.com/?size=100&id=39856&format=png&color=000000',
    HTML : 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000',
    CSS : 'https://img.icons8.com/?size=100&id=21278&format=png&color=000000',
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
    Odoo: 'https://cdn-1.webcatalog.io/catalog/odoo/odoo-icon-filled-256.webp?v=1714775315194',
    Docker: 'https://img.icons8.com/color/48/docker.png',
    Kubernetes: 'https://img.icons8.com/?size=100&id=cvzmaEA4kC0o&format=png&color=000000',
    Azure: 'https://img.icons8.com/?size=100&id=VLKafOkk3sBX&format=png&color=000000',
    AWS: 'https://img.icons8.com/color/48/amazon-web-services.png',
    OpenShift: 'https://img.icons8.com/color/48/openshift.png',
    Office: 'https://img.icons8.com/?size=100&id=37619&format=png&color=000000',
    AI: 'https://img.icons8.com/fluency/48/artificial-intelligence.png'
  }
  return icons[skill] || ''
}
</script>

<style scoped>
/* Nada extra */
</style>
