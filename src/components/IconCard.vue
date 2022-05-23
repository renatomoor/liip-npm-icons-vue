<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  }
});
</script>

<template>
  <div class="
      bg-gradient-to-r from-gray-500 via-gray-600 to-gray-500 p-4 text-white rounded-lg
      hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500
      hover:shadow-xl
      transition ease-in-out
      ">
    <slot />
    <div class="font-mono text-sm text-center"> <span>{{ name }} </span></div>
  </div>
</template>