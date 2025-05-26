import { defineStore } from 'pinia';

export const useBookingStore = defineStore('booking', {
  state: () => ({
    searchParams: {
      destination: '',
      checkIn: '',
      checkOut: '',
      guests: 1,
      rooms: 1,
      promoCode: ''
    },
    recentSearches: [],
    savedHotels: [],
    upcomingStays: [],
    pastStays: []
  }),
  
  actions: {
    updateSearchParams(params) {
      this.searchParams = { ...this.searchParams, ...params };
    },
    
    saveSearch() {
      // Add current search to recent searches
      if (this.searchParams.destination) {
        this.recentSearches.unshift({
          id: Date.now(),
          ...this.searchParams
        });
        
        // Keep only the 5 most recent searches
        if (this.recentSearches.length > 5) {
          this.recentSearches = this.recentSearches.slice(0, 5);
        }
      }
    },
    
    toggleSavedHotel(hotel) {
      const index = this.savedHotels.findIndex(item => item.id === hotel.id);
      if (index === -1) {
        this.savedHotels.push(hotel);
      } else {
        this.savedHotels.splice(index, 1);
      }
    },
    
    isHotelSaved(hotelId) {
      return this.savedHotels.some(hotel => hotel.id === hotelId);
    },
    
    // Mock booking methods
    addBooking(bookingDetails) {
      const newBooking = {
        id: Date.now(),
        ...bookingDetails,
        status: 'confirmed',
        bookedOn: new Date().toISOString()
      };
      
      this.upcomingStays.unshift(newBooking);
      return newBooking;
    },
    
    cancelBooking(bookingId) {
      const index = this.upcomingStays.findIndex(booking => booking.id === bookingId);
      if (index !== -1) {
        this.upcomingStays[index].status = 'cancelled';
      }
    }
  }
});