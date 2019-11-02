<template>
  <div class="flex justify-center items-center">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  middleware: ['auth'],

  async asyncData ({ $axios }) {
    try {
      const { data } = await $axios.get('/api/dashboard')

      return { message: data }
    } catch (e) {
    }
  }
}
</script>
