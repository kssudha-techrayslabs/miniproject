<template>
  <div class="user-panel">
    <h1 class="panel-title">User Panel</h1>
    <p class="panel-text">Welcome, {{ auth.user.name }}</p>
    <p class="panel-text">Email: {{ auth.user.email }}</p>
    <p class="panel-status" :class="{'active': auth.user.status === 'active', 'inactive': auth.user.status !== 'active'}">
      Status: {{ auth.user.status }}
    </p>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth';
const auth = useAuthStore();
</script>

<style scoped>
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
