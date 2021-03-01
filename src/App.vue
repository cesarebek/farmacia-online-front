<template>
  <div class="min-h-screen">
    <Navigation />
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <MobileNavigation class="fixed bottom-0 sm:hidden" />
  </div>

  <teleport to="body">
    <base-toast
      v-if="userMessage || productMessage || cartMessage"
      class="fixed top-10 right-10"
      @reset-message="resetMessage"
    >
      {{ userMessage || productMessage || cartMessage }}
    </base-toast>
  </teleport>
</template>

<script>
import Navigation from '@/components/Navigation';
import MobileNavigation from '@/components/MobileNavigation';

export default {
  components: { Navigation, MobileNavigation },
  async created() {
    await this.$store.dispatch('tryLogin');
    try {
      await this.$store.dispatch('loadCategories');
      await this.$store.dispatch('loadProducts');
    } catch (e) {
      console.log(e);
    }
  },
  computed: {
    userMessage() {
      return this.$store.getters.userMessage;
    },
    productMessage() {
      return this.$store.getters.productMessage;
    },
    cartMessage() {
      return this.$store.getters.cartMessage;
    },
  },
  methods: {
    resetMessage() {
      this.$store.dispatch('resetUserMessage');
      this.$store.dispatch('resetProductMessage');
      this.$store.dispatch('resetCartMessage');
    },
  },
};
</script>

<style scoped>
/* Animations */
.route-enter-from {
  opacity: 0;
}
.route-enter-active {
  transition: all 0.5s ease-out;
}
.route-enter-to {
  opacity: 1;
}

.route-leave-to {
  opacity: 0;
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
.route-leave-from {
  opacity: 1;
}
</style>
