<template>
  <div class="container mx-auto">
    <div class="flex flex-col items-center space-y-10">
      <div class="w-3/4 md:w-1/2 text-center text-gray-600 font-medium text-xl">
        <p>
          Contatta i nostri farmacisti utilizzando il form qui sotto. La voglia
          di soddisfare i nostri clienti è ciò che più ci contraddistingue.
        </p>
        <p class="mt-1 text-sm">Ti risponderemo entro 24h!</p>
      </div>

      <!-- Form -->
      <form class="max-w-lg mx-10 md:mx-0">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Nome
            </label>
            <input
              @blur="validateName"
              v-model.trim="name"
              :class="{
                invalid: nameValidity === 'invalid',
                valid: nameValidity === 'valid',
              }"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-first-name"
              type="text"
              placeholder="Mario"
            />
            <p
              v-if="nameValidity === 'invalid'"
              class="text-red-500 text-xs italic"
            >
              Questo campo è richiesto.
            </p>
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Cognome
            </label>
            <input
              @blur="validateSurname"
              v-model.trim="surname"
              :class="{
                invalid: surnameValidity === 'invalid',
                valid: surnameValidity === 'valid',
              }"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Rossi"
            />
            <p
              v-if="surnameValidity === 'invalid'"
              class="text-red-500 text-xs italic"
            >
              Questo campo è richiesto.
            </p>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              E-mail
            </label>
            <input
              @blur="validateEmail"
              v-model.trim="email"
              :class="{
                invalid: emailValidity === 'invalid',
                valid: emailValidity === 'valid',
              }"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
              placeholder="mariorossi@gmail.com"
            />
            <p
              v-if="emailValidity === 'invalid'"
              class="text-red-500 text-xs italic"
            >
              Inserisci una email valida.
            </p>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Messaggio
            </label>
            <textarea
              @blur="validateMessage"
              v-model.trim="message"
              :class="{
                invalid: messageValidity === 'invalid',
                valid: messageValidity === 'valid',
              }"
              class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              id="message"
            ></textarea>
            <p
              v-if="messageValidity === 'invalid'"
              class="text-red-500 text-xs italic"
            >
              Questo campo è richiesto.
            </p>
          </div>
        </div>
        <div class="md:flex md:items-center">
          <div class="md:w-1/3">
            <button
              @click="newMessage"
              :disabled="!formValid"
              class="bg-indigo-500 shadow bg-teal-400 hover:bg-teal-400 duration-300 ease-out transform hover:-translate-y-1 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Invia
            </button>
          </div>
          <div class="md:w-2/3"></div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import validator from 'validator';
export default {
  data() {
    return {
      name: '',
      surname: '',
      email: '',
      message: '',
      // Validation
      nameValidity: 'pending',
      surnameValidity: 'pending',
      emailValidity: 'pending',
      messageValidity: 'pending',
    };
  },
  methods: {
    async newMessage() {
      const message = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        message: this.message,
      };
      await this.$store.dispatch('newMessage', message);
      this.$router.push('/');
    },
    validateName() {
      if (validator.isEmpty(this.name)) {
        this.nameValidity = 'invalid';
      } else {
        this.nameValidity = 'valid';
      }
    },
    validateSurname() {
      if (validator.isEmpty(this.surname)) {
        this.surnameValidity = 'invalid';
      } else {
        this.surnameValidity = 'valid';
      }
    },
    validateEmail() {
      if (!validator.isEmail(this.email)) {
        this.emailValidity = 'invalid';
      } else {
        this.emailValidity = 'valid';
      }
    },
    validateMessage() {
      if (validator.isEmpty(this.message)) {
        this.messageValidity = 'invalid';
      } else {
        this.messageValidity = 'valid';
      }
    },
  },
  computed: {
    formValid() {
      return (
        this.messageValidity === 'valid' &&
        this.nameValidity === 'valid' &&
        this.emailValidity === 'valid' &&
        this.surnameValidity === 'valid'
      );
    },
  },
};
</script>

<style scoped>
.invalid {
  @apply border-red-500;
}
.valid {
  @apply border-green-500;
}
</style>
