<template>
  <div class="bg-white rounded-lg shadow-card p-6">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Left Column - Search Options -->
      <div class="md:col-span-2 space-y-6">
        <h3 class="text-lg md:text-xl font-medium text-neutral-900">Find and Book a Hotel</h3>
        
        <!-- Search Type Toggle -->
        <div class="flex gap-4 mb-4">
          <button 
            @click="searchType = 'hotel'"
            :class="[
              'px-4 py-2 text-sm font-medium rounded-md transition-all duration-200',
              searchType === 'hotel' 
                ? 'bg-primary-600 text-white' 
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
            ]"
          >
            Hotel
          </button>
          <button 
            @click="searchType = 'destination'"
            :class="[
              'px-4 py-2 text-sm font-medium rounded-md transition-all duration-200',
              searchType === 'destination' 
                ? 'bg-primary-600 text-white' 
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
            ]"
          >
            Destination
          </button>
        </div>
        
        <!-- Search Input -->
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input 
            type="text" 
            :placeholder="searchType === 'hotel' ? 'Hotel name or brand' : 'City, airport, attraction or address'"
            class="input pl-10"
          />
        </div>
        
        <!-- Date Range Picker -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="space-y-1">
            <label class="block text-sm font-medium text-neutral-700">Check-in</label>
            <input type="date" class="input" :min="todayFormatted" />
          </div>
          <div class="space-y-1">
            <label class="block text-sm font-medium text-neutral-700">Check-out</label>
            <input type="date" class="input" :min="tomorrowFormatted" />
          </div>
        </div>
        
        <!-- Guests and Rooms -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="space-y-1">
            <label class="block text-sm font-medium text-neutral-700">Guests</label>
            <select class="select">
              <option>1 Adult</option>
              <option>2 Adults</option>
              <option>2 Adults, 1 Child</option>
              <option>2 Adults, 2 Children</option>
              <option>More Options</option>
            </select>
          </div>
          <div class="space-y-1">
            <label class="block text-sm font-medium text-neutral-700">Rooms</label>
            <select class="select">
              <option>1 Room</option>
              <option>2 Rooms</option>
              <option>3 Rooms</option>
              <option>4+ Rooms</option>
            </select>
          </div>
        </div>
      </div>
      
      <!-- Right Column - Promo & Button -->
      <div class="md:col-span-1 flex flex-col">
        <!-- Special Code Input -->
        <div class="space-y-1 mb-6">
          <label class="block text-sm font-medium text-neutral-700">Special Code (Optional)</label>
          <select v-model="promoType" class="select mb-2">
            <option value="promo">Promotional Code</option>
            <option value="reward">Reward Points</option>
            <option value="travel">Travel Agent</option>
            <option value="corporate">Corporate</option>
          </select>
          <input 
            type="text" 
            :placeholder="promoPlaceholder" 
            class="input"
          />
        </div>
        
        <!-- Reward Member Benefits -->
        <div class="bg-neutral-50 p-4 rounded-md mb-6">
          <h4 class="text-sm font-semibold text-neutral-800 mb-2">Members Save More</h4>
          <p class="text-sm text-neutral-600 mb-3">Sign in to your account to unlock exclusive member rates.</p>
          <NuxtLink to="/sign-in" class="text-sm text-primary-600 font-medium hover:text-primary-700">
            Sign in now →
          </NuxtLink>
        </div>
        
        <!-- Search Button -->
        <button class="btn-primary py-3 mt-auto text-base font-medium">
          Search Hotels
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const searchType = ref('hotel');
const promoType = ref('promo');

// Format today's date for min date attribute
const todayFormatted = computed(() => {
  const today = new Date();
  return formatDate(today);
});

// Format tomorrow's date for min date attribute
const tomorrowFormatted = computed(() => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return formatDate(tomorrow);
});

// Helper function to format date as YYYY-MM-DD
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Dynamic placeholder based on promo type
const promoPlaceholder = computed(() => {
  switch (promoType.value) {
    case 'promo':
      return 'Enter promotional code';
    case 'reward':
      return 'Enter reward redemption code';
    case 'travel':
      return 'Enter travel agent ID';
    case 'corporate':
      return 'Enter corporate account ID';
    default:
      return 'Enter code';
  }
});
</script>