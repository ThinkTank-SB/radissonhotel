<template>
  <footer class="bg-neutral-900 text-white pt-16 pb-8">
    <div class="container-custom">
      <!-- Footer Main Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
        <!-- Column 1 -->
        <div>
          <h4 class="text-lg font-medium text-white mb-4">Company</h4>
          <ul class="space-y-3">
            <li v-for="link in companyLinks" :key="link.text">
              <NuxtLink :to="link.url" class="text-neutral-300 hover:text-white transition-colors">
                {{ link.text }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Column 2 -->
        <div>
          <h4 class="text-lg font-medium text-white mb-4">Our Brands</h4>
          <ul class="space-y-3">
            <li v-for="link in brandLinks" :key="link.text">
              <NuxtLink :to="link.url" class="text-neutral-300 hover:text-white transition-colors">
                {{ link.text }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Column 3 -->
        <div>
          <h4 class="text-lg font-medium text-white mb-4">Customer Support</h4>
          <ul class="space-y-3">
            <li v-for="link in supportLinks" :key="link.text">
              <NuxtLink :to="link.url" class="text-neutral-300 hover:text-white transition-colors">
                {{ link.text }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Column 4 -->
        <div>
          <h4 class="text-lg font-medium text-white mb-4">Subscribe to Our Newsletter</h4>
          <p class="text-neutral-300 mb-4">Stay updated with our latest offers and news</p>
          
          <form @submit.prevent="subscribeToNewsletter" class="space-y-3">
            <div>
              <input 
                type="email" 
                v-model="email" 
                placeholder="Your email address" 
                class="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
              />
            </div>
            <div>
              <button 
                type="submit" 
                class="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-neutral-900"
              >
                Subscribe
              </button>
            </div>
          </form>

          <div class="mt-6">
            <h5 class="text-white font-medium mb-3">Connect with us</h5>
            <div class="flex space-x-4">
              <a href="#" class="text-neutral-300 hover:text-white transition-colors">
                <span class="sr-only">Facebook</span>
                <!-- Facebook icon placeholder -->
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" class="text-neutral-300 hover:text-white transition-colors">
                <span class="sr-only">Instagram</span>
                <!-- Instagram icon placeholder -->
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              <a href="#" class="text-neutral-300 hover:text-white transition-colors">
                <span class="sr-only">Twitter</span>
                <!-- Twitter icon placeholder -->
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.035 10.035 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                </svg>
              </a>
              <a href="#" class="text-neutral-300 hover:text-white transition-colors">
                <span class="sr-only">YouTube</span>
                <!-- YouTube icon placeholder -->
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-neutral-800 py-6 mt-4">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <!-- Copyright -->
          <p class="text-neutral-400 text-sm">© {{ new Date().getFullYear() }} Radisson Hotel Group. All rights reserved.</p>
          
          <!-- Legal Links -->
          <div class="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-neutral-400">
            <NuxtLink to="/terms" class="hover:text-white transition-colors">Terms of Use</NuxtLink>
            <NuxtLink to="/privacy" class="hover:text-white transition-colors">Privacy Policy</NuxtLink>
            <NuxtLink to="/cookies" class="hover:text-white transition-colors">Cookie Policy</NuxtLink>
            <NuxtLink to="/sitemap" class="hover:text-white transition-colors">Sitemap</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');

const companyLinks = [
  { text: 'About Us', url: '/about' },
  { text: 'Careers', url: '/careers' },
  { text: 'Development', url: '/development' },
  { text: 'Investor Relations', url: '/investors' },
  { text: 'Responsible Business', url: '/responsibility' },
  { text: 'Press Releases', url: '/press' }
];

const brandLinks = [
  { text: 'Radisson Collection', url: '/brands/collection' },
  { text: 'Radisson Blu', url: '/brands/blu' },
  { text: 'Radisson', url: '/brands/radisson' },
  { text: 'Radisson RED', url: '/brands/red' },
  { text: 'Park Plaza', url: '/brands/park-plaza' },
  { text: 'Park Inn by Radisson', url: '/brands/park-inn' }
];

const supportLinks = [
  { text: 'Contact Us', url: '/contact' },
  { text: 'Help Center', url: '/help' },
  { text: 'Booking Terms', url: '/booking-terms' },
  { text: 'FAQ', url: '/faq' },
  { text: 'Gift Cards', url: '/gift-cards' },
  { text: 'Redeem Points', url: '/redeem-points' }
];

const subscribeToNewsletter = () => {
  // Implement newsletter subscription logic
  alert(`Subscribed with email: ${email.value}`);
  email.value = '';
};
</script>