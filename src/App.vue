<script setup>
import IconCard from "./components/IconCard.vue";
const icons = [
  'house',
  'shop-basket',
  'robot',
  'music-ticket'
]
</script>

<template>
  <div class="flex gap-4 justify-center p-4">
    <div v-for="icon in icons" class="relative">
      <IconCard :name="icon">
        <BaseIcon
        :name="icon"
        class="
          w-32 h-32 p-5
          text-white
          hover:scale-125 transform transition ease-in-out"
        />
      </IconCard>
    </div>
  </div>
</template>