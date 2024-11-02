<template>
  <div class="w-full h-screen bg-gray-50 font-muller">

    <!-- Desktop -->
    <nav id="separator-sidebar"
      class=""
      :class="[`${isScrolled ? 'bg-white shadow-[0_0px_7px_3px_rgba(0,0,0,0.1)] rounded-[0px_0px_15px_15px]' : 'bg-[#FFFFFF]'} transition-all ease-in duration-150 hidden lg:flex max-w-full items-center justify-between px-5 min-[1024px]:px-8 min-[1024px]:py-0 fixed top-0 left-0 w-full -translate-x-full sm:translate-x-0 z-[9999] `]"
      aria-label="Global">

      <div class="flex-1">
        <a href="/" class="-m-1.5 p-1.5">
          <img src="/assets/img/logo.png" alt="" class="transition-all ease-in duration-150 w-[150px] h-auto scale-100 hover:scale-90">
        </a>
      </div>

      <div class="flex gap-x-7 border border-transparent pt-6 pb-6">

        <router-link :to="{ name: item.name, hash: item.hash }" v-slot="{ isActive }" class="relative"
          v-for="(item, index) in routerList" :key="index">
          <span v-if="isActive"></span>
          <div
            :class="'transition-all ease-in duration-150 flex justify-center items-center py-2 rounded-full group ico '">
            <p
              class="transition-all ease-in duration-150 text-[0.8rem] sm:text-[0.85rem] md:text-[0.75rem] lg:text-[0.85rem] xl:text-[0.9rem] 2xl:text-[0.95rem] leading-6 text-[#1D394D] font-medium hover:font-bold ">
              {{ item.text }}</p>
          </div>
        </router-link>

      </div>

      <div class="flex gap-x-7 pl-7 pt-3 pb-3 items-center">
        <router-link to="/faq" @click="scrollToTop()">
          <button
            class="bg-transparent px-3 py-1 w-[130px] lg:w-[170px] xl:w-[190px] 2xl:w-[200px] h-auto rounded-full flex justify-center items-center text-[#04B2CA] border-[1px] border-[#04B2CA] group">
            <p class="text-[#04B2CA] text-[0.8rem] sm:text-[0.85rem] md:text-[0.75rem] lg:text-[0.85rem] xl:text-[0.9rem] 2xl:text-[0.95rem] font-medium group-hover:pr-2 h-auto flex justify-center items-center pt-0.5">CONTACTO</p>
            <IconEast
              class="transition-all ease-in duration-[0.3s] text-[#04B2CA] !w-0 group-hover:!w-6 group-hover:animate-fadeRight" />
          </button>
        </router-link>
        <router-link to="/login">
          <button
            class="bg-[#04B2CA] px-3 py-1 w-[130px] lg:w-[170px] xl:w-[190px] 2xl:w-[200px] h-auto rounded-full flex justify-center items-center text-white border-[1px] border-[#04B2CA] group">
            <p class="text-white text-[0.8rem] sm:text-[0.85rem] md:text-[0.75rem] lg:text-[0.85rem] xl:text-[0.9rem] 2xl:text-[0.95rem] font-medium group-hover:pr-2 h-auto flex justify-center items-center pt-0.5">INICIAR SESIÓN</p>
            <IconEast
              class="transition-all ease-in duration-[0.3s] text-white !w-0 group-hover:!w-6 group-hover:animate-fadeRight" />
          </button>
        </router-link>
      </div>
    </nav>

    <!-- Mobil -->
    <nav 
    :class="[`${isScrolled ? 'bg-white shadow-[0_0px_7px_3px_rgba(0,0,0,0.1)] rounded-[0px_0px_15px_15px]' : 'bg-[#FFFFFF]'} fixed lg:hidden inset-x-0 left-0 top-0 z-30 mx-auto w-full py-5 md:top-0`]">
      <div class="px-4">
        <div class="flex items-center justify-between">
          <div class="flex md:flex md:items-center md:justify-center ">
            <button class="flex flex-col gap-y-[0.275rem] items-center justify-center text-white"
              @click="toggleMobileMenu">
              <div class="w-6 h-1 bg-[#232323] rounded-full"></div>
              <div class="w-6 h-1 bg-[#232323] rounded-full"></div>
              <div class="w-6 h-1 bg-[#232323] rounded-full"></div>
            </button>
          </div>
          <div class="flex shrink-0">
            <a href="/" class="-m-1.5 p-1.5">
              <img src="/assets/img/logo.png" alt="" class="w-[100px] h-auto">
            </a>
          </div>
          <div class="flex items-center justify-center">
            <a class="inline-flex items-center justify-center rounded-full bg-[#04B2CA] px-2 py-2" href="/login">
              <IconProfile class="text-white" />
            </a>
          </div>
        </div>
      </div>
    </nav>

    <div
      :class="'transition-all ease-in duration-150 navbar-menu relative z-50 ' + (isMobileMenuOpen ? 'opacity-100 ' : 'opacity-0 pointer-events-none')">
      <div class="navbar-backdrop fixed inset-0 bg-[#1D394D] opacity-50"></div>
      <nav
        class="fixed bg-[#ffffff] top-0 left-0 bottom-0 flex flex-col w-70% max-w-sm py-2 px-5 overflow-y-auto rounded-[0px_10px_10px_0px]"
        :class="'fixed bg-[#ffffff] top-0 bottom-0 flex flex-col w-70% max-w-sm py-5 px-5 overflow-y-auto rounded-[0px_10px_10px_0px] ' + (isMobileMenuOpen ? 'left-0 ' : 'left-[-350px]')">

        <div class="flex justify-between items-center mb-8">
          <p class="text-[#1D394D] text-[1.2rem] font-bold pt-1">Menu</p>

          <IconCloseCircle class="text-[#1D394D] !w-8 !h-8" @click="toggleMobileMenu" />
        </div>

        <div class="relative mx-auto text-gray-600 w-full h-auto mt-8">
          <div class="w-full h-full relative">
            <router-link v-for="(item, index) in routerList" :key="index" :to="{ name: item.name, hash: item.hash }" :class="[
              `relative flex items-center justify-start mb-8`
            ]" :data-intro="item.text" @click="toggleMobileMenu">
              <div class="transition-all ease-in duration-[0.2s] flex justify-start items-center w-full rounded-[5px]">
                <p class="transition-all ease-in duration-200 text-[#1D394D] w-44 text-[0.9rem]">
                  {{ item.text }}
                </p>
              </div>
            </router-link>

          </div>
        </div>

        <div class="flex flex-col lg:gap-x-7 pt-3 pb-3 items-center">
          <router-link to="/faq" @click="toggleMobileMenu">
            <button
              class="bg-transparent px-3 py-0.5 w-[200px] h-auto rounded-full flex justify-center items-center text-[#04B2CA] border-2 border-[#04B2CA] group mb-4">
              <p class="text-[#04B2CA] font-medium pr-2 h-auto flex justify-center items-center pt-0.5 text-[0.8rem]">CONTACTO</p>
              <IconEast
                class="transition-all ease-in duration-150 text-[#04B2CA] !w-0 group-hover:!w-6 group-hover:animate-fadeRight" />
            </button>
          </router-link>
          <router-link to="/login" @click="toggleMobileMenu">
            <button
              class="bg-[#04B2CA] px-3 py-0.5 w-[200px] h-auto rounded-full flex justify-center items-center text-white border-2 border-[#04B2CA] group">
              <p class="text-white font-medium pr-2 h-auto flex justify-center items-center pt-0.5 text-[0.8rem]">INICIAR SESIÓN</p>
              <IconEast
                class="transition-all ease-in duration-150 text-white !w-0 group-hover:!w-6 group-hover:animate-fadeRight" />
            </button>
          </router-link>
        </div>

      </nav>
    </div>

    <div :class="[`${isMobileMenuOpen ? 'overflow-hidden' : ''} z-0 w-full h-full bg-white`]">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';
import IconEast from '../components/icons/IconEast.vue';
import IconProfile from '../components/icons/IconProfile.vue';
import IconCloseCircle from '../components/icons/IconCloseCircle.vue';

const isMobileMenuOpen = ref(false)
const isScrolled = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 100;
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const routerList = ref([
  {
    name: 'home',
    hash: '#section3',
    text: '¿QUÉ TE OFRECEMOS?'
  },
  {
    name: 'home',
    hash: '#section2',
    text: 'SOLUCIONES'
  },
  {
    name: 'home',
    hash: '#section5',
    text: 'PRECIOS'
  },
])

</script>
