<template>
  <div class="h-full w-full !font-muller bg-white overflow-hidden">

    <section class="h-max font-muller bg-white" id="section1">
      <div
        class="w-full h-full md:pb-[100px] px-[15px] mx-auto sm:max-w-[740px] md:max-w-[940px] md:text-left lg:max-w-[1260px] xl:max-w-[1440px] 2xl:max-w-[1900px]">

        <div
          class="w-full h-auto pt-[0px] pb-[50px] md:pb-[100px] flex flex-col relative bg-gradient-to-tl from-[#1D394D] to-[#2D5A7A] rounded-[20px] overflow-hidden max-md:px-5">

          <div
            :class="[`${visibility.section1 ? 'opacity-10 ' : 'opacity-0 '} transition-all ease-in duration-[0.5s] absolute top-0 left-0 z-0 w-full h-full`]">
            <img src="/assets/img/texture.png" alt=""
              :class="[`${visibility.section1 ? 'animate-fadeRight ' : 'animate-fadeRightOut '} transition-all ease-in duration-[0.5s] w-full`]">
          </div>

          <div class="w-full h-auto flex justify-center items-center mt-[40px] md:mt-[60px] md:mb-[20px] relative z-10">
            <h2
              class="text-white font-bold font-muller text-[1.3rem] sm:text-[1.7rem] md: lg:text-[1.8rem] xl:text-[1.9rem] 2xl:text-[2.3rem] md:mb-10 max-md:text-center">
              ¡Facilitarte la vida es nuestra misión! 😎
            </h2>
          </div>

          <div class="flex flex-col max-md:flex-col-reverse items-center justify-between md:flex-row relative h-auto">

            <!-- Left Side: Company Info -->
            <div class="mb-8 w-full h-auto md:mb-0 md:w-[65%]">
              <div
                class="bg-stripes-fuchsia grid grid-cols-3 gap-4 rounded-lg text-center font-mono text-sm font-bold leading-6 text-white relative">

                <div v-for="(item, index) in missionsAll" :key="index" @click="setActive(index)"
                  :class="['transition-all ease-in duration-[0.5s] w-full h-full flex justify-center items-center place-items-center content-center cursor-pointer hover:scale-100', activeIndex == index ? '' : 'scale-90']">

                  <div
                    :class="['w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] lg:w-[200px] lg:h-[200px] xl:w-[260px] xl:h-[260px] 2xl:w-[330px] 2xl:h-[330px] transition-all ease-in duration-[0.5s] md:py-6 flex bg-[#1D394D] rounded-full relative z-10 justify-center items-center', { 'opacity-60': activeIndex !== index, 'opacity-100': activeIndex === index }]">
                    <img :src="item.img?.url" class="w-[50%] h-auto" />
                  </div>
                </div>

                <div
                  class="absolute bottom-[-35px] left-0 w-full flex flex-row justify-center gap-x-3 md:gap-x-10 items-center bg-transparent">
                  <div v-for="(item, index) in missionsAll" :key="'dot-' + index" @click="setActive(index)"
                    :class="['transition-all ease-in duration-[0.5s] w-[50px] md:w-[100px] h-2 rounded-full cursor-pointer', activeIndex == index ? 'bg-[#04B2CA]' : 'bg-[#D9D9D9]']">
                  </div>
                </div>

              </div>

            </div>

            <!-- Right xSide: Details and Buttons -->
            <div v-if="missionsAll && missionsAll[activeIndex]"
              class="md:w-[35%] h-auto md:px-16 max-md:mb-7 flex justify-center items-center">
              <div class="flex flex-col items-center justify-center text-center w-auto h-[150px]">
                <transition name="fade" mode="out-in">
                  <h2 :key="missionsAll[activeIndex].title" :class="[
                    'text-white text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5em] font-bold border-b-[#04B2CA] border-b-2 mb-4 pb-2'
                  ]">
                    {{ missionsAll[activeIndex].title }}
                  </h2>
                </transition>

                <!-- <hr class="w-full h-0.5 mx-auto my-4 bg-[#04B2CA] border-0 rounded md:my-2"> -->

                <transition name="fade" mode="out-in">
                  <p :key="missionsAll[activeIndex].text?.markdown"
                    class="text-white text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] xl:text-[1.05rem] 2xl:text-[1.1rem] font-light"
                    v-html="missionsAll[activeIndex].text?.markdown"></p>
                </transition>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  </div>
</template>


<script lang="ts" setup>
// Interfaces
import { Mission } from '../../interfaces/missions/all_missions_response';
// Vue
import { ref, onMounted, onUnmounted, reactive } from 'vue';

const missionsAll = ref<Mission[]>([]);
const showScrollTopButton = ref<boolean>(false);
const activeIndex = ref(0);

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

onMounted(() => {
  const sections = ['#section1', '#section2', '#section3', '#section4', '#section5', '#section6', '#section7'].map((id) => document.querySelector(id));
  sections.forEach((section) => section && observer.observe(section));

  loadData();

  const interval = setInterval(() => activeIndex.value = (activeIndex.value + 1) % missionsAll.value.length, 5000);

  window.addEventListener('scroll', handleScroll);

  onUnmounted(() => {
    observer.disconnect();
    clearInterval(interval);
    window.removeEventListener('scroll', handleScroll);
  });
});
</script>


<style>
.swiper-slide-opacity {
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
}

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
</style>