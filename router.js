import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Admin from '@/views/Admin.vue';
import Login from '@/views/Login.vue';
import UserPanel from '@/views/UserPanel.vue';
import { useAuthStore } from '@/stores/auth';

const routes = [
  { path: '/', component: Home },
  { path: '/admin', component: Admin, meta: { requiresAdmin: true } },
  { path: '/login', component: Login },
  { path: '/user-panel', component: UserPanel, meta: { requiresAuth: true } }
];

 export const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const auth = useAuthStore();
  if (to.meta.requiresAdmin && (!auth.user || auth.user.role !== 'admin')) {
    next('/');
  } else if (to.meta.requiresAuth && !auth.user) {
    next('/login');
  } else {
    next();
  }
});

