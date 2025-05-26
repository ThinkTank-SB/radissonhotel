<template>
  <div class="py-12">
    <div class="container-custom">
      <h1 class="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Explore Destinations</h1>
      <p class="text-neutral-600 mb-8">Discover our hotels in popular destinations around the world</p>

      <!-- Search and Filter Section -->
      <div class="mb-8">
        <div class="flex flex-col md:flex-row gap-4">
          <input 
            type="text" 
            v-model="searchQuery" 
            placeholder="Search destinations..." 
            class="input flex-grow"
          />
          <select 
            v-model="selectedRegion" 
            class="select md:w-48"
          >
            <option value="">All Regions</option>
            <option value="europe">Europe</option>
            <option value="asia">Asia</option>
            <option value="americas">Americas</option>
            <option value="africa">Africa</option>
            <option value="middle-east">Middle East</option>
          </select>
        </div>
      </div>

      <!-- Destinations Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="destination in filteredDestinations" 
          :key="destination.id" 
          class="card group"
        >
          <div class="hotel-image-container aspect-w-16 aspect-h-9 relative">
            <img 
              :src="destination.image" 
              :alt="destination.name" 
              class="hotel-image w-full h-60 object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
            <div class="absolute bottom-0 left-0 p-4 text-white">
              <h3 class="text-xl md:text-2xl font-semibold text-white">{{ destination.name }}</h3>
              <p class="text-white/90">{{ destination.hotelCount }} Hotels</p>
            </div>
          </div>
          <div class="p-4">
            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                v-for="(tag, index) in destination.tags" 
                :key="index"
                class="inline-block px-2 py-1 text-xs font-medium rounded-md bg-neutral-100 text-neutral-700"
              >
                {{ tag }}
              </span>
            </div>
            <p class="text-neutral-600 mb-4">{{ destination.description }}</p>
            <NuxtLink 
              :to="`/destinations/${destination.slug}`" 
              class="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
            >
              Explore {{ destination.name }}
              <svg class="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const searchQuery = ref('');
const selectedRegion = ref('');

// Sample destinations data
const destinations = [
  {
    id: 1,
    name: 'Paris',
    slug: 'paris',
    region: 'europe',
    hotelCount: 12,
    image: 'https://images.pexels.com/photos/2365457/pexels-photo-2365457.jpeg',
    description: 'Experience the romance of the City of Light with our luxury hotels in Paris.',
    tags: ['Culture', 'Shopping', 'Dining']
  },
  {
    id: 2,
    name: 'New York',
    slug: 'new-york',
    region: 'americas',
    hotelCount: 8,
    image: 'https://images.pexels.com/photos/2903865/pexels-photo-2903865.jpeg',
    description: 'Stay in the heart of Manhattan with our premium hotels in New York City.',
    tags: ['Business', 'Entertainment', 'Shopping']
  },
  {
    id: 3,
    name: 'Dubai',
    slug: 'dubai',
    region: 'middle-east',
    hotelCount: 6,
    image: 'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg',
    description: 'Discover luxury and innovation in the heart of Dubai.',
    tags: ['Luxury', 'Shopping', 'Dining']
  },
  {
    id: 4,
    name: 'Tokyo',
    slug: 'tokyo',
    region: 'asia',
    hotelCount: 10,
    image: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg',
    description: 'Experience the perfect blend of tradition and modernity in Tokyo.',
    tags: ['Culture', 'Technology', 'Dining']
  },
  {
    id: 5,
    name: 'London',
    slug: 'london',
    region: 'europe',
    hotelCount: 15,
    image: 'https://images.pexels.com/photos/460621/pexels-photo-460621.jpeg',
    description: 'Stay in style at our hotels in the heart of London.',
    tags: ['Culture', 'Shopping', 'History']
  },
  {
    id: 6,
    name: 'Singapore',
    slug: 'singapore',
    region: 'asia',
    hotelCount: 7,
    image: 'https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg',
    description: 'Experience luxury and comfort in the Lion City.',
    tags: ['Shopping', 'Dining', 'Business']
  }
];

// Filter destinations based on search query and selected region
const filteredDestinations = computed(() => {
  return destinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         destination.description.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesRegion = !selectedRegion.value || destination.region === selectedRegion.value;
    return matchesSearch && matchesRegion;
  });
});
</script> 