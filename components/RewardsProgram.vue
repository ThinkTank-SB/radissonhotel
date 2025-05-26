<template>
  <section class="py-16 bg-primary-600 text-white">
    <div class="container-custom">
      <div class="md:flex md:items-center md:space-x-12">
        <!-- Left side content -->
        <div class="md:w-1/2 mb-8 md:mb-0">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Join Radisson Rewards</h2>
          <p class="text-lg text-white/90 mb-6">Become a member and unlock exclusive benefits and rewards at over 1,100 hotels worldwide.</p>
          
          <div class="space-y-4 mb-8">
            <div class="flex items-start">
              <div class="flex-shrink-0 mt-1">
                <svg class="h-5 w-5 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3">
                <h3 class="text-lg font-medium">Earn Points with Every Stay</h3>
                <p class="text-white/80">Collect points for every dollar spent and redeem them for free nights.</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="flex-shrink-0 mt-1">
                <svg class="h-5 w-5 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3">
                <h3 class="text-lg font-medium">Member-Only Rates</h3>
                <p class="text-white/80">Get access to exclusive rates and special offers not available to non-members.</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="flex-shrink-0 mt-1">
                <svg class="h-5 w-5 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3">
                <h3 class="text-lg font-medium">Complimentary Upgrades</h3>
                <p class="text-white/80">Enjoy room upgrades and extended checkout times based on availability.</p>
              </div>
            </div>
          </div>
          
          <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink to="/rewards/join" class="btn bg-white text-primary-700 hover:bg-neutral-100 focus:ring-white focus:ring-offset-primary-600">
              Join Now - It's Free
            </NuxtLink>
            <NuxtLink to="/rewards/learn-more" class="btn border border-white text-white hover:bg-primary-700 focus:ring-white focus:ring-offset-primary-600">
              Learn More
            </NuxtLink>
          </div>
        </div>
        
        <!-- Right side content - Membership levels -->
        <div class="md:w-1/2">
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="p-6">
              <h3 class="text-xl font-semibold text-neutral-900 mb-4">Membership Levels</h3>
              
              <div class="space-y-6">
                <div 
                  v-for="(level, index) in membershipLevels" 
                  :key="level.name"
                  class="p-4 rounded-lg"
                  :class="{
                    'bg-neutral-100': index === 0,
                    'bg-primary-50': index === 1,
                    'bg-secondary-50': index === 2
                  }"
                >
                  <div class="flex justify-between items-center mb-2">
                    <h4 class="text-lg font-medium text-neutral-900">{{ level.name }}</h4>
                    <span 
                      class="px-2 py-1 text-xs font-medium rounded-full"
                      :class="{
                        'bg-neutral-200 text-neutral-800': index === 0,
                        'bg-primary-100 text-primary-800': index === 1,
                        'bg-secondary-100 text-secondary-800': index === 2
                      }"
                    >
                      {{ level.nights }} Nights
                    </span>
                  </div>
                  <p class="text-sm text-neutral-600 mb-3">{{ level.description }}</p>
                  <div class="flex flex-wrap gap-2">
                    <span 
                      v-for="(benefit, i) in level.benefits" 
                      :key="i"
                      class="inline-block px-2 py-1 text-xs rounded-md bg-white/80 text-neutral-700"
                    >
                      {{ benefit }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Sample membership levels data
const membershipLevels = [
  {
    name: 'Club',
    nights: '0-9',
    description: 'Start earning points with your very first stay and enjoy basic member benefits.',
    benefits: ['Member Rates', 'Free WiFi', 'Digital Key', 'Mobile Check-in']
  },
  {
    name: 'Silver',
    nights: '10-29',
    description: 'Enjoy enhanced benefits after staying just 10 nights in a calendar year.',
    benefits: ['All Club Benefits', '15% Bonus Points', 'Early Check-in', 'Welcome Gift']
  },
  {
    name: 'Gold',
    nights: '30+',
    description: 'Our highest tier with premium benefits for our most loyal guests.',
    benefits: ['All Silver Benefits', '25% Bonus Points', 'Room Upgrades', 'Guaranteed Availability']
  }
];
</script>