<template>
  <footer class="py-10 bg-gradient-to-r from-primary to-accent text-white">
    <div
      class="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center"
    >
      <!-- Texto traducido -->
      <p class="text-sm">
        {{ $t('footer.copy') }}
      </p>

      <!-- Iconos sociales con aria-label y alt traducidos -->
      <div class="flex space-x-4 mt-4 md:mt-0">
        <a
          href="https://github.com/aamama"
          target="_blank"
          rel="noopener"
          :aria-label="$t('footer.github')"
          class="p-2 bg-white/20 rounded-full hover:bg-white/40 transition"
        >
          <img
            src="https://img.icons8.com/ios-glyphs/48/ffffff/github.png"
            :alt="$t('footer.github')"
            class="w-6 h-6"
          />
        </a>
        <a
          href="https://linkedin.com/in/aamama"
          target="_blank"
          rel="noopener"
          :aria-label="$t('footer.linkedin')"
          class="p-2 bg-white/20 rounded-full hover:bg-white/40 transition"
        >
          <img
            src="https://img.icons8.com/fluency/48/ffffff/linkedin.png"
            :alt="$t('footer.linkedin')"
            class="w-6 h-6"
          />
        </a>
        <a
          href="mailto:quispeamet2@gmail.com"
          :aria-label="$t('footer.email')"
          class="p-2 bg-white/20 rounded-full hover:bg-white/40 transition"
        >
          <img
            src="https://img.icons8.com/color/48/ffffff/gmail--v1.png"
            :alt="$t('footer.email')"
            class="w-6 h-6"
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
/* No estilos adicionales */
</style>
