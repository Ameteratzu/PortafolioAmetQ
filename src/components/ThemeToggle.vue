<template>
  <button @click="$emit('toggle')" class="px-3 py-1 border rounded">
    {{ current === 'light' ? '🌙 Dark' : '🔆 Light' }}
  </button>
</template>

<script setup>
import { computed } from 'vue'
const current = computed(() => 
  localStorage.getItem('theme') 
    || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
)
</script>

<style scoped>
button { background: none; cursor: pointer; }
</style>
