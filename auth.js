import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    users: [
        { id: 1, name: 'Anna', role: 'admin', password: 'anna123', email: 'anna@example.com', status: 'active' },
        { id: 2, name: 'Jerry', role: 'user', password: 'jerry123', email: 'jerry@example.com', status: 'active' },
        { id: 3, name: 'tery', role: 'user', password: 'tery456', email: 'tery@example.com', status: 'inactive' },
        { id: 4, name: 'Tom', role: 'user', password: 'tom789', email: 'tom@example.com', status: 'active' },
        { id: 5, name: 'Pham', role: 'user', password: 'pham101', email: 'pham@example.com', status: 'inactive' },
        { id: 6, name: 'Mark', role: 'user', password: 'mark102', email: 'mark@example.com', status: 'active' },
        { id: 7, name: 'lisa', role: 'user', password: 'lisa123', email: 'lisa@example.com', status: 'active' },
        { id: 8, name: 'May', role: 'user', password: 'may123', email: 'may@example.com', status: 'active' }
    ]
  }),
  actions: {
    login(username, password) {
      const foundUser = this.users.find(u => u.name === username && u.password === password);
      if (foundUser) {
        this.user = foundUser;
      } else {
        alert('Invalid credentials');
      }
    },
    logout() {
      this.user = null;
    }
  }
});
