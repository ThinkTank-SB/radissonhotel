<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-[70vh] min-h-[500px] bg-cover bg-center" :style="{ backgroundImage: 'url(https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg)' }">
      <div class="absolute inset-0 bg-black/40"></div>
      
      <div class="container-custom relative h-full flex flex-col justify-center items-center text-center text-white">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-4xl animate-fade-in">
          Experience Exceptional Hospitality Worldwide
        </h1>
        <p class="text-xl md:text-2xl max-w-2xl mb-8 animate-fade-in opacity-90">
          Discover luxury accommodations and unforgettable experiences at over 1,100 Radisson hotels globally
        </p>
        <div class="flex flex-col sm:flex-row gap-4 animate-fade-in">
          <NuxtLink to="/find-hotels" class="btn-primary py-3 px-6 text-lg">
            Find a Hotel
          </NuxtLink>
          <NuxtLink to="/rewards/join" class="btn border-2 border-white text-white hover:bg-white/20 py-3 px-6 text-lg">
            Join Rewards
          </NuxtLink>
        </div>
      </div>
    </section>
    
    <!-- Booking Widget Section -->
    <section class="bg-white py-8">
      <div class="container-custom">
        <div class="relative -mt-32 z-10">
          <BookingForm />
        </div>
      </div>
    </section>
    
    <!-- Featured Hotels Section -->
    <HotelShowcase />
    
    <!-- Featured Destinations Section -->
    <FeaturedDestinations />
    
    <!-- Rewards Program Section -->
    <RewardsProgram />
    
    <!-- Special Offers Section -->
    <SpecialOffers />
    
    <!-- Newsletter & App Section -->
    <section class="py-16 bg-neutral-100">
      <div class="container-custom md:flex md:items-center md:justify-between">
        <!-- Left Side - Newsletter -->
        <div class="md:w-1/2 mb-10 md:mb-0">
          <h2 class="text-2xl md:text-3xl font-semibold text-neutral-900 mb-3">
            Stay Connected
          </h2>
          <p class="text-neutral-600 mb-6 max-w-lg">
            Subscribe to our newsletter for exclusive offers, travel inspiration, and updates on our newest hotels.
          </p>
          
          <form @submit.prevent="subscribeNewsletter" class="flex flex-col sm:flex-row gap-3 max-w-lg">
            <input 
              type="email" 
              v-model="newsletterEmail" 
              placeholder="Your email address" 
              class="input flex-grow"
              required
            />
            <button 
              type="submit" 
              class="btn-primary whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
        
        <!-- Right Side - Mobile App -->
        <div class="md:w-1/2 md:pl-8 md:border-l md:border-neutral-300">
          <h2 class="text-2xl md:text-3xl font-semibold text-neutral-900 mb-3">
            Download Our App
          </h2>
          <p class="text-neutral-600 mb-6 max-w-lg">
            Get the best rates, easy booking, mobile check-in, and digital room keys with our mobile app.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="#" class="inline-block transition-transform hover:scale-105">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                alt="Download on the App Store" 
                class="h-12"
              />
            </a>
            <a href="#" class="inline-block transition-transform hover:scale-105">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Get it on Google Play" 
                class="h-12"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const newsletterEmail = ref('');

const subscribeNewsletter = () => {
  // Newsletter subscription logic would go here
  alert(`Thank you for subscribing with: ${newsletterEmail.value}`);
  newsletterEmail.value = '';
};
</script>