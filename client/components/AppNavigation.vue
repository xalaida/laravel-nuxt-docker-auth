<template>
  <div class="bg-teal-600">
    <div class="container mx-auto">
      <div class="flex py-3">
        <nuxt-link
          :to="{ name: 'index' }"
          class="font-bold text-gray-100"
        >
          Home
        </nuxt-link>

        <nuxt-link
          :to="{ name: 'dashboard' }"
          class="ml-6 font-bold text-gray-100"
        >
          Dashboard
        </nuxt-link>

        <nuxt-link
          :to="{ name: 'sign-in' }"
          class="ml-auto font-bold text-gray-100"
        >
          Sign in
        </nuxt-link>

        <nuxt-link
          :to="{ name: 'sign-up' }"
          class="ml-6 font-bold text-gray-100"
        >
          Sign up
        </nuxt-link>

        <nuxt-link
          :to="{ name: 'sign-out' }"
          class="ml-6 font-bold text-gray-100"
        >
          Sign out
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    navigation: {
      type: Object,
      default: () => ({
        left: [],
        right: []
      })
    }
  }
}
</script>

<style scoped>

</style>
