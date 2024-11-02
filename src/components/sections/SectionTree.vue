<template>
    <div class="h-full w-full !font-muller bg-white overflow-hidden">

        <!-- Section 3 -->
        <section class="h-max bg-white font-muller" id="section3">
            <div
                class="w-full h-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] md:text-left lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1260px]">
                <div class="py-[30px] md:py-[50px] relative m-0 w-full h-full">
                    <div
                        class="w-full h-full bg-gradient-to-tl from-[#23465E] to-[#4992C4] rounded-[20px] overflow-hidden px-5 md:px-14 pb-14">

                        <div class="w-full h-auto flex justify-center items-center mt-[60px] max-md:mb-[30px]">
                            <h2
                                :class="[`${visibility.section3 ? 'animate-fadeDown' : 'animate-fadeDownOut opacity-0'} text-white font-bold font-muller text-[1.6rem] sm:text-[1.6rem] md: lg:text-[1.7rem] xl:text-[1.8rem] 2xl:text-[2rem] max-md:text-center`]">
                                No estás solo nosotros <br class="md:hidden"> estamos contigo 😎
                            </h2>
                        </div>

                        <div class="relative m-0 w-full h-auto flex justify-center items-center">
                            <div class="w-full h-auto flex flex-col md:flex-row justify-between items-center px-7">

                                <!-- Sección de Texto -->
                                <div
                                    class="w-full h-full flex flex-col justify-center items-start max-md:mb-16 gap-y-10">
                                    <!-- <div v-for="(item, index) in item2" :key="index"
                      :class="[`${visibility.section3 ? 'animate-fadeRight' : 'animate-fadeRightOut  opacity-0'} relative cursor-pointer`]"
                      @click="setActive2(index)">
                      <div :class="[
                        'w-1 h-full absolute top-0 left-[-20px] rounded-full transition-all',
                        { 'bg-[#04B2CA]': activeIndex2 === index, 'bg-[#CACACA]': activeIndex2 !== index }
                      ]">
                      </div>
                      <h4 class="text-white text-[1.5rem] font-bold">{{ item.title }}</h4>
                      <p class="text-white text-[1.1rem]">{{ item.text }}</p>
                    </div> -->

                                    <div v-for="(item, index) in offerAll" :key="index"
                                        :class="[`${visibility.section3 ? 'animate-fadeRight' : 'animate-fadeRightOut  opacity-0'} relative cursor-pointer`]"
                                        @click="setActive2(index)">
                                        <div :class="[
                                            'w-1 h-full absolute top-0 left-[-20px] rounded-full transition-all',
                                            { 'bg-[#04B2CA]': activeIndex2 === index, 'bg-[#CACACA]': activeIndex2 !== index }
                                        ]">
                                        </div>
                                        <h4 class="text-white text-[1.5rem] font-bold">{{ item.title }}</h4>
                                        <p class="text-white text-[1.1rem]" v-html="item.text?.markdown"></p>
                                    </div>

                                </div>

                                <!-- Sección de Imagen -->
                                <div class="w-full h-full flex justify-center items-center"
                                    v-if="offerAll[activeIndex2]">
                                    <img :src="offerAll[activeIndex2].img?.url" :alt="offerAll[activeIndex2].title"
                                        :class="[`${visibility.section3 ? 'animate-fadeLeft' : 'animate-fadeLeftOut opacity-0'} w-[325px] sm:w-[350px] md:w-[375px] lg:w-[400px] xl:w-[425px] 2xl:w-[500px] floating`]">
                                </div>

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
import { Offer } from '../../interfaces/offers/all_offers_response';

// Vue
import { ref, onMounted, onUnmounted, reactive } from 'vue';

const offerAll = ref<Offer[]>([]);
const activeIndex2 = ref(0);

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

function setActive2(index: number) {
    if (index >= 0 && index < offerAll.value.length) {
        activeIndex2.value = index;
    } else {
        console.warn(`Índice fuera de rango: ${index}`);
    }
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
    const offersData = await fetchData(`query AllOffers { offers { text { markdown } title img { url } } }`);
    if (offersData?.data?.offers) offerAll.value = offersData.data.offers;
}

onMounted(() => {
    const sections = ['#section1', '#section2', '#section3', '#section4', '#section5', '#section6', '#section7'].map((id) => document.querySelector(id));
    sections.forEach((section) => section && observer.observe(section));

    loadData();

    const interval2 = setInterval(() => activeIndex2.value = (activeIndex2.value + 1) % offerAll.value.length, 5000);

    onUnmounted(() => {
        observer.disconnect();
        clearInterval(interval2);
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