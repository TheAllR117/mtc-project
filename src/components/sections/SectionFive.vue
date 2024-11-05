<template>
  <div class="h-full w-full !font-muller bg-white overflow-hidden">

    <!-- Section 5 -->
    <section class="font-muller h-max w-full" id="section5">
      <div class="max-md:hidden block relative m-0 h-full w-full py-[50px] md:px-[70px] md:py-[130px]">
        <div
          :class="[`${visibility.section5 ? 'animate-fadeDown' : 'animate-fadeDownOut opacity-0'} w-full h-auto flex flex-col justify-center items-center my-[30px] text-center`]">
          <h2
            class="text-bluecf font-bold font-muller text-[1.2rem] sm:text-[1.8rem] md: lg:text-[2.2rem] xl:text-[2.3rem] 2xl:text-[2.5rem]">
            ¿Cuántos timbres necesitas? <span class="ml-3 bg-[url(/assets/img/emoji-1.png)] bg-cover text-transparent">**</span> </h2>
          <p class="px-8 md:px-16">Contamos con paquetes prepago y planes pospago para que elijas <span
              class="text-[#04B2CA]">el que mejor se adapte a tu negocio:</span></p>
        </div>
        <div
          class="grid grid-cols-1 grid-rows-1 items-center justify-center gap-10 py-4 max-sm:px-[20px] max-md:px-[40px] md:w-full md:grid-cols-2 md:h-[730px] lg:h-[650px] lg:grid-cols-3">
          <div
            :class="[`${visibility.section5 ? 'animate-fadeUp' : 'animate-fadeUpOut opacity-0'} h-[650px] md:h-full w-full items-center justify-center overflow-hidden rounded-[20px] shadow-[0_0px_7px_3px_rgba(0,0,0,0.15)]`]">
            <div class="h-[22%] bg-bluecf p-6 text-center flex flex-col justify-center items-center">
              <h2
                class="text-[1.5rem] text-xl font-bold leading-6 text-white lg:text-[1.6rem] xl:text-[1.7rem] 2xl:text-[1.8rem]">
                Planes pospago:</h2>
              <p
                class="mt-2 text-[0.85rem] leading-tight text-white sm:text-[0.8rem] md:text-[0.85rem] lg:text-[0.83rem] xl:text-[0.83rem] 2xl:text-[1.1rem]">
                <b>Para empresas grandes</b>, adquiere un <br />
                plan y págalos conforme se utilicen
              </p>
            </div>
            <div class="h-[78%] w-full">
              <div v-for="(plan, index) in postpaidPlanAll" :key="index" :class="[
                'flex w-full flex-row items-center justify-between px-5 py-14',
                index % 2 === 0 ? 'bg-[#1D394D0D]' : ''
              ]" :style="{ height: postpaidPlanAll.length > 5 ? '20%' : (100 / postpaidPlanAll.length) + '%' }">
                <div>
                  <p class="text-[0.9rem] lg:text-[0.95rem] xl:text-[1rem] 2xl:text-[1.1rem] text-center">
                    {{ plan.numberStamps }} timbres
                  </p>
                </div>
                <div class="flex flex-col items-center justify-center xl:flex-row">
                  <p class="mr-2 text-[0.9rem] lg:text-[0.95rem] xl:text-[1rem] 2xl:text-[1.1rem]">
                    ${{ plan.priceStampPackage!.toFixed(2) }}
                  </p>

                  <router-link to="/login" class="relative z-10" @click="scrollToTop()">
                    <button
                      class="px-3 py-1 w-[110px] lg:w-[110px] xl:w-[110px] 2xl:w-[110px] h-auto rounded-full flex justify-center items-center text-white border-[1px] border-bluecf bg-bluecf group">
                      <p
                        class="text-white text-[0.8rem] sm:text-[0.85rem] md:text-[0.75rem] lg:text-[0.85rem] xl:text-[0.9rem] 2xl:text-[0.95rem] font-medium group-hover:pr-2 h-auto flex justify-center items-center pt-0.5">
                        Adquirir</p>
                      <IconEast
                        class="transition-all ease-in duration-[0.1s] text-white !w-0 group-hover:!w-4 group-hover:animate-fadeArrowRight" />
                    </button>
                  </router-link>
                </div>
              </div>

            </div>
          </div>
          <div
            :class="[`${visibility.section5 ? 'animate-fadeUp' : 'animate-fadeUpOut opacity-0'} h-[650px] md:h-full w-full items-center justify-center overflow-hidden rounded-[20px] shadow-[0_0px_7px_3px_rgba(0,0,0,0.15)]`]">
            <div class="h-[22%] bg-bluelightcf px-2 py-6 text-center flex flex-col justify-center items-center">
              <h2
                class="text-[1.5rem] text-xl font-bold leading-6 text-white lg:text-[1.6rem] xl:text-[1.7rem] 2xl:text-[1.8rem]">
                Planes prepago:</h2>
              <p
                class="mt-2 text-[0.85rem] leading-tight text-white sm:text-[0.8rem] md:text-[0.85rem] lg:text-[0.83rem] xl:text-[0.83rem] 2xl:text-[1.1rem]">
                <b>Para pequeñas empresas</b>, adquiere el
                <br />
                paquete de timbres que vayas a utilizar
              </p>
            </div>
            <div class="h-[78%] w-full overflow-y-auto">

              <div v-for="(plan, index) in prepaidPackageAll" :key="index" :class="[
                'flex w-full flex-row items-center justify-between px-5',
                index % 2 == 0 ? 'bg-[#1D394D0D]' : ''
              ]" :style="{ height: prepaidPackageAll.length > 5 ? '20%' : (100 / prepaidPackageAll.length) + '%' }">
                <div>
                  <p class="text-[0.9rem] lg:text-[0.95rem] xl:text-[1rem] 2xl:text-[1.1rem] text-center">{{
                    plan.numberStamps }}
                    timbres</p>
                </div>
                <div class="flex flex-col items-center xl:flex-row">
                  <p class="mr-2 text-[0.9rem] lg:text-[0.95rem] xl:text-[1rem] 2xl:text-[1.1rem]">${{
                    plan.priceStampPackage!.toFixed(2) }}</p>

                  <router-link to="/login" class="relative z-10" @click="scrollToTop()">
                    <button
                      class="px-3 py-1 w-[110px] lg:w-[110px] xl:w-[110px] 2xl:w-[110px] h-auto rounded-full flex justify-center items-center text-white border-[1px] border-[#04B2CA] bg-bluelightcf group">
                      <p
                        class="text-white text-[0.8rem] sm:text-[0.85rem] md:text-[0.75rem] lg:text-[0.85rem] xl:text-[0.9rem] 2xl:text-[0.95rem] font-medium group-hover:pr-2 h-auto flex justify-center items-center pt-0.5">
                        Adquirir</p>
                      <IconEast
                        class="transition-all ease-in duration-[0.1s] text-white !w-0 group-hover:!w-4 group-hover:animate-fadeArrowRight" />
                    </button>
                  </router-link>
                </div>
              </div>

            </div>
          </div>
          <div
            :class="[`${visibility.section5 ? 'animate-fadeUp' : 'animate-fadeUpOut opacity-0'} group/item flex h-full w-full items-center justify-center overflow-hidden max-md:col-auto md:col-span-2 lg:col-auto`]">
            <div
              class="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[20px] bg-bluecf p-6 text-center lg:w-[85%]">
              <div
                class="transition-all ease-in duration-[0.2s] absolute left-0 top-0 z-[4] h-full w-full bg-[url('/assets/img/stamps-bg.jpeg')] bg-cover bg-center group-hover/item:scale-110">
              </div>
              <div class="absolute left-0 top-0 z-[5] h-full w-full bg-gradient-to-r from-[#1D394DF2] to-[#2D5A7AF2]">
              </div>
              <div class="flex w-full flex-col items-center justify-center">
                <h2
                  class="z-10 text-[1.5rem] md:text-[1.6rem] lg:text-[1.2em] xl:text-[1.7rem] 2xl:text-[2.1rem] text-xl font-bold leading-[2.5rem] text-white">
                  ¿Necesitas un plan <br />
                  a tu medida?
                </h2>
                <router-link to="/faq" class="relative z-10 mt-3" @click="scrollToTop()">
                  <button
                    class="w-[130px] lg:w-[170px] xl:w-[170px] 2xl:w-[180px] rounded-full bg-bluelightcf px-7 py-1.5 text-white group flex justify-center ">
                    <p
                      class="text-white text-[0.8rem] sm:text-[0.85rem] md:text-[0.75rem] lg:text-[0.85rem] xl:text-[0.9rem] 2xl:text-[0.95rem] font-medium group-hover:pr-2 h-auto flex justify-center items-center pt-0.5">
                      ¡CONTACTANOS!</p>
                    <IconEast
                      class="transition-all ease-in duration-[0.1s] text-white !w-0 group-hover:!w-4 group-hover:animate-fadeArrowRight" />
                  </button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="max-md:block hidden relative m-0 h-full w-full py-[50px] md:px-[70px] md:py-[130px]">
        <div
          :class="[`${visibility.section5 ? 'animate-fadeDown' : 'animate-fadeDownOut opacity-0'} w-full h-auto flex flex-col justify-center items-center my-[30px] text-center`]">
          <h2
            class="text-bluecf font-bold font-muller text-[1.2rem] sm:text-[1.8rem] md: lg:text-[2.2rem] xl:text-[2.3rem] 2xl:text-[2.5rem]">
            ¿Cuántos timbres necesitas? <span class="ml-3 bg-[url(/assets/img/emoji-1.png)] bg-cover text-transparent">**</span></h2>
          <p class="px-8 md:px-16">Contamos con paquetes prepago y planes pospago para que elijas <span
              class="text-[#04B2CA]">el que mejor se adapte a tu negocio:</span></p>
        </div>
        <div
          class="grid grid-cols-1 grid-rows-1 items-center justify-center gap-10 py-4 md:w-full md:grid-cols-2 md:h-[730px] lg:h-[650px] lg:grid-cols-3">

          <swiper :css-mode="true" :mousewheel="true" :slides-per-view="1.35" :centeredSlides="true" :space-between="10"
            :speed="500" :grabCursor="true" :pagination="{
              clickable: true,
            }" :navigation="{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }" :modules="modules" :breakpoints="{
              0: { slidesPerView: 1.17, spaceBetween: 10 },
              500: { slidesPerView: 1.17, spaceBetween: 10 },
              1024: { slidesPerView: 1.17, spaceBetween: 10 },
              1300: { slidesPerView: 1.17, spaceBetween: 10 },
              1500: { slidesPerView: 1.17, spaceBetween: 10 },
            }" class="mySwiper h-[650px] md:h-full w-full items-center justify-center overflow-hidden rounded-[20px]">

            <swiper-slide
              :class="[`${visibility.section5 ? 'animate-fadeUp' : 'animate-fadeUpOut opacity-0'} h-[650px] md:h-full w-full items-center justify-center overflow-hidden rounded-[20px] shadow-[0_0px_7px_3px_rgba(0,0,0,0.15)]`]">

              <div class="h-[22%] bg-bluecf p-6 text-center flex flex-col justify-center items-center">
                <h2
                  class="text-[1.5rem] text-xl font-bold leading-6 text-white lg:text-[1.6rem] xl:text-[1.7rem] 2xl:text-[1.8rem]">
                  Planes pospago:</h2>
                <p
                  class="mt-2 text-[0.85rem] leading-tight text-white sm:text-[0.8rem] md:text-[0.85rem] lg:text-[0.83rem] xl:text-[0.83rem] 2xl:text-[1.1rem]">
                  <b>Para empresas grandes</b>, adquiere un <br />
                  plan y págalos conforme se utilicen
                </p>
              </div>
              <div class="h-[78%] w-full">
                <div v-for="(plan, index) in postpaidPlanAll" :key="index" :class="[
                  'flex w-full flex-row items-center justify-between px-5 py-14',
                  index % 2 === 0 ? 'bg-[#1D394D0D]' : ''
                ]" :style="{ height: postpaidPlanAll.length > 5 ? '20%' : (100 / postpaidPlanAll.length) + '%' }">
                  <div>
                    <p class="text-[0.9rem] lg:text-[0.95rem] xl:text-[1rem] 2xl:text-[1.1rem] text-center">
                      {{ plan.numberStamps }} timbres
                    </p>
                  </div>
                  <div class="flex flex-col items-center justify-center xl:flex-row">
                    <p class="mr-2 text-[0.9rem] lg:text-[0.95rem] xl:text-[1rem] 2xl:text-[1.1rem]">
                      ${{ plan.priceStampPackage!.toFixed(2) }}
                    </p>

                    <router-link to="/login" class="relative z-10" @click="scrollToTop()">
                      <button
                        class="px-3 py-1 w-[110px] lg:w-[110px] xl:w-[110px] 2xl:w-[110px] h-auto rounded-full flex justify-center items-center text-white border-[1px] border-bluecf bg-bluecf group">
                        <p
                          class="text-white text-[0.8rem] sm:text-[0.85rem] md:text-[0.75rem] lg:text-[0.85rem] xl:text-[0.9rem] 2xl:text-[0.95rem] font-medium group-hover:pr-2 h-auto flex justify-center items-center pt-0.5">
                          Adquirir</p>
                        <IconEast
                          class="transition-all ease-in duration-[0.1s] text-white !w-0 group-hover:!w-4 group-hover:animate-fadeArrowRight" />
                      </button>
                    </router-link>
                  </div>
                </div>

              </div>

            </swiper-slide>

            <swiper-slide
              :class="[`${visibility.section5 ? 'animate-fadeUp' : 'animate-fadeUpOut opacity-0'} h-[650px] md:h-full w-full items-center justify-center overflow-hidden rounded-[20px] shadow-[0_0px_7px_3px_rgba(0,0,0,0.15)]`]">
              <div class="h-[22%] bg-bluelightcf px-2 py-6 text-center flex flex-col justify-center items-center">
                <h2
                  class="text-[1.5rem] text-xl font-bold leading-6 text-white lg:text-[1.6rem] xl:text-[1.7rem] 2xl:text-[1.8rem]">
                  Planes prepago:</h2>
                <p
                  class="mt-2 text-[0.85rem] leading-tight text-white sm:text-[0.8rem] md:text-[0.85rem] lg:text-[0.83rem] xl:text-[0.83rem] 2xl:text-[1.1rem]">
                  <b>Para pequeñas empresas</b>, adquiere el
                  <br />
                  paquete de timbres que vayas a utilizar
                </p>
              </div>
              <div class="h-[78%] w-full overflow-y-auto">

                <div v-for="(plan, index) in prepaidPackageAll" :key="index" :class="[
                  'flex w-full flex-row items-center justify-between px-5',
                  index % 2 == 0 ? 'bg-[#1D394D0D]' : ''
                ]" :style="{ height: prepaidPackageAll.length > 5 ? '20%' : (100 / prepaidPackageAll.length) + '%' }">
                  <div>
                    <p class="text-[0.9rem] lg:text-[0.95rem] xl:text-[1rem] 2xl:text-[1.1rem] text-center">{{
                      plan.numberStamps }}
                      timbres</p>
                  </div>
                  <div class="flex flex-col items-center lg:flex-row">
                    <p class="mr-2 text-[0.9rem] lg:text-[0.95rem] xl:text-[1rem] 2xl:text-[1.1rem]">${{
                      plan.priceStampPackage!.toFixed(2) }}</p>

                    <router-link to="/login" class="relative z-10" @click="scrollToTop()">
                      <button
                        class="px-3 py-1 w-[110px] lg:w-[110px] xl:w-[110px] 2xl:w-[110px] h-auto rounded-full flex justify-center items-center text-white border-[1px] border-[#04B2CA] bg-bluelightcf group">
                        <p
                          class="text-white text-[0.8rem] sm:text-[0.85rem] md:text-[0.75rem] lg:text-[0.85rem] xl:text-[0.9rem] 2xl:text-[0.95rem] font-medium group-hover:pr-2 h-auto flex justify-center items-center pt-0.5">
                          Adquirir</p>
                        <IconEast
                          class="transition-all ease-in duration-[0.1s] text-white !w-0 group-hover:!w-4 group-hover:animate-fadeArrowRight" />
                      </button>
                    </router-link>
                  </div>
                </div>

              </div>

            </swiper-slide>

            <div class="slider__controls py-[20px] flex justify-center items-center">
              <div class="slider__pagination"></div>
            </div>

          </swiper>

          <div
            :class="[`${visibility.section5 ? 'animate-fadeUp' : 'animate-fadeUpOut opacity-0'} group/item flex h-full w-full items-center justify-center overflow-hidden max-md:col-auto md:col-span-2 lg:col-auto max-sm:px-[20px] max-md:px-[40px]`]">
            <div
              class="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[20px] bg-bluecf p-6 text-center lg:w-[85%]">
              <div
                class="transition-all ease-in duration-[0.2s] absolute left-0 top-0 z-[4] h-full w-full bg-[url('/assets/img/stamps-bg.jpeg')] bg-cover bg-center group-hover/item:scale-110">
              </div>
              <div class="absolute left-0 top-0 z-[5] h-full w-full bg-gradient-to-r from-[#1D394DF2] to-[#2D5A7AF2]">
              </div>
              <div class="flex w-full flex-col items-center justify-center">
                <h2
                  class="z-10 text-[1.5rem] md:text-[1.6rem] lg:text-[1.2em] xl:text-[1.7rem] 2xl:text-[2.1rem] text-xl font-bold leading-[2.5rem] text-white">
                  ¿Necesitas un plan <br />
                  a tu medida?
                </h2>
                <router-link to="/faq" class="relative z-10 mt-3" @click="scrollToTop()">
                  <button
                    class="w-[130px] lg:w-[170px] xl:w-[170px] 2xl:w-[180px] rounded-full bg-bluelightcf px-7 py-1.5 text-white group flex justify-center ">
                    <p
                      class="text-white text-[0.8rem] sm:text-[0.85rem] md:text-[0.75rem] lg:text-[0.85rem] xl:text-[0.9rem] 2xl:text-[0.95rem] font-medium group-hover:pr-2 h-auto flex justify-center items-center pt-0.5">
                      ¡CONTACTANOS!</p>
                    <IconEast
                      class="transition-all ease-in duration-[0.1s] text-white !w-0 group-hover:!w-4 group-hover:animate-fadeArrowRight" />
                  </button>
                </router-link>
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
import { PrepaidPackage } from '../../interfaces/prepaid/prepaid_packages_all_response';
import { PostpaidPlan } from '../../interfaces/postpaid/postpaid_packages_all_response';
// Vue
import { ref, onMounted, onUnmounted, reactive } from 'vue';
import IconEast from '../icons/IconEast.vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-coverflow';
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

const modules = [Pagination, Navigation, EffectCoverflow];

const prepaidPackageAll = ref<PrepaidPackage[]>([]);
const postpaidPlanAll = ref<PostpaidPlan[]>([]);

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
  threshold: 0,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const sectionId = entry.target.id as keyof typeof visibility;
    visibility[sectionId] = entry.isIntersecting;
  });
}, observerOptions);

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

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

async function loadData() {
  const postpaidData = await fetchData(`query AllPostpaidPlans { postpaidPlans { numberStamps priceStampPackage } }`);
  if (postpaidData?.data?.postpaidPlans) postpaidPlanAll.value = postpaidData.data.postpaidPlans;

  const prepaidData = await fetchData(`query AllPrepaidPackages { prepaidPackages { numberStamps priceStampPackage } }`);
  if (prepaidData?.data?.prepaidPackages) prepaidPackageAll.value = prepaidData.data.prepaidPackages;
}

onMounted(() => {
  const sections = ['#section1', '#section2', '#section3', '#section4', '#section5', '#section6', '#section7'].map((id) => document.querySelector(id));
  sections.forEach((section) => section && observer.observe(section));

  loadData();

  onUnmounted(() => {
    observer.disconnect();
  });
});
</script>


<style></style>