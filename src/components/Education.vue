<template>
  <section id="education" class="py-20 bg-gray-50 dark:bg-darkbg px-6">
    <div class="container mx-auto max-w-2xl">
      <h2 class="text-3xl font-semibold mb-10 text-center">Estudios</h2>
      <ul class="relative border-l-2 border-primary">
        <li v-for="e in education" :key="e.title" class="mb-10 ml-6">
          <span class="absolute -left-3 flex items-center justify-center bg-primary w-6 h-6 rounded-full ring-8 ring-gray-50 dark:ring-darkbg">
            <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="5"/></svg>
          </span>
          <h3 class="text-xl font-semibold">{{ e.period }}</h3>
          <p class="text-gray-600 dark:text-gray-400">{{ e.title }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>
