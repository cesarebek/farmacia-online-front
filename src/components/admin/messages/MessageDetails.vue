<template>
  <div
    @click.self="this.$emit('closeDetails')"
    class="z-20 fixed inset-0 overflow-hidden flex justify-center items-center"
    style="background: rgba(0,0,0,.7);"
  >
    <div
      class="w-3/4 h-3/4 bg-gray-200 rounded-xl fixed overflow-y-scroll flex flex-col justify-between"
    >
      <svg
        @click="this.$emit('closeDetails')"
        class="w-5 absolute top-10 right-10 cursor-pointer"
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
      <div class="bg-gray-100 p-5">
        <p class="text-4xl font-semibold text-gray-800">Mittente</p>
        <p>{{ fullName }}</p>
      </div>
      <div class="h-full bg-gray-200 border-t border-b border-gray-300 p-5">
        <p class="text-4xl font-semibold text-gray-800 mb-5">
          Messaggio
        </p>
        <p>{{ message.message }}</p>
      </div>

      <div
        class="place-items-end flex justify-between p-5 bg-gray-100 flex-col sm:flex-row space-y-3"
      >
        <button
          @click="deleteMessage"
          class="w-full sm:w-1/2 lg:w-1/4 sm:inline-flex sm:justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Elimina questo messaggio
        </button>
        <a
          class="w-full sm:w-1/4 lg:w-1/5 text-center sm:inline-flex sm:justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          :href="`mailto:${message.email}`"
          >Rispondi</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  props: ['id', 'fullName'],
  computed: {
    message() {
      return this.$store.getters.getMessageById(this.id);
    },
    creation() {
      return moment(this.message.created_at).format('D MMMM YYYY');
    },
  },
  methods: {
    async deleteMessage() {
      await this.$store.dispatch('deleteMessage', this.id);
      this.$emit('closeDetails');
    },
  },
};
</script>
