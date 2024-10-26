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
      class="flex max-w-full items-center justify-between px-5 min-[1024px]:px-8 py-2 min-[1024px]:py-0 fixed top-0 left-0 w-full transition-transform -translate-x-full sm:translate-x-0 bg-[#FFFFFF] z-[9999] "
      aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="/" class="-m-1.5 p-1.5">
          <img src="/assets/img/logo.png" alt="" class="w-[150px] h-auto">
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
              class="text-sm leading-6 text-[#1D394D] hover:text-greenf focus:text-greenf transition ease-in delay-50 hover:drop-shadow-[0_0_0.5em_#00FFCE] font-medium">
              {{ item.text }}</p>
          </div>
        </router-link>
      </div>
      <div class="hidden lg:flex lg:gap-x-7 pl-7 pt-3 pb-3 items-center">
        <a href="#">
          <button class="bg-transparent px-3 rounded-xl flex justify-evenly items-center text-[#04B2CA] border-2 border-[#04B2CA]">
            <p class="text-[#04B2CA] font-medium">CONTACTO</p>
          </button>
        </a>
        <a href="#">
          <button class="bg-[#04B2CA] px-3 rounded-xl flex justify-evenly items-center text-green border-2 border-[#04B2CA]">
            <p class="text-white font-medium">INICIAR SESIÓN</p>
          </button>
        </a>
      </div>
    </nav>

    <div class="z-0 w-full h-full bg-white">
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
    text: '¿QUÉ TE OFRECEMOS?'
  },
  {
    name: 'sale',
    text: 'SOLUCIONES'
  },
  {
    name: 'more-solutions',
    text: 'PRECIOS'
  },
  //   { name: 'staff' },
  //   { name: 'paymet-management' },
  //   { name: 'store' }
])
const routerIcon = markRaw([IconDashboard, IconProfile, IconUsers, IconPayments, IconTune])

// const authStore = useAuthStore()
</script>
