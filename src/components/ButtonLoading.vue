<template>
  <button type="submit" :class="`w-max px-4 justify-self-end uppercase block h-12 text-sm focus:outline-none font-black font-lato transition-all duration-500 ${colorText} ${isLoading ? widthLoading : width} ${!disable ?  colorButton + ' hover:opacity-[0.9] ' : colorButtonHover } ${isLoading ? ' cursor-progress rounded-full ' : borderRadius}`
    " :disabled="disable">
    <IconLoading v-if="isLoading" />
    <p class="font-black font-lato" v-else>{{ label }}</p>
  </button>
</template>

<script lang="ts" setup>
import IconLoading from './icons/IconLoading.vue'

defineProps({
  id: String,
  label: String,
  width: {
    type: String,
    default: 'w-[12%]'
  },
  borderRadius: {
    type: String,
    default: 'rounded-[12px]'
  },
  widthLoading: {
    type: String,
    default: 'w-[12%]'
  },
  disable: {
    type: Boolean,
    default: false
  },
  isLoading: {
    type: Boolean,
    default: false
  },
  colorText: {
    type: String,
    default: 'text-white'
  },
  colorButton: {
    type: String,
    default: 'bg-primary'
  },
  colorButtonHover: {
    type: String,
    default: 'bg-primary-500'
  }
})

</script>
