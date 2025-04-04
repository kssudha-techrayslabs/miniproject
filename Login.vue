<template>
    <div class="login-container">
      <h1>Login</h1>
      <input v-model="username" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <button @click="handleLogin">Login</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useAuthStore } from '@/stores/auth';
  import {useRouter} from 'vue-router';
  
  const auth = useAuthStore();
  const router=useRouter();
  const username = ref('');
  const password = ref('');
  
  const handleLogin = () => {
    auth.login(username.value, password.value);
  if(auth.user){
    router.push(auth.user.role=='admin'?'/admin':'/user');
  }
  };
  </script> 
  

   
  <style scoped>
.login-container {
  width: 300px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
  text-align: center;
}
input {
  width: 85%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}
button {
  width: 90%;
  padding: 10px;
  background: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background: #0056b3;
}
</style>
