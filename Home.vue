<template>
  <nav>
    <div class="container">
      <!-- <h1 class="title">{{ auth.user ? auth.user.name : 'Guest' }}</h1>
      <p v-if="auth.user">Role: {{ auth.user.role }}</p> -->
      <button @click="auth.logout">Logout</button>
    </div>
  </nav>
  </template>
  
  <script setup>
  import { useAuthStore } from '@/stores/auth';
  const auth = useAuthStore();
  </script>

<style scoped>
.container {
  text-align: center;
  margin-top: 50px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 24px;
  color: #333;
}

.role {
  font-size: 18px;
  color: #555;
  margin-bottom: 15px;
}

.logout-button {
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

.logout-button:hover {
  background-color: #cc0000;
}
</style>
