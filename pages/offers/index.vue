<template>
  <div class="py-12">
    <div class="container-custom">
      <h1 class="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Special Offers & Deals</h1>
      <p class="text-neutral-600 mb-8">Discover exclusive deals and packages for your next stay</p>

      <!-- Filter Section -->
      <div class="mb-8">
        <div class="flex flex-wrap gap-4">
          <button 
            v-for="category in categories" 
            :key="category.value"
            @click="selectedCategory = category.value"
            :class="[
              'px-4 py-2 rounded-md text-sm font-medium transition-all',
              selectedCategory === category.value
                ? 'bg-primary-600 text-white'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
            ]"
          >
            {{ category.label }}
          </button>
        </div>
      </div>

      <!-- Offers Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="offer in filteredOffers" 
          :key="offer.id" 
          class="card group"
        >
          <div class="hotel-image-container aspect-w-16 aspect-h-9 relative">
            <img 
              :src="offer.image" 
              :alt="offer.title" 
              class="hotel-image w-full h-60 object-cover"
            />
            <div class="absolute top-4 right-4">
              <span 
                class="px-3 py-1 text-sm font-medium rounded-full"
                :class="{
                  'bg-primary-100 text-primary-800': offer.type === 'package',
                  'bg-secondary-100 text-secondary-800': offer.type === 'discount',
                  'bg-success-100 text-success-800': offer.type === 'freebie'
                }"
              >
                {{ offer.type }}
              </span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-neutral-900 mb-2">{{ offer.title }}</h3>
            <p class="text-neutral-600 mb-4">{{ offer.description }}</p>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                v-for="(tag, index) in offer.tags" 
                :key="index"
                class="inline-block px-2 py-1 text-xs font-medium rounded-md bg-neutral-100 text-neutral-700"
              >
                {{ tag }}
              </span>
            </div>

            <div class="flex justify-between items-center">
              <div>
                <p class="text-sm text-neutral-500">Valid until</p>
                <p class="text-sm font-medium text-neutral-900">{{ offer.validUntil }}</p>
              </div>
              <NuxtLink 
                :to="`/offers/${offer.slug}`" 
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
</template>

<script setup>
import { ref, computed } from 'vue';

const selectedCategory = ref('all');

const categories = [
  { label: 'All Offers', value: 'all' },
  { label: 'Packages', value: 'package' },
  { label: 'Discounts', value: 'discount' },
  { label: 'Freebies', value: 'freebie' },
  { label: 'Seasonal', value: 'seasonal' }
];

// Sample offers data
const offers = [
  {
    id: 1,
    title: 'Weekend Getaway Package',
    slug: 'weekend-getaway',
    type: 'package',
    description: 'Enjoy a luxurious weekend stay with breakfast included and late checkout.',
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
    validUntil: 'Dec 31, 2024',
    tags: ['Weekend', 'Breakfast', 'Late Checkout']
  },
  {
    id: 2,
    title: 'Early Bird Discount',
    slug: 'early-bird',
    type: 'discount',
    description: 'Book 30 days in advance and save up to 25% on your stay.',
    image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg',
    validUntil: 'Dec 31, 2024',
    tags: ['Advance Booking', '25% Off']
  },
  {
    id: 3,
    title: 'Free Airport Transfer',
    slug: 'airport-transfer',
    type: 'freebie',
    description: 'Complimentary airport transfer for stays of 3 nights or more.',
    image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg',
    validUntil: 'Dec 31, 2024',
    tags: ['Airport Transfer', '3+ Nights']
  },
  {
    id: 4,
    title: 'Summer Escape',
    slug: 'summer-escape',
    type: 'seasonal',
    description: 'Special summer rates with complimentary pool access and welcome drinks.',
    image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg',
    validUntil: 'Aug 31, 2024',
    tags: ['Summer', 'Pool Access', 'Welcome Drinks']
  },
  {
    id: 5,
    title: 'Business Traveler Package',
    slug: 'business-traveler',
    type: 'package',
    description: 'Perfect for business travelers with high-speed WiFi and business center access.',
    image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg',
    validUntil: 'Dec 31, 2024',
    tags: ['Business', 'WiFi', 'Business Center']
  },
  {
    id: 6,
    title: 'Family Fun Package',
    slug: 'family-fun',
    type: 'package',
    description: 'Family-friendly stay with kids eat free and complimentary activities.',
    image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
    validUntil: 'Dec 31, 2024',
    tags: ['Family', 'Kids Eat Free', 'Activities']
  }
];

// Filter offers based on selected category
const filteredOffers = computed(() => {
  if (selectedCategory.value === 'all') {
    return offers;
  }
  return offers.filter(offer => offer.type === selectedCategory.value);
});
</script> 