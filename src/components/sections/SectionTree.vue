<template>
    <div class="h-full w-full !font-muller bg-white overflow-hidden pb-16 md:pb-16 lg:pb-20 xl:pb-24 2xl:pb-36">

        <!-- Section 3 -->
        <section class="h-max bg-white font-muller" id="section3">
            <div
                class="w-full h-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] md:text-left lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1260px]">
                <div class="pt-2 relative m-0 w-full h-full">
                    <div
                        class="w-full h-full bg-gradient-to-tl from-[#23465E] to-[#4992C4] rounded-[20px] overflow-hidden px-5 md:px-10 lg:px-14 pb-14">

                        <div
                            class="w-full h-auto flex justify-center items-center mt-[30px] lg:mt-[60px] max-lg:mb-[30px]">
                            <h2
                                :class="[`${visibility.section3 ? 'animate-fadeDown' : 'animate-fadeDownOut opacity-0'} text-white font-bold font-muller text-[1.3rem] sm:text-[1.5rem] md: lg:text-[1.7rem] xl:text-[1.8rem] 2xl:text-[2rem] max-md:text-center`]">
                                No estás solo nosotros <br class="md:hidden"> estamos contigo <span
                                    class="bg-[url(/assets/img/emoji-3.webp)] bg-cover text-transparent">**</span>
                            </h2>
                        </div>

                        <div class="relative m-0 w-full h-auto flex justify-center items-center">
                            <div
                                class="w-full h-auto flex flex-col md:flex-row justify-between items-center md:pr-5 lg:pr-7">

                                <!-- Sección de Texto Desktop-->
                                <!-- <div
                                    class="max-md:hidden w-[50%] h-full md:max-h-[330px] lg:max-h-[300px] xl:max-h-[370px] flex flex-col justify-start items-start max-md:mb-16 overflow-y-auto scroll-bar-color-left">


                                    <div v-for="(item, index) in offerAll" :key="index"
                                        :class="[`${visibility.section3 ? 'animate-fadeRight' : 'animate-fadeRightOut  opacity-0'} relative cursor-pointer mb-10 pl-4`]"
                                        @click="setActive2(index)">
                                        <div :class="[
                                            'w-1 h-full absolute top-0 left-[0px] rounded-full transition-all',
                                            { 'bg-bluelightcf': activeIndex2 === index, 'bg-[#CACACA]': activeIndex2 !== index }
                                        ]">
                                        </div>
                                        <h4
                                            class="text-white text-1.1rem md:text-[0.9rem] lg:text-[1.2rem] xl:text-[1.3rem] 2xl:text-[1.45rem] font-bold">
                                            {{ item.title }}</h4>
                                        <p class="text-white text-[0.9rem] md:text-[0.8rem] xl:text-[0.95rem] 2xl:text-[1.05rem]"
                                            v-html="item.text?.markdown"></p>
                                    </div>

                                </div> -->

                                <div ref="scrollContainer"
                                    class="max-md:hidden w-[50%] h-full md:max-h-[340px] lg:max-h-[320px] xl:max-h-[370px] flex flex-col justify-start items-start max-md:mb-16 overflow-y-auto scroll-bar-color-left">
                                    <div v-for="(item, index) in offerAll" :key="index" :class="[
                                        `${visibility.section3 ? 'animate-fadeRight' : 'animate-fadeRightOut opacity-0'} relative cursor-pointer mb-9 pl-4 pr-2`
                                    ]" @click="setActive2(index)" ref="itemRefs">
                                        <div :class="[
                                            'w-1 h-full absolute top-0 left-[0px] rounded-full transition-all',
                                            { 'bg-bluelightcf': activeIndex2 === index, 'bg-[#CACACA]': activeIndex2 !== index }
                                        ]"></div>
                                        <h4
                                            class="text-white text-1.1rem md:text-[0.9rem] lg:text-[1.2rem] xl:text-[1.3rem] 2xl:text-[1.45rem] font-bold">
                                            {{ item.title }}
                                        </h4>
                                        <p class="text-white text-[0.9rem] md:text-[0.8rem] xl:text-[0.95rem] 2xl:text-[1.05rem]"
                                            v-html="item.text?.markdown"></p>
                                    </div>
                                </div>

                                <!-- Sección de Imagen Desktop-->
                                <div class="max-md:hidden w-[50%] h-full flex justify-center items-center"
                                    v-if="offerAll[activeIndex2]">
                                    <img :src="offerAll[activeIndex2].img?.url" :alt="offerAll[activeIndex2].title"
                                        :class="[`${visibility.section3 ? 'animate-fadeLeft' : 'animate-fadeLeftOut opacity-0'} w-[325px] sm:w-[350px] md:w-[375px] lg:w-[400px] xl:w-[425px] 2xl:w-[500px] floating`]">
                                </div>

                                <!-- Sección de Texto Mobil-->
                                <div
                                    class="max-md:flex hidden w-full h-full flex-col justify-center items-start gap-y-10">
                                    <swiper :css-mode="true" :mousewheel="true" :slides-per-view="3"
                                        :centeredSlides="true" :space-between="56" :speed="500" :grabCursor="true"
                                        :pagination="{
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
                                        }" class="mySwiper !h-max !w-full flex justify-center"
                                        @slideChange="onSlideChange">

                                        <swiper-slide v-for="(item, index) in offerAll" :key="index"
                                            :class="[`${visibility.section5 ? 'animate-fadeUp' : 'animate-fadeUpOut opacity-0'} !w-full !h-full !min-h-full !max-h-full flex flex-col justify-center items-center gap-y-10`]">
                                            <h4
                                                class="text-white text-1.1rem md:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem] font-bold border-b-2 border-bluelightcf w-full px-5 text-center pb-3">
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
                                <div class="max-md:flex hidden w-full h-full justify-center items-center"
                                    v-if="offerAll[activeIndex3]">
                                    <img :src="offerAll[activeIndex3].img?.url" :alt="offerAll[activeIndex3].title"
                                        :class="[`${visibility.section3 ? 'animate-fadeLeft' : 'animate-fadeLeftOut opacity-0'} w-[240px] sm:w-[240px] md:w-[375px] lg:w-[400px] xl:w-[425px] 2xl:w-[500px] floating`]">
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
// Swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-coverflow';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { watch } from 'vue';

const modules = [Pagination, Navigation, EffectCoverflow, Autoplay];

const offerAll = ref<Offer[]>([]);
const activeIndex2 = ref(0);
const activeIndex3 = ref(0);
// Ref for the scroll container
const scrollContainer = ref<HTMLElement | null>(null);

// Ref for each item in the list
const itemRefs = ref<(HTMLElement | null)[]>([]);

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

function setActive2(index: number) {
    if (index >= 0 && index < offerAll.value.length) {
        activeIndex2.value = index;
    } else {
        console.warn(`Índice fuera de rango: ${index}`);
    }
}

const isItemVisible = (item: HTMLElement) => {
    if (!scrollContainer.value) return false;

    const containerRect = scrollContainer.value.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();

    // Verificar si el item está fuera de la vista (por encima o por debajo del contenedor)
    return itemRect.top >= containerRect.top && itemRect.bottom <= containerRect.bottom;
};

// Observar cambios en el índice activo para hacer scroll al item correspondiente
watch(activeIndex2, (newIndex) => {
    if (newIndex === null) return;

    const item = itemRefs.value[newIndex];
    if (item && scrollContainer.value) {
        // Si el índice es 0, asegurarse de que el scroll vaya al inicio
        if (newIndex === 0) {
            scrollContainer.value.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        // Si el item no es visible, hacer scroll hacia él
        else if (!isItemVisible(item)) {
            scrollContainer.value.scrollTo({
                top: item.offsetTop,
                behavior: 'smooth'
            });
        }
    }
});

function onSlideChange(swiper: SwiperType) {
    activeIndex3.value = swiper.activeIndex;
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

.scroll-bar-color-left::-webkit-scrollbar {
    width: 7px;
}

/* Track */
.scroll-bar-color-left::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    background: #FFFFFF;
    border-radius: 10px;
}

/* Handle */
.scroll-bar-color-left::-webkit-scrollbar-thumb {
    background: #04B2CA;
    border-radius: 10px;
}

/* Handle on hover */
.scroll-bar-color-left::-webkit-scrollbar-thumb:hover {
    background: #b30000;
}
</style>