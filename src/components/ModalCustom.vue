<template>
  <TransitionRoot appear :show="isOpen" as="template" class="z-50">
    <Dialog as="div" class="relative z-10">

      <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex transition-all ease-in duration-[0.3s] min-h-full items-center justify-center px-4 text-center">
          <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95">
            <DialogPanel
              class="flex flex-col justify-between items-center w-full max-w-md transform overflow-hidden rounded-2xl bg-center bg-no-repeat bg-cover bg-[url('/assets/img/Aviso-01.webp')] h-[390px] sm:h-[390px] px-6 py-3 font-muller transition-all ease-in duration-[0.3s] relative "
              v-if="typeModal == 0">
              <DialogTitle as="h3" class="font-bold text-xl text-white w-full h-[30px] mt-6">
                {{ title }}
              </DialogTitle>

              <div class="snap-x mx-auto snap-mandatory h-[100px] flex w-full overflow-scroll no-scrollbar"
                ref="carousel">
                <div class="snap-start text-white h-[100px] w-full flex-shrink-0 flex items-center justify-center text-lg"
                  v-for="(message, index) in description" :key="index">
                  {{ message }}
                </div>
              </div>

              <button class="absolute top-1/2 left-2 transform -translate-y-1/2 text-blue" @click="scrollCarousel(-1)"
                v-if="description.length > 1">
                <IconArrowBack class="w-[25px] h-[25px]" />
              </button>

              <button class="absolute top-1/2 right-2 transform -translate-y-1/2 text-blue" @click="scrollCarousel(1)"
                v-if="description.length > 1">
                <IconArrowForward class="w-[25px] h-[25px]" />
              </button>

              <button type="button" @click="closeModal()"
                class="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] text-lg text-secundary inline-flex items-center justify-center rounded-full border border-transparent bg-white font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
                <IconDoneVue />
              </button>
            </DialogPanel>
            <DialogPanel
              class="flex flex-col justify-between items-center transform px-6 py-3 font-lato transition-all ease-in duration-[0.3s] relative "
              v-else>
              <!-- <component :is="myComponent"> </component> -->
              <div
                class="transition-all ease-in duration-[0.3s] w-full h-full bg-gray-50 overflow-hidden max-w-[800px] flex justify-center items-center rounded-3xl p-10">
                <img class="object-cover transition-all ease-in duration-[0.3s]" v-lazy="{
                  src: url,
                  loading: '/img/placeholder.webp',
                  error: '/img/placeholder.webp',
                  delay: 250
                }" loading="lazy" alt="" />
              </div>
              <button type="button" @click="closeModal()"
                class="transition-all ease-in duration-[0.3s] absolute top-0 right-0 w-[40px] h-[40px] sm:w-[40px] sm:h-[40px] text-sm text-secundary inline-flex items-center justify-center rounded-full border border-transparent bg-white font-medium focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-2 hover:bg-secundary hover:text-white">
                <IconCloseVue />
              </button>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script lang="ts" setup>
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'
import IconDoneVue from '../components/icons/IconDone.vue'
import IconCloseVue from '../components/icons/IconClose.vue'
import { ref } from 'vue'
import IconArrowBack from './icons/IconArrowBack.vue'
import IconArrowForward from './icons/IconArrowForward.vue'

const carousel = ref<HTMLElement | null>(null)

defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    required: false,
    default: ''
  },
  description: {
    type: Array<String>,
    required: false,
    default: []
  },
  closeModal: {
    type: Function,
    default() {
      return 'Default function'
    }
  },
  myComponent: {
    type: Object,
    required: false
  },
  url: {
    type: String,
    required: false,
    default: ''
  },
  typeModal: {
    type: Number,
    required: false,
    default: 0
  }
})

function scrollCarousel(direction: number) {
  if (carousel.value) {
    const scrollAmount = carousel.value.clientWidth * direction
    carousel.value.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }
}
</script>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge, and Firefox */
.no-scrollbar {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}
</style>
