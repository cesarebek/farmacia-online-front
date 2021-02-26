<template>
  <p class="font-bold text-2xl text-gray-700 my-4">Gestion Utenti</p>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Info Utente
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Data Creazione
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Ultima Modifica
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  N° Ordini Effettuati
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Ruolo
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <UserRow v-for="user in allUsers" :key="user.id" :id="user.id" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserRow from '@/components/admin/users/UserRow';

export default {
  components: { UserRow },
  async created() {
    await this.$store.dispatch('loadAllUsers');
    await this.$store.dispatch('loadAllOrders');
  },
  computed: {
    allUsers() {
      return this.$store.getters.allUsers;
    },
  },
};
</script>
