<template>
  <section
    id="hero"
    class="min-h-screen flex flex-col items-center justify-center text-center px-6
           bg-gradient-to-r from-primary to-accent"
  >
    <h1 class="text-5xl md:text-6xl font-bold text-white mb-4">
      {{ $t('hero.title') }}
    </h1>
    <p class="max-w-2xl text-lg md:text-xl text-white/90 mb-8">
      {{ $t('hero.subtitle') }}
    </p>
    <div class="flex gap-4">
      <a
        href="https://linkedin.com/in/aamama"
        target="_blank"
        class="btn-primary"
      >
        {{ $t('hero.linkedin') }}
      </a>
      <a
        href="mailto:quispeamet2@gmail.com"
        class="btn-primary"
      >
        {{ $t('hero.email') }}
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
}
</script>
