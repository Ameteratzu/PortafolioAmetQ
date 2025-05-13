<template>
  <nav
    class="fixed inset-x-0 top-0 z-40 bg-white/70 dark:bg-darkbg/50 backdrop-blur-sm py-4 bg-transparent shadow-lg
          transition-all duration-300 ease-in-out"
  >
    <div class="container mx-auto flex justify-center space-x-8">
      <a href="#hero"    class="text-gray-1000 dark:text-gray-100 hover:text-primary transition">Inicio</a>
      <a href="#about"   class="text-gray-1000 dark:text-gray-100 hover:text-primary transition">Sobre mí</a>
      <a href="#projects" class="text-gray-1000 dark:text-gray-100 hover:text-primary transition">Proyectos</a>
      <a href="#contact" class="text-gray-1000 dark:text-gray-100 hover:text-primary transition">Contacto</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>
<style scoped>
.nav-link {
  @apply text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-accent transition;
}
ul {
  @apply bg-black/80 dark:bg-black/80; /* sombra negra semitransparente */
}
</style>