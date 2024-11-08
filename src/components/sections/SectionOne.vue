<template>
  <div class="h-full w-full !font-muller bg-white overflow-hidden pb-16 md:pb-16 lg:pb-20 xl:pb-24 2xl:pb-36">

    <section class="h-max font-muller bg-white max-md:px-[20px]" id="section1">
      <!-- Desktop -->
      <div
        class="max-md:hidden block w-full h-full px-[15px] mx-auto sm:max-w-[740px] md:max-w-[940px] md:text-left lg:max-w-[1260px] xl:max-w-[1440px] 2xl:max-w-[1900px]">

        <div
          class="flex w-full h-auto pt-[0px] pb-[50px] md:pb-[100px] flex-col relative bg-gradient-to-tl from-bluecf to-bluemdcf rounded-[20px] overflow-hidden max-md:px-5 lg:h-[500po] xl:h-[600px] 2xl:h-[700px] xl:justify-center ">

          <div
            :class="[`${visibility.section1 ? 'opacity-10 ' : 'opacity-0 '} transition-all ease-in duration-[0.5s] absolute top-0 left-0 z-0 w-full h-full`]">
            <img src="/assets/img/texture.png" alt=""
              :class="[`${visibility.section1 ? 'animate-fadeRight ' : 'animate-fadeRightOut '} transition-all ease-in duration-[0.5s] w-full`]">

            <!-- <img :class="[`${visibility.section1 ? 'animate-fadeRight ' : 'animate-fadeRightOut '} transition-all ease-in duration-[0.5s] w-full`]" v-lazy="{
              src: '/assets/img/texture.png',
              loading: '/assets/img/placeholder.webp',
              error: '/assets/img/placeholder.webp',
              delay: 250
            }" loading="lazy" alt="" /> -->

          </div>

          <div class="w-full h-auto flex justify-center items-center mt-[40px] md:mt-[60px] md:mb-[20px] relative z-10">
            <h2
              class="text-white font-bold font-muller text-[1.3rem] sm:text-[1.7rem] md: lg:text-[1.8rem] xl:text-[1.9rem] 2xl:text-[2.3rem] md:mb-10 max-md:text-center ">
              ¡Facilitarte la vida es nuestra misión! <span
                class="bg-[url(/assets/img/emoji-3.webp)] bg-cover text-transparent">**</span>
            </h2>
          </div>

          <div class="flex flex-col max-md:flex-col-reverse items-center justify-between md:flex-row relative h-auto">

            <!-- Left Side: Company Info -->
            <div class="mb-8 w-full h-auto md:mb-0 md:w-[60%] lg:w-[65%]">
              <div
                class="bg-stripes-fuchsia grid grid-cols-3 gap-4 rounded-lg text-center font-mono text-sm font-bold leading-6 text-white relative">

                <div v-for="(item, index) in missionsAll.slice(0, 3)" :key="index" @click="setActive(index)"
                  :class="['transition-all ease-in duration-[0.5s] w-full h-full flex justify-center items-center place-items-center content-center cursor-pointer hover:scale-100', activeIndex == index ? '' : 'scale-90']">

                  <div
                    :class="['w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] lg:w-[200px] lg:h-[200px] xl:w-[260px] xl:h-[260px] 2xl:w-[330px] 2xl:h-[330px] transition-all ease-in duration-[0.5s] md:py-6 flex bg-bluecf rounded-full relative z-10 justify-center items-center', { 'opacity-60': activeIndex !== index, 'opacity-100': activeIndex === index }]">
                    <!-- <img :src="item.img?.url" class="w-[50%] h-auto" /> -->

                    <img class="w-[50%] h-auto" v-lazy="{
                      src: item.img?.url,
                      loading: '/assets/img/placeholder.webp',
                      error: '/assets/img/placeholder.webp',
                      delay: 250
                    }" loading="lazy" alt="" />
                  </div>
                </div>

                <div
                  class="absolute bottom-[-55px] left-0 w-full flex flex-row justify-center gap-x-3 md:gap-x-5 items-center bg-transparent">
                  <div v-for="(item, index) in missionsAll.slice(0, 3)" :key="'dot-' + index" @click="setActive(index)"
                    :class="['transition-all ease-in duration-[0.5s] w-[40px] md:w-[50px] h-1 md:h-1 rounded-full cursor-pointer', activeIndex == index ? 'bg-bluelightcf' : 'bg-[#D9D9D9]']">
                  </div>
                </div>

              </div>

            </div>

            <!-- Right xSide: Details and Buttons -->
            <div v-if="missionsAll.slice(0, 3) && missionsAll.slice(0, 3)[activeIndex]"
              class="md:w-[40%] lg:w-[35%] h-auto md:px-16 max-md:mb-7 flex justify-center items-center">
              <div class="flex flex-col items-center justify-center text-center w-auto h-[150px]">
                <transition name="fade" mode="out-in">
                  <h2 :key="missionsAll.slice(0, 3)[activeIndex].title" :class="[
                    'text-white text-[1.1rem] md:text-[0.9rem] lg:text-[0.9rem] xl:text-[1.4rem] 2xl:text-[1.5em] font-bold border-b-[#04B2CA] border-b-2 mb-4 pb-2'
                  ]">
                    {{ missionsAll.slice(0, 3)[activeIndex].title }}
                  </h2>
                </transition>

                <!-- <hr class="w-full h-0.5 mx-auto my-4 bg-bluelightcf border-0 rounded md:my-2"> -->

                <transition name="fade" mode="out-in">
                  <p :key="missionsAll.slice(0, 3)[activeIndex].text?.markdown"
                    class="text-white text-[0.8rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1.05rem] 2xl:text-[1.1rem] font-light"
                    v-html="missionsAll.slice(0, 3)[activeIndex].text?.markdown"></p>
                </transition>
              </div>
            </div>

          </div>

        </div>

      </div>

      <!-- Mobil -->
      <div
        class="max-md:flex flex-col hidden w-full h-full max-md:py-[20px] relative mx-auto sm:max-w-[740px] md:max-w-[940px] md:text-left lg:max-w-[1260px] xl:max-w-[1440px] 2xl:max-w-[1900px] bg-gradient-to-tl from-bluecf to-bluemdcf rounded-[20px] overflow-hidden max-md:px-5 lg:h-[500po] xl:h-[600px] 2xl:h-[700px] xl:justify-center">

        <div
          :class="[`${visibility.section1 ? 'opacity-10 ' : 'opacity-0 '} transition-all ease-in duration-[0.5s] absolute top-0 left-0 z-0 w-full h-full`]">
          <img src="/assets/img/texture.png" alt=""
            :class="[`${visibility.section1 ? 'animate-fadeRight ' : 'animate-fadeRightOut '} transition-all ease-in duration-[0.5s] w-full h-full`]">
        </div>

        <div class="w-full h-auto flex justify-center items-center mt-[10px] mb-[10px] relative z-10">
          <h2
            class="text-white font-bold font-muller text-[1.2rem] sm:text-[1.7rem] md: lg:text-[1.8rem] xl:text-[1.9rem] 2xl:text-[2.3rem] md:mb-10 max-md:text-center ">
            ¡Facilitarte la vida es nuestra misión! <span
              class="bg-[url(/assets/img/emoji-3.webp)] bg-cover text-transparent">**</span>
          </h2>
        </div>

        <!-- Sección de Texto Mobil-->
        <div
          class="max-md:flex hidden w-full flex-col justify-center items-start gap-y-10  h-auto pt-[0px] pb-[20px] relative ">
          <swiper :css-mode="true" :mousewheel="true" :slides-per-view="3" :centeredSlides="true" :space-between="56"
            :speed="500" :grabCursor="true" :pagination="{
              clickable: true,
            }" :navigation="{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }" :modules="modules" :breakpoints="{
              0: { slidesPerView: 1, spaceBetween: 56 },
              500: { slidesPerView: 1, spaceBetween: 56 },
              1024: { slidesPerView: 1, spaceBetween: 56 },
              1300: { slidesPerView: 1, spaceBetween: 56 },
              1500: { slidesPerView: 1, spaceBetween: 56 },
            }" class="mySwiper !h-max !w-full flex justify-center" @slideChange="onSlideChange">

            <swiper-slide v-for="(item, index) in missionsAll.slice(0, 3)" :key="index"
              :class="[`${visibility.section1 ? 'animate-fadeUp' : 'animate-fadeUpOut opacity-0'} !w-full !h-full !min-h-full !max-h-full flex flex-col justify-center items-center gap-y-10 pcenter`]">
              <h4
                class="text-white text-[0.95rem] md:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem] font-bold border-b-2 border-bluelightcf w-max px-2 text-center pb-3">
                {{ item.title }}</h4>
              <p class="text-white text-[0.9rem] md:text-[0.95rem] xl:text-[0.95rem] 2xl:text-[1.1rem] text-center pt-3"
                v-html="item.text?.markdown"></p>
            </swiper-slide>

            <div class="slider__controls py-[20px] flex justify-center items-center">
              <div class="slider__pagination"></div>
            </div>

          </swiper>
        </div>

        <!-- Sección de Imagen Mobil-->
        <div class="max-md:flex hidden w-full h-full justify-center items-center" v-if="missionsAll[activeIndexMb]">

          <transition name="fade" mode="out-in">
            <img v-if="activeIndexMb == activeIndexMb" :key="activeIndexMb"
              :class="[`rounded-full p-8 bg-bluecf w-[170px] sm:w-[170px] md:w-[375px] lg:w-[400px] xl:w-[425px] 2xl:w-[500px] h-[170px] sm:h-[170px] md:h-[375px] lg:h-[400px] xl:h-[425px] 2xl:h-[500px]`]"
              v-lazy="{
                src: missionsAll[activeIndexMb].img?.url,
                loading: '/assets/img/placeholder.webp',
                error: '/assets/img/placeholder.webp',
                delay: 50
              }" loading="lazy" :alt="missionsAll[activeIndexMb].title" />
          </transition>

          <!-- <transition name="fade" mode="out-in">
            <h2 :key="missionsAll.slice(0, 3)[activeIndex].title" :class="[
              'text-white text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5em] font-bold border-b-[#04B2CA] border-b-2 mb-4 pb-2'
            ]">
              {{ missionsAll.slice(0, 3)[activeIndex].title }}
            </h2>
          </transition> -->
        </div>

      </div>


    </section>
  </div>
</template>


<script lang="ts" setup>
// Interfaces
import { Mission } from '../../interfaces/missions/all_missions_response';
// Vue
import { ref, onMounted, onUnmounted, reactive, onBeforeMount } from 'vue';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-coverflow';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

const modules = [Pagination, Navigation, EffectCoverflow, Autoplay];
const missionsAll = ref<Mission[]>([]);
const showScrollTopButton = ref<boolean>(false);
const activeIndex = ref(0);
const activeIndexMb = ref(0);

const visibility = reactive({
  section1: false,
  section2: false,
  section3: false,
  section4: false,
  section5: false,
  section6: false,
  section7: false,
});

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const sectionId = entry.target.id as keyof typeof visibility;
    visibility[sectionId] = entry.isIntersecting;
  });
}, observerOptions);

function setActive(index: number) {
  if (index >= 0 && index < missionsAll.value.length) {
    activeIndex.value = index;
  } else {
    console.warn(`Índice fuera de rango: ${index}`);
  }
}

function handleScroll() {
  showScrollTopButton.value = window.scrollY >= 500;
}

function onSlideChange(swiper: SwiperType) {
  activeIndexMb.value = swiper.activeIndex;
}

async function fetchData(query: string) {
  try {
    const response = await fetch(
      'https://api-us-west-2.hygraph.com/v2/cm2xfy7jh052307wawy5a538s/master',
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ query }),
      }
    );
    return await response.json();
  } catch (error) {
    console.error('Error en la llamada a la API:', error);
    return null;
  }
}

async function loadData() {
  const missionsData = await fetchData(`query AllMissions { missions { title text { markdown } img { url } } }`);
  if (missionsData?.data?.missions) missionsAll.value = missionsData.data.missions;

}

onBeforeMount(() => {
  loadData();
})

onMounted(() => {
  const sections = ['#section1', '#section2', '#section3', '#section4', '#section5', '#section6', '#section7'].map((id) => document.querySelector(id));
  sections.forEach((section) => section && observer.observe(section));

  const interval = setInterval(() => activeIndex.value = (activeIndex.value + 1) % missionsAll.value.slice(0, 3).length, 5000);

  window.addEventListener('scroll', handleScroll);

  onUnmounted(() => {
    observer.disconnect();
    clearInterval(interval);
    window.removeEventListener('scroll', handleScroll);
  });

});

</script>


<style>
/* .swiper-slide-opacity {
  opacity: 0.5;
  transition: opacity 0.3s ease;
}

.swiper-slide-active {
  opacity: 1 !important;
}

.swiper-pagination-bullet {
  background: #c2c2c2;
  width: 130px;
  height: 6px;
  border-radius: 3px;
  opacity: 1;
  margin: 0 4px;
}

.swiper-pagination-bullet-active {
  background: #00c1de;
} */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active en versiones antiguas de Vue */
  {
  opacity: 0;
}

.pcenter{
  place-items: center;
  text-align: -webkit-center;
}
</style>