<template>
    <div class="h-full w-full !font-muller bg-white">
        <!-- Social link -->
        <div class="fixed bottom-[20px] right-[20px] z-40 flex flex-col gap-5" id="section7">
            <div :class="[`${showScrollTopButton ? 'animate-fadeLeft' : 'animate-fadeLeftOut opacity-0'} shadow-[0_0px_7px_3px_rgba(250,250,250,0.2)] flex w-[40px] md:w-[45px] lg:w-[40px] xl:h-[50px] h-[40px] md:h-[45px] lg:h-[40px] xl:w-[50px] cursor-pointer items-center justify-center rounded-full bg-[#1D394D] text-white transition-all duration-150 ease-in hover:scale-[0.80]`]"
                @click="scrollToTop">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" class="w-[100%]">
                    <path fill="currentColor" d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
                </svg>

            </div>
            <div
                class="flex w-[40px] md:w-[45px] lg:w-[40px] xl:h-[50px] h-[40px] md:h-[45px] lg:h-[40px] xl:w-[50px] shadow-[0_0px_7px_3px_rgba(250,250,250,0.2)] cursor-pointer items-center justify-center rounded-full bg-[#2ea729] text-white transition-all duration-150 ease-in hover:scale-[0.80] z-10">
                <a href="whatsapp://send?text=Hola%20quiero%20mas%20informacion&phone=5212224002194"
                    class="flex justify-center items-center">
                    <svg class="svg-inline--fa fa-whatsapp fa-w-14 w-[60%]" aria-hidden="true" focusable="false"
                        data-prefix="fab" data-icon="whatsapp" role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512">
                        <path class="" fill="currentColor"
                            d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z">
                        </path>
                    </svg>
                </a>
            </div>
        </div>

    </div>
</template>


<script lang="ts" setup>
// Vue
import { ref, onMounted, onUnmounted, reactive } from 'vue';

const showScrollTopButton = ref<boolean>(false);

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


function handleScroll() {
    showScrollTopButton.value = window.scrollY >= 500;
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

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