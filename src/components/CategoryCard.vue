<template>
  <div
    class="rounded-2xl shadow-md p-16 flex items-center justify-center bg-gray-500 min-h-1/4"
  >
    <h2 class="font-semibold text-white">{{ name }}</h2>
  </div>
</template>

<script>
export default {
  props: ['name', 'id'],
};
</script>
