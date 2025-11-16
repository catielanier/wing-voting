import { createApp } from 'vue'
import { createMemoryHistory, createRouter, type RouteRecordRaw } from 'vue-router'
import './style.css'
import App from './App.vue'
import Ballot from './components/Ballot.vue';
import Admin from './components/Admin.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Ballot
  },
  {
    path: "/admin",
    component: Admin
  }
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
