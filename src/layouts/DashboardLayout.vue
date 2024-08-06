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

    <!-- <aside
      
      class="fixed top-0 left-0 w-full z-40 h-screen transition-transform -translate-x-full sm:translate-x-0 hidden md:block"
      aria-label="Sidebar"
    >
      <div class="z-100 h-[10%] w-screen bg-black-400 flex flex-row">

        <div class="h-1/5 w-1/12 flex flex-row justify-around items-center">
          <IconOnexpo class="w-10"></IconOnexpo>
        </div>

        <div
          class="h-3/5 w-full overflow-y-auto flex flex-row justify-evenly items-center landing-header"
        >
          <router-link
            :to="item"
            v-slot="{ isActive }"
            class="relative"
            v-for="(item, index) in routerList"
            :key="index"
          >
            <span
              v-if="isActive"
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secundary opacity-75"
            ></span>
            <div
              :class="
                'transition-all ease-in duration-[0.2s] flex h-10 w-10 justify-center items-center py-2 rounded-full  hover:bg-gray-100 dark:hover:bg-gray-900 group ico ' +
                (isActive ? 'bg-blue/20 text-blue ' : 'text-green ')
              "
            >
              <component v-bind:is="routerIcon[index]" :key="index + 'icon'"></component>
            </div>
          </router-link>
        </div>
      </div>
    </aside> -->

    <nav id="separator-sidebar"
      class="flex max-w-full items-center justify-between p-2 md:p-1 lg:px-8 fixed top-0 left-0 w-full transition-transform -translate-x-full sm:translate-x-0 bg-[#2530c7]"
      aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="/" class="-m-1.5 p-1.5">
          <IconCircle class="w-[50px]" />
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
        <a href="https://www.instagram.com/somosdigitalquo/?igshid=MzRlODBiNWFlZA%3D%3D"
          class="text-sm font-bold leading-6 text-white hover:text-greenf focus:text-greenf hover:drop-shadow-[0_0_0.3em_#00FFCE] hover:animate-rotate-y"
          target="_blank"><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"
            class="fill-white hover:fill-greenf transition ease-in delay-50">
            <path
              d="M15.34 3.71C15.1027 3.71 14.8707 3.78038 14.6733 3.91224C14.476 4.04409 14.3222 4.23151 14.2313 4.45078C14.1405 4.67005 14.1168 4.91133 14.1631 5.14411C14.2094 5.37689 14.3236 5.59071 14.4915 5.75853C14.6593 5.92635 14.8731 6.04064 15.1059 6.08694C15.3387 6.13324 15.5799 6.10948 15.7992 6.01866C16.0185 5.92783 16.2059 5.77402 16.3378 5.57668C16.4696 5.37935 16.54 5.14734 16.54 4.91C16.54 4.59174 16.4136 4.28652 16.1885 4.06147C15.9635 3.83643 15.6583 3.71 15.34 3.71ZM19.94 6.13C19.9206 5.3003 19.7652 4.4794 19.48 3.7C19.2257 3.03313 18.83 2.42928 18.32 1.93C17.8248 1.41743 17.2196 1.02418 16.55 0.78C15.7727 0.486161 14.9508 0.32721 14.12 0.31C13.06 0.25 12.72 0.25 10 0.25C7.28 0.25 6.94 0.25 5.88 0.31C5.04915 0.32721 4.22734 0.486161 3.45 0.78C2.78168 1.02665 2.17693 1.41956 1.68 1.93C1.16743 2.42518 0.774176 3.03044 0.53 3.7C0.236161 4.47734 0.07721 5.29915 0.0599999 6.13C-5.58794e-08 7.19 0 7.53 0 10.25C0 12.97 -5.58794e-08 13.31 0.0599999 14.37C0.07721 15.2008 0.236161 16.0227 0.53 16.8C0.774176 17.4696 1.16743 18.0748 1.68 18.57C2.17693 19.0804 2.78168 19.4734 3.45 19.72C4.22734 20.0138 5.04915 20.1728 5.88 20.19C6.94 20.25 7.28 20.25 10 20.25C12.72 20.25 13.06 20.25 14.12 20.19C14.9508 20.1728 15.7727 20.0138 16.55 19.72C17.2196 19.4758 17.8248 19.0826 18.32 18.57C18.8322 18.0726 19.2283 17.4682 19.48 16.8C19.7652 16.0206 19.9206 15.1997 19.94 14.37C19.94 13.31 20 12.97 20 10.25C20 7.53 20 7.19 19.94 6.13ZM18.14 14.25C18.1327 14.8848 18.0178 15.5137 17.8 16.11C17.6403 16.5452 17.3839 16.9384 17.05 17.26C16.7256 17.5905 16.3332 17.8464 15.9 18.01C15.3037 18.2278 14.6748 18.3427 14.04 18.35C13.04 18.4 12.67 18.41 10.04 18.41C7.41 18.41 7.04 18.41 6.04 18.35C5.38089 18.3623 4.72459 18.2609 4.1 18.05C3.68578 17.8781 3.31136 17.6228 3 17.3C2.66809 16.9787 2.41484 16.5852 2.26 16.15C2.01586 15.5452 1.88044 14.9019 1.86 14.25C1.86 13.25 1.8 12.88 1.8 10.25C1.8 7.62 1.8 7.25 1.86 6.25C1.86448 5.60106 1.98295 4.95795 2.21 4.35C2.38605 3.92791 2.65627 3.55166 3 3.25C3.30381 2.90617 3.67929 2.6331 4.1 2.45C4.70955 2.23004 5.352 2.11508 6 2.11C7 2.11 7.37 2.05 10 2.05C12.63 2.05 13 2.05 14 2.11C14.6348 2.11728 15.2637 2.23225 15.86 2.45C16.3144 2.61865 16.7223 2.89285 17.05 3.25C17.3777 3.55718 17.6338 3.93273 17.8 4.35C18.0223 4.95893 18.1373 5.60178 18.14 6.25C18.19 7.25 18.2 7.62 18.2 10.25C18.2 12.88 18.19 13.25 18.14 14.25ZM10 5.12C8.98581 5.12198 7.99496 5.42453 7.15265 5.98942C6.31035 6.55431 5.65438 7.3562 5.26763 8.29375C4.88089 9.23131 4.78072 10.2625 4.97979 11.2569C5.17886 12.2514 5.66824 13.1645 6.38608 13.881C7.10392 14.5974 8.01801 15.085 9.01286 15.2821C10.0077 15.4793 11.0387 15.3771 11.9755 14.9885C12.9123 14.6 13.7129 13.9424 14.2761 13.099C14.8394 12.2556 15.14 11.2642 15.14 10.25C15.1413 9.5751 15.0092 8.90661 14.7512 8.28296C14.4933 7.65931 14.1146 7.09281 13.6369 6.61605C13.1592 6.13929 12.5919 5.76168 11.9678 5.50493C11.3436 5.24818 10.6749 5.11736 10 5.12ZM10 13.58C9.34139 13.58 8.69757 13.3847 8.14995 13.0188C7.60234 12.6529 7.17552 12.1328 6.92348 11.5243C6.67144 10.9159 6.6055 10.2463 6.73398 9.60035C6.86247 8.95439 7.17963 8.36104 7.64533 7.89533C8.11104 7.42963 8.70439 7.11247 9.35035 6.98398C9.99631 6.8555 10.6659 6.92144 11.2743 7.17348C11.8828 7.42552 12.4029 7.85234 12.7688 8.39995C13.1347 8.94757 13.33 9.59139 13.33 10.25C13.33 10.6873 13.2439 11.1203 13.0765 11.5243C12.9092 11.9284 12.6639 12.2954 12.3547 12.6047C12.0454 12.9139 11.6784 13.1592 11.2743 13.3265C10.8703 13.4939 10.4373 13.58 10 13.58Z">
            </path>
          </svg>
        </a>
        <a href="https://facebook.com/DigitalQuo/"
          class="text-sm font-bold leading-6 text-white hover:text-greenf focus:text-greenf hover:drop-shadow-[0_0_0.3em_#00FFCE] hover:animate-rotate-y"
          target="_blank"><svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg"
            class="stroke-white hover:stroke-greenf transition ease-in delay-50">
            <path
              d="M10 0.75H7.54545C6.46048 0.75 5.41994 1.25044 4.65274 2.14124C3.88555 3.03204 3.45455 4.24022 3.45455 5.5V8.35H1V12.15H3.45455V19.75H6.72727V12.15H9.18182L10 8.35H6.72727V5.5C6.72727 5.24804 6.81347 5.00641 6.96691 4.82825C7.12035 4.65009 7.32846 4.55 7.54545 4.55H10V0.75Z"
              stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </a>
        <a href="#">
          <button class="bg-white px-3 py-2 rounded-xl flex justify-evenly items-center text-green">
            <p class="text-black">Comienza tu registro</p>
            <IconArrowCircle class="text-black pl-5"/>      
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
