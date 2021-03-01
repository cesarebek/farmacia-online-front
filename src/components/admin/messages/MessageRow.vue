<template>
  <transition-group name="product">
    <MessageDetails
      v-if="MessageDetailsOpen"
      @close-details="MessageDetailsOpen = false"
      :id="message.id"
      :fullName="fullName"
    />
  </transition-group>
  <tr>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="flex items-center">
        <div class="flex-shrink-0 h-10 w-10"># {{ message.id }}</div>
        <div class="ml-4">
          <div class="text-sm font-medium text-gray-900">
            {{ fullName }}
          </div>
          <div class="text-sm text-gray-500">{{ message.email }}</div>
        </div>
      </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="text-sm text-gray-500">{{ creation }}</div>
    </td>

    <td class="px-6 py-4 text-sm font-medium text-gray-500">
      <button
        @click="MessageDetailsOpen = !MessageDetailsOpen"
        class="text-indigo-600 hover:text-indigo-900"
      >
        Visualizza Messaggio
      </button>
    </td>
  </tr>
</template>

<script>
import moment from 'moment';
import MessageDetails from '@/components/admin/messages/MessageDetails';

export default {
  components: { MessageDetails },
  props: ['id'],
  data() {
    return {
      MessageDetailsOpen: false,
    };
  },
  computed: {
    fullName() {
      return `${this.message.name}  ${this.message.surname}`;
    },
    message() {
      return this.$store.getters.getMessageById(this.id);
    },
    creation() {
      return moment(this.message.created_at).format('D MMMM YYYY, H:mm');
    },
  },
};
</script>

<style scoped>
/* Animations */
.product-enter-from {
  opacity: 0;
  transform: scale(1.1);
}
.product-enter-active {
  transition: all 0.5s ease-out;
}
.product-enter-to {
  opacity: 1;
  transform: scale(1);
}

.product-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
.product-leave-active {
  transition: all 0.3s ease-in;
}
.product-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
