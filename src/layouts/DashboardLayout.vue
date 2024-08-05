<template>
  <div class="w-screen h-screen bg-gray-50">
    <button
      data-drawer-target="separator-sidebar"
      data-drawer-toggle="separator-sidebar"
      aria-controls="separator-sidebar"
      type="button"
      class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    >
      <span class="sr-only">Open sidebar</span>
      <svg
        class="w-6 h-6"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clip-rule="evenodd"
          fill-rule="evenodd"
          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
        ></path>
      </svg>
    </button>

    <aside
      id="separator-sidebar"
      class="fixed top-0 left-0 w-full z-40 h-screen transition-transform -translate-x-full sm:translate-x-0 hidden md:block"
      aria-label="Sidebar"
    >
      <div class="z-100 h-[10%] w-screen bg-black-400 flex flex-row">
        <!-- icono del sidebar -->
        <div class="h-1/5 w-1/12 flex flex-row justify-around items-center">
          <IconOnexpo class="w-10"></IconOnexpo>
        </div>
        <!-- menus -->
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
    </aside>

    <div class="z-0 w-full md:w-full h-full bg-white dark:bg-black">
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
// import { useAuthStore } from '@/stores/auth'
import { markRaw, ref } from 'vue'
import IconTune from '../components/icons/IconTune.vue'

const routerList = ref([
  { name: 'home' },
  { name: 'about' }
  //   { name: 'staff' },
  //   { name: 'paymet-management' },
  //   { name: 'store' }
])
const routerIcon = markRaw([IconDashboard, IconProfile, IconUsers, IconPayments, IconTune])

// const authStore = useAuthStore()
</script>
