import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    isAuthenticated: false,
    user: null,
    rewards: {
      points: 0,
      tier: 'Club',
      staysThisYear: 0
    }
  }),
  
  getters: {
    userInitials: (state) => {
      if (!state.user) return '';
      const names = state.user.name.split(' ');
      return names.map(name => name.charAt(0).toUpperCase()).join('');
    },
    
    membershipColor: (state) => {
      switch (state.rewards.tier) {
        case 'Gold':
          return 'bg-secondary-600';
        case 'Silver':
          return 'bg-neutral-400';
        default:
          return 'bg-primary-600';
      }
    }
  },
  
  actions: {
    login(credentials) {
      // Mock login functionality
      return new Promise((resolve) => {
        setTimeout(() => {
          this.isAuthenticated = true;
          this.user = {
            id: 1,
            name: 'John Doe',
            email: credentials.email,
            membershipId: 'RR1234567890'
          };
          this.rewards = {
            points: 12500,
            tier: 'Silver',
            staysThisYear: 12
          };
          resolve(true);
        }, 1000);
      });
    },
    
    logout() {
      this.isAuthenticated = false;
      this.user = null;
      this.rewards = {
        points: 0,
        tier: 'Club',
        staysThisYear: 0
      };
    },
    
    register(userData) {
      // Mock registration functionality
      return new Promise((resolve) => {
        setTimeout(() => {
          this.isAuthenticated = true;
          this.user = {
            id: 2,
            name: userData.name,
            email: userData.email,
            membershipId: 'RR' + Math.floor(1000000000 + Math.random() * 9000000000)
          };
          this.rewards = {
            points: 1000, // Sign-up bonus
            tier: 'Club',
            staysThisYear: 0
          };
          resolve(true);
        }, 1000);
      });
    }
  }
});