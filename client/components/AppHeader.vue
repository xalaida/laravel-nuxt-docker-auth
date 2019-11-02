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
          v-if="$auth.loggedIn"
          :to="{ name: 'dashboard' }"
          class="ml-12 font-bold text-gray-100"
        >
          Dashboard
        </nuxt-link>

        <div class="ml-auto">
          <nuxt-link
            v-if="!$auth.loggedIn"
            :to="{ name: 'login' }"
            class="font-bold text-gray-100"
          >
            Login
          </nuxt-link>

          <nuxt-link
            v-if="!$auth.loggedIn"
            :to="{ name: 'register' }"
            class="ml-12 font-bold text-gray-100"
          >
            Register
          </nuxt-link>

          <button
            v-if="$auth.loggedIn"
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
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({
      logout: 'auth/logout'
    })
  }
}
</script>
