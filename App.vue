<template>
  <div>
    <nav class="navbar">
      <router-link to="/" class="nav-link">Home</router-link> 
      <router-link to="/login" class="nav-link">Login</router-link> 
      <router-link v-if="auth.user?.role === 'admin'" to="/admin" class="nav-link">Admin</router-link> 
      <router-link v-if="auth.user" to="/user-panel" class="nav-link">User Panel</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth';
const auth = useAuthStore();
</script>

<style scoped>
.navbar {
  background: #333;
  padding: 15px;
  display: flex;
  justify-content: center;
  gap: 15px;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 18px;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background 0.3s;
}

.nav-link:hover {
  background: #555;
}

.user-panel {
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.panel-title {
  font-size: 24px;
  color: #333;
  margin-bottom: 15px;
}

.panel-text {
  font-size: 18px;
  color: #555;
  margin-bottom: 10px;
}

.panel-status {
  font-weight: bold;
  text-transform: capitalize;
  font-size: 18px;
}

.active {
  color: green;
}

.inactive {
  color: red;
}
</style>
