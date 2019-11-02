<template>
  <header class="bg-teal-600">
    <div class="container mx-auto">
      <div class="flex py-3">
        <nuxt-link
          :to="{ name: 'index' }"
          class="font-bold text-gray-100"
        >
          Home
        </nuxt-link>

        <nuxt-link
          v-if="auth"
          :to="{ name: 'dashboard' }"
          class="ml-12 font-bold text-gray-100"
        >
          Dashboard
        </nuxt-link>

        <div class="ml-auto">
          <nuxt-link
            v-if="guest"
            :to="{ name: 'login' }"
            class="font-bold text-gray-100"
          >
            Login
          </nuxt-link>

          <nuxt-link
            v-if="guest"
            :to="{ name: 'register' }"
            class="ml-12 font-bold text-gray-100"
          >
            Register
          </nuxt-link>

          <button
            v-if="auth"
            class="ml-12 font-bold text-gray-100"
            @click.prevent="logout"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    guest () {
      return !this.$auth.loggedIn
    },

    auth () {
      return this.$auth.loggedIn
    }
  },

  methods: {
    async logout () {
      try {
        await this.$store.dispatch('auth/logout')
      } catch (e) {
      }
    }
  }
}
</script>
