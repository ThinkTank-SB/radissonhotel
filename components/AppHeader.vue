<template>
  <header class="sticky top-0 z-50 bg-white shadow-sm">
    <!-- Top Navigation Bar -->
    <div class="bg-neutral-900 text-white text-sm py-1">
      <div class="container-custom flex justify-between items-center">
        <div class="hidden md:flex space-x-6">
          <NuxtLink to="/find-hotels" class="hover:text-secondary-400">Find Hotels</NuxtLink>
          <NuxtLink to="/destinations" class="hover:text-secondary-400">Destinations</NuxtLink>
          <NuxtLink to="/offers" class="hover:text-secondary-400">Special Offers</NuxtLink>
        </div>
        <div class="flex space-x-6 ml-auto">
          <div class="flex items-center">
            <span class="inline-flex items-center">
              <span class="hidden sm:inline">Language:</span>
              <select class="bg-transparent border-0 focus:ring-0 text-sm py-0 pl-1">
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
              </select>
            </span>
          </div>
          <NuxtLink to="/sign-in" class="flex items-center space-x-1 hover:text-secondary-400">
            <span class="hidden sm:inline">Sign In</span>
          </NuxtLink>
          <NuxtLink to="/join" class="hidden sm:flex items-center space-x-1 hover:text-secondary-400">
            <span>Join</span>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Main Navigation -->
    <div class="container-custom py-3">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <NuxtLink to="/" class="flex-shrink-0">
          <div class="h-10 w-32 flex items-center">
            <span class="text-xl font-bold text-primary-600">Radisson Hotels</span>
          </div>
        </NuxtLink>

        <!-- Desktop Menu -->
        <nav class="hidden md:flex space-x-8">
          <NuxtLink 
            v-for="item in mainNavItems" 
            :key="item.name" 
            :to="item.to" 
            class="text-neutral-700 font-medium hover:text-primary-600 transition-colors"
          >
            {{ item.name }}
          </NuxtLink>
        </nav>

        <!-- Mobile menu button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen" 
          class="md:hidden p-2 rounded-md text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 focus:outline-none"
        >
          <span v-if="!mobileMenuOpen">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </span>
          <span v-else>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </span>
        </button>

        <!-- Booking Button -->
        <div class="hidden md:block">
          <NuxtLink to="/book-now" class="btn-primary py-2 px-4">Book Now</NuxtLink>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div 
      v-if="mobileMenuOpen" 
      class="md:hidden bg-white shadow-lg py-4 animate-slide-up"
    >
      <div class="container-custom space-y-3">
        <NuxtLink 
          v-for="item in mainNavItems" 
          :key="item.name" 
          :to="item.to" 
          class="block py-2 text-neutral-700 hover:text-primary-600"
          @click="mobileMenuOpen = false"
        >
          {{ item.name }}
        </NuxtLink>
        <div class="pt-3 border-t border-neutral-200">
          <NuxtLink 
            to="/book-now" 
            class="block w-full text-center btn-primary py-2"
            @click="mobileMenuOpen = false"
          >
            Book Now
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const mobileMenuOpen = ref(false);

const mainNavItems = [
  { name: 'Hotels', to: '/hotels' },
  { name: 'Destinations', to: '/destinations' },
  { name: 'Offers', to: '/offers' },
  { name: 'Meetings & Events', to: '/meetings' },
  { name: 'Our Brands', to: '/brands' },
  { name: 'Rewards', to: '/rewards' }
];
</script>