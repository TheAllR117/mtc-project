<template>
  <div class="h-full w-full !font-muller bg-white overflow-hidden">

    <!-- Section 5 -->
    <section class="font-muller h-max w-full" id="section5">
      <div class="relative m-0 h-full w-full py-[50px] md:px-[70px] md:py-[130px]">
        <div
          :class="[`${visibility.section5 ? 'animate-fadeDown' : 'animate-fadeDownOut opacity-0'} w-full h-auto flex flex-col justify-center items-center my-[30px] text-center`]">
          <h2
            class="text-[#1D394D] font-bold font-muller text-[1.8rem] sm:text-[2rem] md: lg:text-[2.2rem] xl:text-[2.3rem] 2xl:text-[2.5rem]">
            ¿Cuántos timbres necesitas? 😉</h2>
          <p class="px-10 md:px-16">Contamos con paquetes prepago y planes pospago para que elijas <span
              class="text-[#04B2CA]">el que mejor se adapte a tu negocio:</span></p>
        </div>
        <div
          class="grid grid-cols-1 grid-rows-1 items-center justify-center gap-10 py-4 max-sm:px-[20px] max-md:px-[40px] md:w-full md:grid-cols-2 md:h-[730px] lg:h-[650px] lg:grid-cols-3">
          <div
            :class="[`${visibility.section5 ? 'animate-fadeUp' : 'animate-fadeUpOut opacity-0'} h-[650px] md:h-full w-full items-center justify-center overflow-hidden rounded-[20px]`]">
            <div class="h-[22%] bg-[#1D394D] p-6 text-center flex flex-col justify-center items-center">
              <h2
                class="text-[1.5rem] text-xl font-bold leading-6 text-white lg:text-[1.6rem] xl:text-[1.7rem] 2xl:text-[1.8rem]">
                Planes pospago:</h2>
              <p
                class="mt-2 text-[0.95rem] text-base leading-tight text-white lg:text-[1rem] xl:text-[1rem] 2xl:text-[1.1rem]">
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
                  <p class="text-[0.9rem] lg:text-[0.95rem] xl:text-[1rem] 2xl:text-[1.1rem]">
                    {{ plan.numberStamps }} timbres
                  </p>
                </div>
                <div class="flex flex-col items-center justify-center lg:flex-row">
                  <p class="mr-2 text-[0.9rem] lg:text-[0.95rem] xl:text-[1rem] 2xl:text-[1.1rem]">
                    ${{ plan.priceStampPackage!.toFixed(2) }}
                  </p>
                  <button
                    class="px-3 py-1 w-[130px] lg:w-[170px] xl:w-[190px] 2xl:w-[130px] h-auto rounded-full flex justify-center items-center text-white border-[1px] border-[#1D394D] bg-[#1D394D] group">
                    <p
                      class="text-white text-[0.8rem] sm:text-[0.85rem] md:text-[0.75rem] lg:text-[0.85rem] xl:text-[0.9rem] 2xl:text-[0.95rem] font-medium group-hover:pr-2 h-auto flex justify-center items-center pt-0.5">
                      Adquirir</p>
                    <IconEast
                      class="transition-all ease-in duration-[0.3s] text-white !w-0 group-hover:!w-4 group-hover:animate-fadeRight" />
                  </button>
                </div>
              </div>

            </div>
          </div>
          <div
            :class="[`${visibility.section5 ? 'animate-fadeUp' : 'animate-fadeUpOut opacity-0'} h-[650px] md:h-full w-full items-center justify-center overflow-hidden rounded-[20px]`]">
            <div class="h-[22%] bg-[#04B2CA] p-6 text-center flex flex-col justify-center items-center">
              <h2
                class="text-[1.5rem] text-xl font-bold leading-6 text-white lg:text-[1.6rem] xl:text-[1.7rem] 2xl:text-[1.8rem]">
                Planes prepago:</h2>
              <p
                class="mt-2 text-[0.95rem] text-base leading-tight text-white lg:text-[1rem] xl:text-[1rem] 2xl:text-[1.1rem]">
                Para pequeñas empresas, adquiere el
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
                  <p class="text-[0.9rem] lg:text-[0.95rem] xl:text-[1rem] 2xl:text-[1.1rem]">{{
                    plan.numberStamps }}
                    timbres</p>
                </div>
                <div class="flex flex-col items-center lg:flex-row">
                  <p class="mr-2 text-[0.9rem] lg:text-[0.95rem] xl:text-[1rem] 2xl:text-[1.1rem]">${{
                    plan.priceStampPackage!.toFixed(2) }}</p>


                  <button
                    class="px-3 py-1 w-[130px] lg:w-[170px] xl:w-[190px] 2xl:w-[130px] h-auto rounded-full flex justify-center items-center text-white border-[1px] border-[#04B2CA] bg-[#04B2CA] group">
                    <p
                      class="text-white text-[0.8rem] sm:text-[0.85rem] md:text-[0.75rem] lg:text-[0.85rem] xl:text-[0.9rem] 2xl:text-[0.95rem] font-medium group-hover:pr-2 h-auto flex justify-center items-center pt-0.5">
                      Adquirir</p>
                    <IconEast
                      class="transition-all ease-in duration-[0.3s] text-white !w-0 group-hover:!w-4 group-hover:animate-fadeRight" />
                  </button>
                </div>
              </div>

            </div>
          </div>
          <div
            :class="[`${visibility.section5 ? 'animate-fadeUp' : 'animate-fadeUpOut opacity-0'} flex h-full w-full items-center justify-center overflow-hidden max-md:col-auto md:col-span-2 lg:col-auto`]">
            <div
              class="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[20px] bg-[#1D394D] p-6 text-center lg:w-[85%]">
              <div
                class="absolute left-0 top-0 z-[4] h-full w-full bg-[url('/assets/img/stamps-bg.jpeg')] bg-cover bg-center">
              </div>
              <div class="absolute left-0 top-0 z-[5] h-full w-full bg-gradient-to-r from-[#1D394DF2] to-[#2D5A7AF2]">
              </div>
              <div class="flex w-full flex-col items-center justify-center">
                <h2
                  class="z-10 text-[1.5rem] md:text-[1.6rem] lg:text-[1.2em] xl:text-[1.7rem] 2xl:text-[2.1rem] text-xl font-bold leading-[2.5rem] text-white">
                  ¿Necesitas un plan <br />
                  a tu medida?
                </h2>
                <button class="w-[130px] lg:w-[170px] xl:w-[170px] 2xl:w-[180px] z-10 mt-3  rounded-full bg-[#04B2CA] px-7 py-1.5 text-white group flex justify-center ">
                  <p
                    class="text-white text-[0.8rem] sm:text-[0.85rem] md:text-[0.75rem] lg:text-[0.85rem] xl:text-[0.9rem] 2xl:text-[0.95rem] font-medium group-hover:pr-2 h-auto flex justify-center items-center pt-0.5">
                    ¡CONTACTANOS!</p>
                  <IconEast
                    class="transition-all ease-in duration-[0.3s] text-white !w-0 group-hover:!w-4 group-hover:animate-fadeRight" />
                </button>
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
</style>