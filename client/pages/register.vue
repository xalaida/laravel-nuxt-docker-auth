<template>
  <div class="container mx-auto">
    <div class="mt-12 flex justify-center">
      <div class="w-1/3">
        <form
          class="bg-white rounded-lg shadow-lg p-4"
          @input="form.errors.clear($event.target.id)"
          @submit.prevent="submit"
        >
          <h1 class="font-bold text-gray-800">
            Register
          </h1>

          <AppInput
            id="email"
            v-model="form.email"
            label="Email"
            class="mt-6"
            placeholder="Enter your email..."
            :errors="form.errors.get('email')"
          />

          <AppInput
            id="password"
            v-model="form.password"
            type="password"
            label="Password"
            class="mt-6"
            placeholder="Enter your password..."
            :errors="form.errors.get('password')"
          />

          <AppButton
            type="submit"
            class="mt-6"
          >
            Register
          </AppButton>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import AppInput from '~/components/AppInput.vue'
import AppButton from '~/components/AppButton.vue'
import Form from '~/support/form/Form'

export default {
  middleware: ['auth'],

  auth: 'guest',

  components: {
    AppInput,
    AppButton
  },

  data () {
    return {
      form: new Form({
        email: '',
        password: ''
      })
    }
  },

  methods: {
    async submit () {
      try {
        await this.form.submitUsing((data) => {
          return this.$store.dispatch('auth/register', data)
        })
      } catch (e) {
      }
    }
  }
}
</script>
