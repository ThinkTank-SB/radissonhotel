<template>
  <section class="py-12 bg-neutral-50">
    <div class="container-custom">
      <h2 class="text-2xl md:text-3xl font-semibold text-neutral-900 mb-2">Popular Destinations</h2>
      <p class="text-neutral-600 mb-8">Explore our most popular destinations worldwide</p>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="destination in destinations" 
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
      
      <div class="mt-10 text-center">
        <NuxtLink 
          to="/destinations" 
          class="btn-outline"
        >
          View All Destinations
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
// Sample destination data
const destinations = [
  {
    id: 1,
    name: 'Paris',
    slug: 'paris',
    hotelCount: 15,
    image: 'https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg',
    tags: ['City Break', 'Romance', 'Culture'],
    description: 'Experience the city of lights with our collection of Parisian hotels, perfect for romantic getaways and cultural explorations.'
  },
  {
    id: 2,
    name: 'New York',
    slug: 'new-york',
    hotelCount: 23,
    image: 'https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg',
    tags: ['Urban', 'Shopping', 'Entertainment'],
    description: 'Discover our premium hotels in the heart of New York City, offering unparalleled access to iconic landmarks and vibrant neighborhoods.'
  },
  {
    id: 3,
    name: 'Barcelona',
    slug: 'barcelona',
    hotelCount: 12,
    image: 'https://images.pexels.com/photos/819764/pexels-photo-819764.jpeg',
    tags: ['Beach', 'Architecture', 'Gastronomy'],
    description: 'Explore Barcelona\'s unique blend of beach relaxation and architectural wonders, all while enjoying our comfortable accommodations.'
  },
  {
    id: 4,
    name: 'Dubai',
    slug: 'dubai',
    hotelCount: 18,
    image: 'https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg',
    tags: ['Luxury', 'Shopping', 'Modern'],
    description: 'Experience luxury at its finest in our Dubai hotels, positioned perfectly for both business travelers and vacation seekers.'
  },
  {
    id: 5,
    name: 'Tokyo',
    slug: 'tokyo',
    hotelCount: 14,
    image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg',
    tags: ['Culture', 'Technology', 'Cuisine'],
    description: 'Immerse yourself in Japanese culture and innovation while staying at our carefully selected Tokyo hotels in prime locations.'
  },
  {
    id: 6,
    name: 'London',
    slug: 'london',
    hotelCount: 20,
    image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg',
    tags: ['History', 'Entertainment', 'Shopping'],
    description: 'Stay in the heart of London with our selection of hotels offering easy access to historical landmarks and entertainment venues.'
  }
];
</script>