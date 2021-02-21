<template>
  <div class="min-h-screen">
    <Navigation />
    <router-view />
    <MobileNavigation class="fixed bottom-0 sm:hidden" />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation';
import MobileNavigation from '@/components/MobileNavigation';

export default {
  components: { Navigation, MobileNavigation },
  async created() {
    await this.$store.dispatch('tryLogin');
    await this.$store.dispatch('loadCategories');
    await this.$store.dispatch('loadProducts');
  },
  updated() {
    console.log(this.$store.getters.cart);
  },
};
</script>
