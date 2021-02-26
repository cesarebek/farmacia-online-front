<template>
  <tr>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="flex items-center">
        <div class="flex-shrink-0 h-10 w-10">
          <svg
            class="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
        <div class="ml-4">
          <div class="text-sm font-medium text-gray-900">
            {{ user.name }}
          </div>
          <div class="text-sm text-gray-500">
            {{ user.email }}
          </div>
        </div>
      </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="text-sm text-gray-500">{{ creation }}</div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="text-sm text-gray-500">{{ lastChange }}</div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <span class="text-sm text-gray-500">
        {{ userOrders }}
      </span>
    </td>
    <td class="cursor-default px-6 py-4 whitespace-nowrap  text-sm font-medium">
      <p class="text-indigo-600 hover:text-indigo-900">
        {{ user.roles[0].name }}
      </p>
    </td>
  </tr>
</template>

<script>
import moment from 'moment';

export default {
  props: ['id'],
  data() {
    return {
      updateOpen: false,
    };
  },
  computed: {
    user() {
      return this.$store.getters.getUserById(this.id);
    },
    userOrders() {
      return this.$store.getters.getOrderByUserId(this.id).length;
    },
    lastChange() {
      return moment(this.user.updated_at).format('D MMMM YYYY');
    },
    creation() {
      return moment(this.user.created_at).format('D MMMM YYYY');
    },
  },
};
</script>
