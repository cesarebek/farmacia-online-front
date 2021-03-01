<template>
  <div
    class="w-64 p-2 rounded-md bg-blue-400 border-l-4 border-blue-500 text-gray-800 text-sm opacity-90"
  >
    <svg
      class="absolute top-2 right-2 w-5 cursor-pointer"
      @click="this.$emit('resetMessage')"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
    <header class="text-lg">Messaggio:</header>
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$emit('resetMessage');
    }, 3000);
  },
};
</script>
