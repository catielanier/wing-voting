import { createApp } from 'vue'
import { createMemoryHistory, createRouter, type RouteRecordRaw } from 'vue-router'
import './style.css'
import App from './App.vue'

const routes: RouteRecordRaw[] = [];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
