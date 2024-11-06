<template>
    <div class="h-full w-full !font-muller bg-white overflow-hidden pb-16 md:pb-16 lg:pb-20 xl:pb-24 2xl:pb-36">

        <!-- Section 4 -->
        <section class="h-[550px] md:h-[320px] bg-gradient-to-tl from-bluecf to-bluemdcf" id="section4">
            <div
                class="w-full h-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[850px] md:text-left lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px] flex justify-center items-center">
                <div class="relative m-0 w-full h-auto flex justify-center items-center">
                    <div
                        class="absolute top-[50%] left-0 translate-y-[-50%] w-full h-auto flex flex-col md:flex-row justify-between items-center px-2 md:px-0">

                        <div class="w-full h-full flex flex-col justify-center items-start max-md:mb-16">
                            <h2
                                :class="[`${visibility.section4 ? 'animate-fadeRight' : 'animate-fadeRightOut opacity-0'} text-white text-[1.5rem] sm:text-[1.6rem] md: lg:text-[2.25rem] xl:text-[2.3rem] 2xl:text-[2.5rem] font-bold font-muller leading-[2.3rem] lg:leading-[3.3rem] mb-2`]">
                                Olvídate de las facturas <br> complicadas</h2>
                            <p
                                :class="[`${visibility.section4 ? 'animate-fadeRight' : 'animate-fadeRightOut opacity-0'} text-white text-[0.8rem] sm:text-[0.8rem] md: lg:text-[0.95rem] xl:text-[1rem] 2xl:text-[1.1rem] font-normal font-muller`]">
                                <b>Con CFDI Total</b> simplifica tu facturación con nuestro <span
                                    class="text-[#42FFFF]">sistema de <br class="hidden md:block"> timbres fiscales y
                                    plataforma de gestión!</span>
                            </p>
                        </div>

                        <div class="w-full h-full flex justify-center items-center">
                            <img src="/assets/img/compu.webp" alt=""
                                :class="[`${visibility.section4 ? 'animate-fadeLeft' : 'animate-fadeLeftOut opacity-0'} w-[325px] sm:w-[350px] md:w-[375px] lg:w-[400px] xl:w-[425px] 2xl:w-[450px]`]">
                        </div>

                    </div>
                </div>
            </div>
        </section>

    </div>
</template>


<script lang="ts" setup>

// Vue
import { onMounted, onUnmounted, reactive} from 'vue';

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

onMounted(() => {
    const sections = ['#section1', '#section2', '#section3', '#section4', '#section5', '#section6', '#section7'].map((id) => document.querySelector(id));
    sections.forEach((section) => section && observer.observe(section));

    onUnmounted(() => {
        observer.disconnect();
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
</style>