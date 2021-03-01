<template>
  <div class="container mx-auto">
    <router-view v-slot="{ Component }">
      <transition name="admin" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
.admin-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.admin-enter-active {
  transition: all 0.5s ease-out;
}
.admin-enter-to {
  opacity: 1;
  transform: translateY(0px);
}

.admin-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.admin-leave-active {
  transition: all 0.3s ease-in;
}
.admin-leave-from {
  opacity: 1;
  transform: translateY(0px);
}
</style>
