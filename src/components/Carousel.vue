<template>
  <div class="space-y-4">
    <!-- Filtro por categoría -->
    <div class="flex justify-end">
      <select v-model="selectedCategory" class="border rounded px-3 py-1 text-sm dark:bg-darkbg dark:text-white">
        <option value="all">Todos</option>
        <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
      </select>
    </div>

    <!-- Carrusel -->
    <div class="overflow-hidden relative">
      <div
        ref="track"
        :style="trackStyles"
        class="flex transition-transform duration-500 ease-in-out"
        @mouseover="stopCarousel"
        @mouseleave="startCarousel"
      >
        <div
          v-for="(cert, idx) in filteredImages"
          :key="idx"
          class="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 transform transition-transform hover:scale-105"
        >
          <div
            class="relative bg-white dark:bg-gray-800 rounded-lg shadow-md p-3 h-full flex flex-col justify-between"
            :class="(typeof cert === 'string' ? cert.includes('Felicitacion') : cert.image?.includes('Felicitacion')) ? 'ring-4 ring-yellow-400' : ''"
          >
            <!-- Icono flotante -->
            <div
              v-if="(typeof cert === 'string' ? cert.includes('Felicitacion') : cert.image?.includes('Felicitacion'))"
              class="absolute -top-3 -left-3 bg-yellow-400 text-white rounded-full p-1 shadow-md"
              title="Reconocimiento Militar"
            >
              🏅
            </div>

            <img
              :src="typeof cert === 'string' ? cert : cert.image"
              :alt="typeof cert === 'string' ? 'Certificado' : cert.title"
              class="w-full h-auto rounded-lg mb-2 cursor-pointer"
              @click="openModal(cert)"
            />

            <template v-if="typeof cert !== 'string'">
              <div class="text-sm text-gray-700 dark:text-gray-100">
                <h3 class="font-semibold">{{ cert.title }}</h3>
                <p class="text-xs text-gray-500">{{ cert.institution }} – {{ cert.year }}</p>
              </div>
              <div class="mt-2 flex flex-wrap gap-1">
                <span
                  v-for="tag in cert.tags"
                  :key="tag"
                  class="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                >{{ tag }}</span>
              </div>
              <div v-if="cert.link" class="mt-2">
                <a
                  :href="cert.link"
                  target="_blank"
                  class="text-primary dark:text-accent text-xs underline hover:text-opacity-80"
                >Ver certificado</a>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="modalOpen"
      class="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      @click.self="closeModal"
    >
      <div class="max-w-3xl w-full bg-white dark:bg-darkbg p-4 rounded-lg shadow-xl relative">
        <button class="absolute top-2 right-2 text-gray-500 hover:text-red-500" @click="closeModal">✖</button>
        <img :src="modalData.image || modalData" :alt="modalData.title || 'Certificado'" class="w-full h-auto rounded mb-4" />
        <div class="text-sm" v-if="modalData.title">
          <h3 class="text-lg font-bold mb-1">{{ modalData.title }}</h3>
          <p class="text-xs text-gray-500">{{ modalData.institution }} – {{ modalData.year }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'

const props = defineProps({
  images: Array,
  interval: { type: Number, default: 5000 }
})

const visibleCount = 3
const currentIndex = ref(0)
let timer = null

const displayImages = computed(() => [...props.images, ...props.images.slice(0, visibleCount)])

const trackStyles = computed(() => ({
  transform: `translateX(-${currentIndex.value * (100 / visibleCount)}%)`
}))

function startCarousel() {
  timer = setInterval(() => {
    currentIndex.value++
  }, props.interval)
}
function stopCarousel() {
  clearInterval(timer)
}
onMounted(startCarousel)
onBeforeUnmount(stopCarousel)

watch(currentIndex, (val) => {
  if (val >= props.images.length) {
    setTimeout(() => {
      currentIndex.value = 0
    }, 500)
  }
})

// Modal
const modalOpen = ref(false)
const modalData = ref({})
function openModal(data) {
  modalOpen.value = true
  modalData.value = data
}
function closeModal() {
  modalOpen.value = false
}

// Filtering
const selectedCategory = ref('all')
const categories = computed(() => {
  const tags = props.images.flatMap(c => typeof c === 'string' ? [] : c.tags)
  return [...new Set(tags)]
})
const filteredImages = computed(() => {
  return selectedCategory.value === 'all'
    ? displayImages.value
    : displayImages.value.filter(c => typeof c !== 'string' && c.tags.includes(selectedCategory.value))
})
</script>

<style scoped>
.flex {
  will-change: transform;
}
</style>