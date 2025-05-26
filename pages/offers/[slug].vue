<template>
  <div class="py-12">
    <div class="container-custom">
      <!-- Offer Header -->
      <div class="relative h-[400px] rounded-lg overflow-hidden mb-8">
        <img 
          :src="offer.image" 
          :alt="offer.title" 
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>
        <div class="absolute bottom-0 left-0 p-8 text-white">
          <div class="mb-4">
            <span 
              class="px-4 py-2 text-sm font-medium rounded-full"
              :class="{
                'bg-primary-100 text-primary-800': offer.type === 'package',
                'bg-secondary-100 text-secondary-800': offer.type === 'discount',
                'bg-success-100 text-success-800': offer.type === 'freebie'
              }"
            >
              {{ offer.type }}
            </span>
          </div>
          <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ offer.title }}</h1>
          <p class="text-xl text-white/90">Valid until {{ offer.validUntil }}</p>
        </div>
      </div>

      <!-- Offer Content -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Main Content -->
        <div class="lg:col-span-2">
          <div class="prose max-w-none">
            <h2 class="text-2xl font-semibold text-neutral-900 mb-4">About this Offer</h2>
            <p class="text-neutral-600 mb-6">{{ offer.description }}</p>
            
            <div class="flex flex-wrap gap-2 mb-6">
              <span 
                v-for="(tag, index) in offer.tags" 
                :key="index"
                class="inline-block px-3 py-1 text-sm font-medium rounded-md bg-neutral-100 text-neutral-700"
              >
                {{ tag }}
              </span>
            </div>

            <h3 class="text-xl font-semibold text-neutral-900 mb-4">What's Included</h3>
            <ul class="list-disc list-inside text-neutral-600 mb-6">
              <li v-for="(inclusion, index) in offer.inclusions" :key="index">
                {{ inclusion }}
              </li>
            </ul>

            <h3 class="text-xl font-semibold text-neutral-900 mb-4">Terms & Conditions</h3>
            <ul class="list-disc list-inside text-neutral-600 mb-6">
              <li v-for="(term, index) in offer.terms" :key="index">
                {{ term }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-lg shadow-elegant p-6 sticky top-24">
            <h3 class="text-xl font-semibold text-neutral-900 mb-4">Book this Offer</h3>
            <form @submit.prevent="bookOffer" class="space-y-4">
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
              <div>
                <label class="block text-sm font-medium text-neutral-700 mb-1">Room Type</label>
                <select class="select" v-model="roomType">
                  <option value="standard">Standard Room</option>
                  <option value="deluxe">Deluxe Room</option>
                  <option value="suite">Suite</option>
                </select>
              </div>
              <button type="submit" class="btn-primary w-full">
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>

      <!-- Participating Hotels -->
      <div class="mt-12">
        <h2 class="text-2xl font-semibold text-neutral-900 mb-6">Participating Hotels</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="hotel in offer.hotels" 
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
const roomType = ref('standard');

// Sample offer data (in a real app, this would come from an API)
const offer = {
  title: 'Weekend Getaway Package',
  slug: 'weekend-getaway',
  type: 'package',
  description: 'Enjoy a luxurious weekend stay with breakfast included and late checkout. Perfect for couples looking for a romantic escape or families wanting to make the most of their weekend.',
  image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
  validUntil: 'Dec 31, 2024',
  tags: ['Weekend', 'Breakfast', 'Late Checkout'],
  inclusions: [
    'Complimentary breakfast for two',
    'Late checkout until 2 PM',
    'Welcome drink upon arrival',
    'Free WiFi throughout the stay',
    'Access to fitness center and pool'
  ],
  terms: [
    'Minimum stay of 2 nights required',
    'Advance booking required',
    'Subject to availability',
    'Cannot be combined with other offers',
    'Blackout dates may apply'
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

const bookOffer = () => {
  // In a real app, this would trigger a booking with the selected parameters
  console.log('Booking offer with:', {
    offer: offer.title,
    checkIn: checkInDate.value,
    checkOut: checkOutDate.value,
    guests: guests.value,
    roomType: roomType.value
  });
};
</script> 