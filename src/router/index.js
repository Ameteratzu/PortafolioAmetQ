import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  // otras rutas…
]

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home }
  ]
})