<template>
  <div class="login-container">
    <form class="login-form" @submit.prevent="handleLogin">
      <h2>Login</h2>
      <div class="form-group">
        <label for="email">Email</label>
        <input 
          type="text" 
          id="email" 
          v-model="email" 
          required 
          placeholder="Enter your email"
        >
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input 
          type="password" 
          id="password" 
          v-model="password" 
          required 
          placeholder="Enter your password"
        >
      </div>
      <button type="submit" class="login-button">Sign In</button>
    </form>
  </div>
</template>

<script setup>

import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
const email = ref('');
const password = ref('');
const router = useRouter();

const handleLogin = async() => {
    const data = await axios.post('https://dummyjson.com/auth/login', {
        username: email.value,
        password: password.value
    });

    if(data.data.accessToken) {
        localStorage.setItem('token', data.data.accessToken);
        router.push('/secret');
    }

};

</script>

<style>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
}

.login-form {
  width: 100%;
  max-width: 350px;
  padding: 30px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.login-form h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  color: #666;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

.form-group input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
}

.login-button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #0056b3;
}
</style>