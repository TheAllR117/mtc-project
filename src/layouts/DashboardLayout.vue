<template>
  <div class="w-full h-screen bg-gray-50">
    <button data-drawer-target="separator-sidebar" data-drawer-toggle="separator-sidebar"
      aria-controls="separator-sidebar" type="button"
      class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
      <span class="sr-only">Open sidebar</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" fill-rule="evenodd"
          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
        </path>
      </svg>
    </button>

    <nav id="separator-sidebar"
      class="flex max-w-full items-center justify-between px-5 min-[1024px]:px-8 py-2 min-[1024px]:py-0 fixed top-0 left-0 w-full transition-transform -translate-x-full sm:translate-x-0 bg-[#2530c7] z-[9999] "
      aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="/" class="-m-1.5 p-1.5">
          <img src="/assets/img/logo.png" alt="" class="w-[40px] h-[40px]">
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-full p-2.5 bg-white">
          <span class="sr-only">Open main menu</span><svg width="54" height="39" viewBox="0 0 54 39" fill="none"
            xmlns="http://www.w3.org/2000/svg" class="w-6 h-6">
            <path
              d="M4.28571 0.755859H23.2143C24.2183 0.755859 25.1812 1.15776 25.8912 1.87314C26.6011 2.58852 27 3.55879 27 4.57049C27 5.5822 26.6011 6.55246 25.8912 7.26785C25.1812 7.98323 24.2183 8.38513 23.2143 8.38513H4.28571C3.28168 8.38513 2.31877 7.98323 1.60881 7.26785C0.898851 6.55246 0.5 5.5822 0.5 4.57049C0.5 3.55879 0.898851 2.58852 1.60881 1.87314C2.31877 1.15776 3.28168 0.755859 4.28571 0.755859ZM30.7857 31.2729H49.7143C50.7183 31.2729 51.6812 31.6748 52.3912 32.3902C53.1011 33.1056 53.5 34.0759 53.5 35.0876C53.5 36.0993 53.1011 37.0695 52.3912 37.7849C51.6812 38.5003 50.7183 38.9022 49.7143 38.9022H30.7857C29.7817 38.9022 28.8188 38.5003 28.1088 37.7849C27.3988 37.0695 27 36.0993 27 35.0876C27 34.0759 27.3988 33.1056 28.1088 32.3902C28.8188 31.6748 29.7817 31.2729 30.7857 31.2729ZM4.28571 16.0144H49.7143C50.7183 16.0144 51.6812 16.4163 52.3912 17.1317C53.1011 17.8471 53.5 18.8173 53.5 19.829C53.5 20.8407 53.1011 21.811 52.3912 22.5264C51.6812 23.2418 50.7183 23.6437 49.7143 23.6437H4.28571C3.28168 23.6437 2.31877 23.2418 1.60881 22.5264C0.898851 21.811 0.5 20.8407 0.5 19.829C0.5 18.8173 0.898851 17.8471 1.60881 17.1317C2.31877 16.4163 3.28168 16.0144 4.28571 16.0144Z"
              fill="#15082B"></path>
          </svg>
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-7 border border-transparent pt-3 pb-3">

        <router-link :to="item" v-slot="{ isActive }" class="relative" v-for="(item, index) in routerList" :key="index">
          <span v-if="isActive"
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secundary opacity-75"></span>
          <div :class="'transition-all ease-in duration-[0.2s] flex justify-center items-center py-2 rounded-full  hover:bg-gray-100 dark:hover:bg-gray-900 group ico ' +
            (isActive ? 'bg-blue/20 text-blue ' : 'text-green ')
            ">
            <p
              class="text-sm leading-6 text-white hover:text-greenf focus:text-greenf transition ease-in delay-50 hover:drop-shadow-[0_0_0.5em_#00FFCE] font-medium">
              {{ item.text }}</p>
          </div>
        </router-link>
      </div>
      <div class="hidden lg:flex lg:gap-x-7 pl-7 pt-3 pb-3 items-center">
        <a href="https://facebook.com/DigitalQuo/"
          class="text-sm font-bold leading-6 text-[#2530c7] hover:text-greenf focus:text-greenf hover:drop-shadow-[0_0_0.3em_#00FFCE] hover:animate-rotate-y bg-white rounded-full w-8 h-8 flex justify-center items-center"
          target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="21">
            <path class="" fill="currentColor"
              d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9l.3-.5z" />
          </svg>
        </a>
        <a href="https://www.instagram.com/somosdigitalquo/?igshid=MzRlODBiNWFlZA%3D%3D"
          class="text-sm font-bold leading-6 text-[#2530c7] hover:text-greenf focus:text-greenf hover:drop-shadow-[0_0_0.3em_#00FFCE] hover:animate-rotate-y bg-white rounded-full w-8 h-8 flex justify-center items-center"
          target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="21">
            <path class="" fill="currentColor"
              d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
          </svg>
        </a>
        <a href="#">
          <button class="bg-white px-3 rounded-xl flex justify-evenly items-center text-green">
            <p class="text-[#2d71fc] font-medium">Comienza tu registro</p>
            <IconArrowCircle class="text-[#2d71fc] pl-5 !w-10 !h-10" />
          </button>
        </a>
      </div>
    </nav>

    <div class="z-0 w-full h-full bg-white dark:bg-black">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconOnexpo from '../components/icons/IconOnexpo.vue'
import IconDashboard from '../components/icons/IconDashboard.vue'
import IconUsers from '../components/icons/IconUsers.vue'
import IconProfile from '../components/icons/IconProfile.vue'
import IconPayments from '../components/icons/IconPaymets.vue'
import IconArrowCircle from '../components/icons/IconArrowCircle.vue'
// import { useAuthStore } from '@/stores/auth'
import { markRaw, ref } from 'vue'
import IconTune from '../components/icons/IconTune.vue'
import IconCircle from '../components/icons/IconCircle.vue'

const routerList = ref([
  {
    name: 'download',
    text: 'Descarga'
  },
  {
    name: 'sale',
    text: 'Vende'
  },
  {
    name: 'more-solutions',
    text: 'Más soluciones'
  },
  {
    name: 'earn-more',
    text: 'Gana más'
  },
  {
    name: 'blog',
    text: 'Blog'
  },
  {
    name: 'portals',
    text: 'Portales'
  },
  {
    name: 'family-mtc',
    text: 'Familia MTC'
  },
  {
    name: 'doubts',
    text: 'Dudas'
  }
  //   { name: 'staff' },
  //   { name: 'paymet-management' },
  //   { name: 'store' }
])
const routerIcon = markRaw([IconDashboard, IconProfile, IconUsers, IconPayments, IconTune])

// const authStore = useAuthStore()
</script>
