<template>
  <div>
    <label :for="id" class="text-teal-500 uppercase font-bold">{{ label }}</label>

    <input
      :id="id"
      :value="value"
      v-bind="$attrs"
      :class="inputClasses"
      class="w-full py-2 text-gray-800 border-b bg-transparent focus:outline-none focus:border-blue-400"
      @input="update"
    >

    <span v-show="hasError" class="text-red-600 text-sm">{{ errors[0] }}</span>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,

  props: {
    id: {
      type: String,
      required: true
    },

    label: {
      type: String,
      required: true
    },

    value: {
      type: [Number, String],
      default: null
    },

    errors: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    hasError () {
      return this.errors.length
    },

    inputClasses () {
      return this.hasError ? 'border-red-600' : 'border-gray-400'
    }
  },

  methods: {
    update (event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>
