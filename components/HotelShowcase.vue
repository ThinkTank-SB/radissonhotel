<template>
  <section class="py-12">
    <div class="container-custom">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h2 class="text-2xl md:text-3xl font-semibold text-neutral-900 mb-2">Featured Hotels</h2>
          <p class="text-neutral-600">Discover our handpicked selection of exceptional hotels</p>
        </div>
        <div class="mt-4 md:mt-0 flex space-x-2">
          <button 
            @click="activeCategory = 'all'" 
            :class="[
              'px-3 py-1.5 text-sm font-medium rounded-md transition-all',
              activeCategory === 'all' 
                ? 'bg-primary-600 text-white' 
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
            ]"
          >
            All
          </button>
          <button 
            @click="activeCategory = 'luxury'" 
            :class="[
              'px-3 py-1.5 text-sm font-medium rounded-md transition-all',
              activeCategory === 'luxury' 
                ? 'bg-primary-600 text-white' 
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
            ]"
          >
            Luxury
          </button>
          <button 
            @click="activeCategory = 'resort'" 
            :class="[
              'px-3 py-1.5 text-sm font-medium rounded-md transition-all',
              activeCategory === 'resort' 
                ? 'bg-primary-600 text-white' 
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
            ]"
          >
            Resort
          </button>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="hotel in filteredHotels" 
          :key="hotel.id" 
          class="card group animate-fade-in"
        >
          <div class="hotel-image-container">
            <img 
              :src="hotel.image" 
              :alt="hotel.name" 
              class="hotel-image w-full h-60 object-cover"
            />
          </div>
          <div class="p-6">
            <div class="flex justify-between items-start mb-2">
              <h3 class="text-lg font-semibold text-neutral-900">{{ hotel.name }}</h3>
              <div class="flex items-center space-x-1">
                <span class="text-secondary-600">{{ hotel.rating }}</span>
                <svg class="w-4 h-4 text-secondary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            <div class="flex items-center text-neutral-500 mb-3">
              <svg class="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span class="text-sm">{{ hotel.location }}</span>
            </div>
            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                v-for="(feature, index) in hotel.features" 
                :key="index"
                class="inline-block px-2 py-1 text-xs font-medium rounded-md bg-neutral-100 text-neutral-700"
              >
                {{ feature }}
              </span>
            </div>
            <div class="flex justify-between items-center">
              <div>
                <p class="text-sm text-neutral-500">From</p>
                <p class="text-xl font-bold text-primary-600">${{ hotel.price }}</p>
              </div>
              <NuxtLink :to="`/hotels/${hotel.id}`" class="btn-primary py-1.5">
                View Details
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-10 text-center">
        <NuxtLink 
          to="/hotels" 
          class="btn-outline"
        >
          View All Hotels
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const activeCategory = ref('all');

// Sample hotel data
const hotels = [
  {
    id: 1,
    name: 'Radisson Blu Paris',
    location: 'Paris, France',
    price: 199,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg',
    features: ['Spa', 'Pool', 'Restaurant'],
    category: 'luxury'
  },
  {
    id: 2,
    name: 'Radisson RED New York',
    location: 'New York, USA',
    price: 249,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
    features: ['Fitness Center', 'Bar', 'Business Lounge'],
    category: 'luxury'
  },
  {
    id: 3,
    name: 'Radisson Resort Maldives',
    location: 'Male, Maldives',
    price: 399,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg',
    features: ['Beach Access', 'Spa', 'Water Sports'],
    category: 'resort'
  },
  {
    id: 4,
    name: 'Park Inn by Radisson London',
    location: 'London, UK',
    price: 149,
    rating: 4.5,
    image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg',
    features: ['City View', 'Restaurant', 'Conference Rooms'],
    category: 'luxury'
  },
  {
    id: 5,
    name: 'Radisson Collection Dubai',
    location: 'Dubai, UAE',
    price: 329,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg',
    features: ['Infinity Pool', 'Rooftop Bar', 'Luxury Spa'],
    category: 'luxury'
  },
  {
    id: 6,
    name: 'Radisson Blu Resort Phuket',
    location: 'Phuket, Thailand',
    price: 229,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
    features: ['Beach Front', 'Pool Villa', 'Restaurants'],
    category: 'resort'
  }
];

// Filter hotels based on active category
const filteredHotels = computed(() => {
  if (activeCategory.value === 'all') {
    return hotels;
  }
  return hotels.filter(hotel => hotel.category === activeCategory.value);
});
</script>