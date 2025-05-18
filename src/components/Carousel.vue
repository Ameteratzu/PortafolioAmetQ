<template>
  <div class="overflow-hidden relative">
    <div
      ref="track"
      :style="trackStyles"
      class="flex touch-pan-x snap-x snap-mandatory"
    >
      <div
        v-for="(img, idx) in displayImages"
        :key="idx"
        class="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 snap-start"
      >
        <img
          :src="img"
          :alt="$t('about.certificationsTitle')"
          class="w-full h-auto rounded-lg shadow-md hover:scale-105 hover:z-10 transition-transform cursor-pointer"
          @click="openModal(img)"
        />
      </div>
    </div>

    <!-- Modal de imagen ampliada -->
    <div v-if="modalImage" class="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
      <div class="relative max-w-3xl w-full p-4">
        <button @click="closeModal" class="absolute top-2 right-2 text-white text-2xl">&times;</button>
        <img :src="modalImage" alt="Certificado ampliado" class="w-full rounded shadow-lg" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
  images: { type: Array, required: true },
  interval: { type: Number, default: 3000 }
})

const visibleCount = 3
const displayImages = computed(() => [
  ...props.images,
  ...props.images.slice(0, visibleCount)
])

const currentIndex = ref(0)
const modalImage = ref(null)

const trackStyles = computed(() => ({
  transform: `translateX(-${currentIndex.value * (100 / visibleCount)}%)`,
  transition: currentIndex.value === 0 ? 'none' : 'transform 0.5s ease-in-out'
}))

let timer = null
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

function openModal(image) {
  modalImage.value = image
}
function closeModal() {
  modalImage.value = null
}
</script>

<style scoped>
.flex {
  will-change: transform;
}
</style>
