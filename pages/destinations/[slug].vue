<template>
  <div class="py-12">
    <div class="container-custom">
      <!-- Destination Header -->
      <div class="relative h-[400px] rounded-lg overflow-hidden mb-8">
        <img 
          :src="destination.image" 
          :alt="destination.name" 
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>
        <div class="absolute bottom-0 left-0 p-8 text-white">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ destination.name }}</h1>
          <p class="text-xl text-white/90">{{ destination.hotelCount }} Hotels</p>
        </div>
      </div>

      <!-- Destination Info -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Main Content -->
        <div class="lg:col-span-2">
          <div class="prose max-w-none">
            <h2 class="text-2xl font-semibold text-neutral-900 mb-4">About {{ destination.name }}</h2>
            <p class="text-neutral-600 mb-6">{{ destination.description }}</p>
            
            <div class="flex flex-wrap gap-2 mb-6">
              <span 
                v-for="(tag, index) in destination.tags" 
                :key="index"
                class="inline-block px-3 py-1 text-sm font-medium rounded-md bg-neutral-100 text-neutral-700"
              >
                {{ tag }}
              </span>
            </div>

            <h3 class="text-xl font-semibold text-neutral-900 mb-4">Popular Attractions</h3>
            <ul class="list-disc list-inside text-neutral-600 mb-6">
              <li v-for="(attraction, index) in destination.attractions" :key="index">
                {{ attraction }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-lg shadow-elegant p-6 sticky top-24">
            <h3 class="text-xl font-semibold text-neutral-900 mb-4">Find Hotels in {{ destination.name }}</h3>
            <form @submit.prevent="searchHotels" class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-neutral-700 mb-1">Check-in Date</label>
                <input type="date" class="input" v-model="checkInDate" required />
              </div>
              <div>
                <label class="block text-sm font-medium text-neutral-700 mb-1">Check-out Date</label>
                <input type="date" class="input" v-model="checkOutDate" required />
              </div>
              <div>
                <label class="block text-sm font-medium text-neutral-700 mb-1">Guests</label>
                <select class="select" v-model="guests">
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                </select>
              </div>
              <button type="submit" class="btn-primary w-full">
                Search Hotels
              </button>
            </form>
          </div>
        </div>
      </div>

      <!-- Hotels in this Destination -->
      <div class="mt-12">
        <h2 class="text-2xl font-semibold text-neutral-900 mb-6">Hotels in {{ destination.name }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="hotel in destination.hotels" 
            :key="hotel.id" 
            class="card group"
          >
            <div class="hotel-image-container aspect-w-16 aspect-h-9 relative">
              <img 
                :src="hotel.image" 
                :alt="hotel.name" 
                class="hotel-image w-full h-60 object-cover"
              />
              <div class="absolute top-4 right-4">
                <span class="px-3 py-1 text-sm font-medium rounded-full bg-primary-100 text-primary-800">
                  {{ hotel.rating }} ★
                </span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-neutral-900 mb-2">{{ hotel.name }}</h3>
              <p class="text-neutral-600 mb-4">{{ hotel.location }}</p>
              
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
                <NuxtLink 
                  :to="`/hotels/${hotel.id}`" 
                  class="btn-primary"
                >
                  View Details
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const checkInDate = ref('');
const checkOutDate = ref('');
const guests = ref('2');

// Sample destination data (in a real app, this would come from an API)
const destination = {
  name: 'Paris',
  slug: 'paris',
  hotelCount: 12,
  image: 'https://images.pexels.com/photos/2365457/pexels-photo-2365457.jpeg',
  description: 'Experience the romance of the City of Light with our luxury hotels in Paris. From iconic landmarks to charming neighborhoods, Paris offers an unforgettable experience for every traveler.',
  tags: ['Culture', 'Shopping', 'Dining', 'Art', 'History'],
  attractions: [
    'Eiffel Tower',
    'Louvre Museum',
    'Notre-Dame Cathedral',
    'Champs-Élysées',
    'Montmartre',
    'Seine River Cruises'
  ],
  hotels: [
    {
      id: 1,
      name: 'Radisson Blu Paris',
      location: 'Champs-Élysées',
      price: 299,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
      features: ['Spa', 'Pool', 'Restaurant']
    },
    {
      id: 2,
      name: 'Radisson Collection Paris',
      location: 'Le Marais',
      price: 399,
      rating: 4.9,
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg',
      features: ['Rooftop Bar', 'Fitness Center', 'Business Center']
    },
    {
      id: 3,
      name: 'Park Inn by Radisson Paris',
      location: 'Montmartre',
      price: 199,
      rating: 4.6,
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg',
      features: ['Free WiFi', 'Restaurant', 'Meeting Rooms']
    }
  ]
};

const searchHotels = () => {
  // In a real app, this would trigger a search with the selected parameters
  console.log('Searching hotels with:', {
    destination: destination.name,
    checkIn: checkInDate.value,
    checkOut: checkOutDate.value,
    guests: guests.value
  });
};
</script> 