<template>
  <div class="container mx-auto">
    <div class="mt-12 flex justify-center">
      <div class="w-1/3">
        <form
          class="bg-white rounded-lg shadow-lg p-4"
          @input="errors.clear($event.target.id)"
          @submit.prevent="submit"
        >
          <h1 class="font-bold text-gray-800">
            Sign in to your app
          </h1>

          <AppInput
            id="email"
            v-model="form.email"
            type="email"
            label="Email"
            class="mt-6"
            placeholder="Enter your email..."
            :errors="errors.get('email')"
          />

          <AppInput
            id="password"
            v-model="form.password"
            type="password"
            label="Password"
            class="mt-6"
            placeholder="Enter your password..."
          />

          <AppButton
            type="submit"
            class="mt-6"
          >
            Login
          </AppButton>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import AppInput from '~/components/AppInput.vue'
import AppButton from '~/components/AppButton.vue'
import Errors from '~/support/form/Errors'

export default {
  middleware: ['auth'],

  auth: 'guest',

  components: {
    AppInput,
    AppButton
  },

  data () {
    return {
      form: {
        email: '',
        password: ''
      },

      errors: new Errors(['email'])
    }
  },

  methods: {
    async submit () {
      if (this.errors.any()) {
        return
      }

      try {
        await this.$store.dispatch('auth/login', this.form)
      } catch (e) {
        this.errors.assign({
          email: ['The given credentials are invalid.']
        })
      }
    }
  }
}
</script>
