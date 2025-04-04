<template>
  <div class="dashboard-wrapper">
    <aside class="sidebar">
      <h2 class="sidebar-title">Menu</h2>
      <ul>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Users</a></li>
        <li><a href="#">Settings</a></li>
        <li><a href="#">Logout</a></li>
      </ul>
    </aside>
    <div class="dashboard-container">
      <h1 class="dashboard-title">Admin Dashboard</h1>
      <ul class="user-list">
        <li v-for="user in auth.users" :key="user.id" class="user-item">
          <span class="user-name">{{ user.name }}</span> - 
          <span class="user-role">{{ user.role }}</span> - 
          <span class="user-email">{{ user.email }}</span> - 
          <span class="user-status" :class="{'active': user.status === 'active', 'inactive': user.status !== 'active'}">
            {{ user.status }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth';
const auth = useAuthStore();
</script>

<style scoped>
.dashboard-wrapper {
  display: flex;
}

.sidebar {
  width: 250px;
  background: #333;
  color: white;
  padding: 20px;
  min-height: 100vh;
}

.sidebar-title {
  font-size: 22px;
  margin-bottom: 15px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar ul li {
  margin: 10px 0;
}

.sidebar ul li a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  display: block;
  padding: 10px;
  border-radius: 5px;
  transition: background 0.3s;
}

.sidebar ul li a:hover {
  background: #555;
}

.dashboard-container {
  flex: 1;
  padding: 20px;
  background: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.dashboard-title {
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
}

.user-list {
  list-style-type: none;
  padding: 0;
}

.user-item {
  background: white;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user-name {
  font-weight: bold;
  color: #333;
}

.user-role {
  color: #007bff;
}

.user-email {
  color: #555;
}

.user-status {
  font-weight: bold;
  text-transform: capitalize;
}

.active {
  color: green;
}

.inactive {
  color: red;
}
</style>
