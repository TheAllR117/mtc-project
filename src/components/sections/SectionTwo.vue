<template>
    <div class="h-full w-full !font-muller bg-white overflow-hidden pb-16 md:pb-16 lg:pb-20 xl:pb-24 2xl:pb-36" >

        <!-- Section 2 -->
        <section class="h-max bg-white" id="section2">
            <div
                class="w-full h-full mx-auto  md:max-w-[840px] md:text-left lg:max-w-[1000px] xl:max-w-[1240px] 2xl:max-w-[1620px]">
                <div class="relative m-0 w-full h-full">
                    <div
                        class="w-full h-full border-2 border-transparent bg-white rounded-[20px] overflow-hidden px-5 md:px-14 pb-4 md:pb-14">

                        <div class="w-full h-auto flex justify-center items-center mb-[30px] md:my-[30px]">
                            <h2 :class="[`${visibility.section2 ? 'animate-fadeUp' : 'animate-fadeUpOut opacity-0'} text-bluecf font-bold font-muller text-[1.6rem] sm:text-[1.7rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem] `]">
                                Nuestras <span class="text-[#04B2CA]">soluciones</span> <span class="bg-[url(/assets/img/emoji-4.webp)] bg-cover text-transparent">**</span></h2>
                        </div>

                        <div
                            class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-14 font-mono text-white text-sm text-center font-bold leading-6 rounded-lg">


                            <div v-for="(item, index) in solutionAll" :key="index"
                                :class="[`${visibility.section2 ? 'animate-fadeUp' : 'animate-fadeUpOut opacity-0'} transition-all ease-in duration-150 rounded-[20px] shadow-lg text-bluecf overflow-hidden h-[320px] group bg-white hover:bg-bluecf cursor-pointer `]">

                                <div class="w-full h-[60%] overflow-hidden relative">
                                    <img class="transition-all ease-in duration-150 relative-0 group-hover:scale-110"
                                        v-lazy="{
                                            src: item.img!.url,
                                            loading: '/assets/img/placeholder.webp',
                                            error: '/assets/img/placeholder.webp',
                                            delay: 250
                                        }" loading="lazy" alt="" />
                                </div>

                                <div
                                    class="transition-all ease-in duration-150 w-full h-[40%] text-left relative z-10 bg-white rounded-[20px_0px_0px_0px] mt-[-15px] group-hover:bg-bluecf">
                                    <svg width="53" height="45" viewBox="0 0 53 45" fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="transition-all ease-in duration-150 absolute top-[-45px] right-[-1px] fill-white group-hover:fill-bluecf">
                                        <path
                                            d="M52.5 2.64622V45H2.5C41.3887 39.765 51.8466 16.0617 52.5 2.64622V0C52.5434 0.825567 52.5456 1.71089 52.5 2.64622Z" />
                                    </svg>
                                    <div class="relative z-10 py-5 px-5">
                                        <div class="w-full h-auto flex justify-between items-center">
                                            <p
                                                class="transition-all ease-in duration-150 text-bluecf group-hover:text-white text-[1.1rem] md:text-[1.15rem] lg:text-[1.2rem] xl:text-[1.3rem] 2xl:text-[1.4rem] font-muller">
                                                {{ item.title }}
                                            </p>
                                            <div class="relative group/item" v-if="item.infoTooltip != ''">
                                                <IconInfo class="group-hover:text-white hover:scale-90" />
                                                <div
                                                    class="absolute right-0 hidden w-max max-w-[210px] p-2 mt-2 text-[0.7rem] text-white bg-black rounded-lg shadow-lg group-hover/item:block leading-4 font-muller">
                                                    {{ item.infoTooltip }}
                                                    <div
                                                        class="absolute top-[-0.25rem] left-[93%] transform -translate-x-1/2 w-2 h-2 bg-black rotate-45">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="transition-all ease-in duration-150 w-full h-[1px] bg-graycf my-2 group-hover:bg-bluelightcf">
                                        </div>
                                        <p
                                            class="transition-all ease-in duration-150 text-bluecf group-hover:text-white font-muller text-[1rem] md:text-[1rem] lg:text-[1rem] xl:text-[1.1rem] font-light">
                                            {{ item.text }}
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
<!-- 
                        <swiper :css-mode="true" :mousewheel="true" :slides-per-view="1.15" :centeredSlides="true"
                            :space-between="15" :speed="500" :grabCursor="true" :pagination="{
                                clickable: true,
                            }" :navigation="{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }" :modules="modules" :breakpoints="{
                                0: { slidesPerView: 1.15, spaceBetween: 15 },
                                500: { slidesPerView: 1.15, spaceBetween: 15 },
                                1024: { slidesPerView: 1.15, spaceBetween: 15 },
                                1300: { slidesPerView: 1.15, spaceBetween: 15 },
                                1500: { slidesPerView: 1.15, spaceBetween: 15 },
                            }"
                            class="mySwiper max-md:!grid !hidden h-full text-white text-sm text-center font-bold leading-6 rounded-lg ">

                            <swiper-slide v-for="(item, index) in solutionAll" :key="index"
                                :class="[`${visibility.section2 ? 'animate-fadeUp' : 'animate-fadeUpOut opacity-0'} my-5 transition-all ease-in duration-[0.1s] rounded-[20px] shadow-[0_0px_7px_3px_rgba(0,0,0,0.15)] text-bluecf overflow-hidden !h-[320px] group bg-white cursor-pointer `]">
                                <div class="w-full !h-[60%] overflow-hidden relative">

                                        <img class="transition-all ease-in duration-[0.1s] relative-0 group-hover:scale-110"
                                        v-lazy="{
                                            src: item.img!.url,
                                            loading: '/assets/img/placeholder.webp',
                                            error: '/assets/img/placeholder.webp',
                                            delay: 250
                                        }" loading="lazy" alt="" />
                                </div>
                                <div
                                    class="transition-all ease-in duration-[0.1s] w-full !h-[50%] text-left relative z-10 bg-white rounded-[20px_0px_0px_0px] mt-[-15px] group-hover:bg-bluecf">
                                    <svg width="53" height="45" viewBox="0 0 53 45" fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="transition-all ease-in duration-[0.1s] absolute top-[-45px] right-[-1px] fill-white group-hover:fill-bluecf">
                                        <path
                                            d="M52.5 2.64622V45H2.5C41.3887 39.765 51.8466 16.0617 52.5 2.64622V0C52.5434 0.825567 52.5456 1.71089 52.5 2.64622Z" />
                                    </svg>
                                    <div class="relative z-10 py-5 px-5">
                                        <div class="w-full h-auto flex justify-between items-center">
                                            <p
                                                class="transition-all ease-in duration-[0.1s] text-bluecf group-hover:text-white text-[1.1rem] md:text-[1.15rem] lg:text-[1.2rem] xl:text-[1.3rem] 2xl:text-[1.4rem] font-muller">
                                                {{ item.title }}
                                            </p>
                                            <div class="relative group/item">
                                                <IconInfo class="group-hover:text-white hover:scale-90" />
                                                <div
                                                    class="absolute right-0 hidden w-max max-w-[210px] p-2 mt-2 text-[0.7rem] text-white bg-black rounded-lg shadow-lg group-hover/item:block leading-4 font-muller">
                                                    {{ item.infoTooltip }}
                                                    <div
                                                        class="absolute top-[-0.25rem] left-[93%] transform -translate-x-1/2 w-2 h-2 bg-black rotate-45">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="transition-all ease-in duration-150 w-full h-[1px] bg-graycf my-2 group-hover:bg-bluelightcf">
                                        </div>
                                        <p
                                            class="transition-all ease-in duration-150 text-bluecf group-hover:text-white font-muller text-[1rem] md:text-[1rem] lg:text-[1rem] xl:text-[1.1rem] font-light">
                                            {{ item.text }}
                                        </p>
                                    </div>
                                </div>
                            </swiper-slide>

                            <div class="slider__controls py-[20px] flex justify-center items-center">
                                <div class="slider__pagination"></div>
                            </div>

                        </swiper> -->

                    </div>
                </div>
            </div>

        </section>

    </div>
</template>


<script lang="ts" setup>
// Interfaces
import { Solution } from '../../interfaces/solutions/solutions_all_response';
// Icon
import IconInfo from '../../components/icons/IconInfo.vue';
// Vue
import { ref, onMounted, onUnmounted, reactive, onBeforeMount } from 'vue';
// Swiper
// import { Swiper, SwiperSlide } from 'swiper/vue';
// import 'swiper/swiper-bundle.css';
// import 'swiper/css/effect-coverflow';
// import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

const solutionAll = ref<Solution[]>([]);
const showScrollTopButton = ref<boolean>(false);
// const modules = [Pagination, Navigation, EffectCoverflow];

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
    threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const sectionId = entry.target.id as keyof typeof visibility;
        visibility[sectionId] = entry.isIntersecting;
    });
}, observerOptions);


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
    const solutionsData = await fetchData(`query AllSolutions { solution (orderBy: createdAt_ASC, last: 100) { id img { url } title text infoTooltip } }`);
    if (solutionsData?.data?.solution) solutionAll.value = solutionsData.data.solution;
}

// onMounted(() => {
//     const sections = ['#section1', '#section2', '#section3', '#section4', '#section5', '#section6', '#section7'].map((id) => document.querySelector(id));
//     sections.forEach((section) => section && observer.observe(section));

//     loadData();

//     window.addEventListener('scroll', handleScroll);

//     onUnmounted(() => {
//         observer.disconnect();
//         window.removeEventListener('scroll', handleScroll);
//     });
// });


onBeforeMount(() => {
  loadData();
})

onMounted(() => {
    const sections = ['#section1', '#section2', '#section3', '#section4', '#section5', '#section6', '#section7'].map((id) => document.querySelector(id));
    sections.forEach((section) => section && observer.observe(section));

    window.addEventListener('scroll', handleScroll);

    onUnmounted(() => {
        observer.disconnect();
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
    width: 30px;
    height: 6px;
    border-radius: 3px;
    opacity: 1;
    margin: 0 4px;
}

.swiper-pagination-bullet-active {
    background: #00c1de;
}

.swiper {
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
}

.swiper-slide {
    width: 326px;
    min-height: 310px;
    max-height: 600px;
}

/* .swiper-slide {
    visibility: hidden;
  
}

.swiper-slide-visible {
    visibility: visible;
} */

.card {
  box-shadow: 0px 0px 12px 2px rgba(0,0,0,.2);
}
</style>