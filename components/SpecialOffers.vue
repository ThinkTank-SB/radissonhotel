<template>
  <section class="py-12 bg-neutral-50">
    <div class="container-custom">
      <div class="text-center mb-10">
        <h2 class="text-2xl md:text-3xl font-semibold text-neutral-900 mb-2">Special Offers</h2>
        <p class="text-neutral-600 max-w-2xl mx-auto">Discover our exclusive deals and special offers to make your stay even more memorable</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
          v-for="offer in offers" 
          :key="offer.id" 
          class="card group overflow-hidden"
        >
          <div class="md:flex">
            <div class="md:w-2/5 hotel-image-container">
              <img 
                :src="offer.image" 
                :alt="offer.title" 
                class="hotel-image w-full h-full object-cover"
              />
            </div>
            <div class="md:w-3/5 p-6">
              <div class="mb-2">
                <span class="inline-block px-2 py-1 text-xs font-medium rounded-md bg-secondary-100 text-secondary-800">
                  {{ offer.badge }}
                </span>
              </div>
              <h3 class="text-lg md:text-xl font-semibold text-neutral-900 mb-2">{{ offer.title }}</h3>
              <p class="text-neutral-600 mb-4">{{ offer.description }}</p>
              
              <div class="flex items-baseline mb-4">
                <span class="text-lg md:text-xl font-bold text-primary-600 mr-2">
                  {{ offer.discount }}
                </span>
                <span class="text-sm text-neutral-500">{{ offer.condition }}</span>
              </div>
              
              <div class="flex flex-col sm:flex-row gap-3">
                <NuxtLink :to="`/offers/${offer.id}`" class="btn-primary text-center py-2">
                  Book Now
                </NuxtLink>
                <button class="btn-outline py-2">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-10 text-center">
        <NuxtLink 
          to="/offers" 
          class="btn-outline"
        >
          View All Offers
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
// Sample offers data
const offers = [
  {
    id: 1,
    title: 'Early Bird Special',
    badge: 'Limited Time',
    description: 'Book early and save up to 25% on your stay at participating Radisson hotels worldwide. Plan ahead and enjoy great savings.',
    discount: 'Up to 25% Off',
    condition: 'when booking 30 days in advance',
    image: 'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg'
  },
  {
    id: 2,
    title: 'Weekend Escape',
    badge: 'Popular',
    description: 'Enjoy a perfect weekend getaway with our special weekend rates, including breakfast and late checkout at select properties.',
    discount: 'Save 20%',
    condition: 'on weekend stays + free breakfast',
    image: 'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg'
  },
  {
    id: 3,
    title: 'Stay Longer, Save More',
    badge: 'Best Value',
    description: 'The longer you stay, the more you save. Enjoy progressively higher discounts when you stay multiple nights at our hotels.',
    discount: 'Up to 30% Off',
    condition: 'for stays of 3 nights or more',
    image: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg'
  },
  {
    id: 4,
    title: 'Reward Members Exclusive',
    badge: 'Members Only',
    description: 'Exclusive rates for our Radisson Rewards members. Sign in to your account to unlock these special member-only deals.',
    discount: 'Extra 10% Off',
    condition: 'for Radisson Rewards members',
    image: 'https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg'
  }
];
</script>