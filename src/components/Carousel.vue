<template>
  <div class="overflow-hidden relative">
    <div
      ref="track"
      :style="trackStyles"
      class="flex"
    >
      <div
        v-for="(img, idx) in displayImages"
        :key="idx"
        class="flex-shrink-0
               w-full        /* móvil: ocupa todo el ancho */
               sm:w-1/2      /* sm (≥640px): dos por fila */
               md:w-1/3      /* md (≥768px): tres por fila */
               lg:w-1/4      /* lg (≥1024px): cuatro por fila */
               px-2"
      >
      <div
        v-for="(img, idx) in displayImages"
        :key="idx"
        class="flex-shrink-0 w-1/3 px-2"
      ></div>
        <img
          :src="img"
          :alt="$t('about.certificationsTitle')"
          class="w-full h-auto rounded-lg shadow-md"
        />
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

// Cuántas imágenes se ven a la vez
const visibleCount = 3

// Duplicamos las primeras `visibleCount` al final para bucle infinito
const displayImages = computed(() =>
  [...props.images, ...props.images.slice(0, visibleCount)]
)

const currentIndex = ref(0)


// Estilos dinámicos: deshabilitar transición al resetear a 0
const trackStyles = computed(() => ({
  transform: `translateX(-${currentIndex.value * (100 / visibleCount)}%)`,
  transition:
    currentIndex.value === 0
      ? 'none'
      : 'transform 0.5s ease-in-out'
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

// Cuando llegamos al duplicado, reiniciamos sin animación
watch(currentIndex, (val) => {
  if (val >= props.images.length) {
    // Esperamos que termine la transición
    setTimeout(() => {
      currentIndex.value = 0
    }, 500) // igual a la duración en ms
  }
})
</script>

<style scoped>
/* Para optimizar la transición */
.flex {
  will-change: transform;
}
</style>
