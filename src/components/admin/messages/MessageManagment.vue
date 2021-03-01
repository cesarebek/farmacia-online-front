<template>
  <div>
    <p class="font-bold text-2xl text-gray-700 my-4 justify-self-start">
      Gestione Messaggi
    </p>
    <div class="w-full flex md:justify-center md:flex-col md:items-center">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block  sm:px-6 lg:px-8">
          <div
            class="shadow overflow-scroll border-b border-gray-200 sm:rounded-lg"
          >
            <table class="divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Info Messaggio
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Data Messaggio
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <span>Azione</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <MessageRow
                  v-for="message in messages"
                  :key="message.id"
                  :id="message.id"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MessageRow from '@/components/admin/messages/MessageRow';

export default {
  components: { MessageRow },
  async created() {
    try {
      await this.$store.dispatch('loadMessages');
    } catch (e) {
      console.log(e);
    }
  },
  computed: {
    messages() {
      return this.$store.getters.allMessages;
    },
  },
};
</script>
