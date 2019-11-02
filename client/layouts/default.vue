<template>
  <div class="h-full flex flex-col bg-gray-200 antialiased text-gray-800">
    <AppHeader />
    <nuxt class="flex-1" />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
  html,
  body,
  #__nuxt,
  #__layout {
    @apply h-full;
  }
</style>
