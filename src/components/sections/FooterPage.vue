<template>
    <div class="h-full w-full !font-muller bg-white overflow-hidden">

        <!-- Footer -->
        <footer class="w-full bg-bluecf" id="section7">
            <div class="mx-auto max-w-full md:px-20">
                <!--Grid-->
                <div class="py-16 flex justify-between items-center flex-col gap-8 lg:flex-row">

                    <a href="https://pagedone.io/" class="flex justify-center">
                        <img src="/assets/img/logo-footer.webp" alt="" :class="[`${visibility.section7 ? 'animate-fadeUp' : 'animate-fadeUpOut opacity-0'} w-[150px] h-auto`]">
                    </a>

                    <ul
                        class="max-lg:hidden flex text-lg text-center items-cente justify-center gap-14 lg:gap-10 xl:gap-14 transition-all duration-500 ">
                        <li class="text-white">
                            <div>
                                <p :class="[`${visibility.section7 ? 'animate-fadeUp' : 'animate-fadeUpOut opacity-0'} text-[0.85rem] md:text-[0.9rem] xl:text-[1.05rem]`]">© 2023 Digitalquo.</p>
                            </div>
                            <div class="flex flex-row gap-x-5">
                                <p :class="[`${visibility.section7 ? 'animate-fadeUp' : 'animate-fadeUpOut opacity-0'} transition-all ease-in duration-150 text-[0.85rem] md:text-[0.9rem] xl:text-[1.05rem] cursor-pointer border-x-2 border-x-transparent border-t-transparent border-t-2 border-b-2 border-white hover:border-2 hover:border-x-white hover:border-t-white px-2 py-1`]">
                                    Política de privacidad</p>
                                <p :class="[`${visibility.section7 ? 'animate-fadeUp' : 'animate-fadeUpOut opacity-0'} transition-all ease-in duration-150 text-[0.85rem] md:text-[0.9rem] xl:text-[1.05rem] cursor-pointer border-x-2 border-x-transparent border-t-transparent border-t-2 border-b-2 border-white hover:border-2 hover:border-x-white hover:border-t-white px-2 py-1`]">
                                    Política de Cookies</p>
                            </div>
                        </li>
                    </ul>

                    <div class="max-md:w-full flex gap-x-12 lg:gap-x-6 justify-center">

                        <a href="javascript:;" :class="[`${visibility.section7 ? 'animate-fadeUp' : 'animate-fadeUpOut opacity-0'} transition-all ease-in duration-150 w-9 h-9 flex justify-center items-center scale-100 hover:scale-[0.8]`]">
                            <svg class=" w-[1.5rem] md:w-[1.5rem] lg:w-[1.4rem] xl:w-[1.4rem] 2xl:w-[1.5rem]" viewBox="0 0 25 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.1396 0C5.57942 0 0.260742 5.31868 0.260742 11.8788C0.260742 17.8069 4.60407 22.7205 10.2839 23.6151V15.3133H7.26638V11.8788H10.2839V9.26164C10.2839 6.28213 12.0576 4.63914 14.7698 4.63914C16.0695 4.63914 17.4309 4.87079 17.4309 4.87079V7.79209H15.9293C14.4561 7.79209 13.9952 8.70922 13.9952 9.64892V11.8764H17.2871L16.7609 15.3109H13.9952V23.6127C19.6751 22.7229 24.0184 17.8081 24.0184 11.8788C24.0184 5.31868 18.6997 0 12.1396 0Z"
                                    fill="#E6E6E6" />
                            </svg>
                        </a>

                        <a href="javascript:;" :class="[`${visibility.section7 ? 'animate-fadeUp' : 'animate-fadeUpOut opacity-0'} transition-all ease-in duration-150 w-9 h-9 flex justify-center items-center scale-100 hover:scale-[0.8]`]">
                            <svg class=" w-[1.5rem] md:w-[1.5rem] lg:w-[1.4rem] xl:w-[1.4rem] 2xl:w-[1.5rem]" viewBox="0 0 25 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.41855 19.3076C1.75855 19.3076 1.19375 19.0753 0.724155 18.6106C0.254555 18.1458 0.0193547 17.5865 0.0185547 16.9326V2.68262C0.0185547 2.02949 0.253755 1.47058 0.724155 1.00587C1.19455 0.541159 1.75935 0.308409 2.41855 0.307617H21.6186C22.2786 0.307617 22.8438 0.540367 23.3142 1.00587C23.7846 1.47137 24.0194 2.03028 24.0186 2.68262V16.9326C24.0186 17.5857 23.7838 18.1451 23.3142 18.6106C22.8446 19.0761 22.2794 19.3084 21.6186 19.3076H2.41855ZM12.0186 10.9951L21.6186 5.05762V2.68262L12.0186 8.62012L2.41855 2.68262V5.05762L12.0186 10.9951Z"
                                    fill="#E6E6E6" />
                            </svg>
                        </a>

                        <a href="javascript:;" :class="[`${visibility.section7 ? 'animate-fadeUp' : 'animate-fadeUpOut opacity-0'} transition-all ease-in duration-150 w-9 h-9 flex justify-center items-center scale-100 hover:scale-[0.8]`]">
                            <svg class=" w-[1.5rem] md:w-[1.5rem] lg:w-[1.4rem] xl:w-[1.4rem] 2xl:w-[1.5rem]" viewBox="0 0 22 23" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M11.3139 0.947021C5.65066 0.947021 1.14653 5.34022 0.90323 10.8554L0.902634 10.8727C0.90185 10.9041 0.900598 10.942 0.899222 10.9836C0.895935 11.0831 0.891943 11.2039 0.891943 11.3086C0.891943 13.116 1.35788 14.8146 2.17248 16.2943L0.0185547 22.6678L6.63074 20.5642C8.04045 21.2719 9.63327 21.6703 11.3174 21.6703C17.0687 21.6703 21.7394 17.0381 21.7394 11.3086V11.3018V11.3017C21.7394 11.2261 21.7394 11.1294 21.735 11.0298L21.6976 10.1673H21.6729C21.101 4.97657 16.679 0.947021 11.3139 0.947021ZM15.9921 13.4734C16.0453 13.5487 16.0453 13.9133 15.8693 14.3378C15.6932 14.7624 14.8506 15.1502 14.4452 15.2022C14.1447 15.2406 13.7782 15.2607 13.3746 15.1883C13.2901 15.1732 13.2039 15.154 13.1163 15.13C12.8103 15.0462 12.4171 14.9343 11.9137 14.7471L11.9112 14.7461C11.1474 14.4616 10.4793 14.0404 9.93242 13.6127L9.93236 13.6127C9.11597 12.9742 8.56986 12.3212 8.37909 12.0866L8.34674 12.0467C8.32931 12.0252 8.31711 12.0101 8.31029 12.0022L8.30779 11.9993C8.24477 11.9267 7.98901 11.632 7.77289 11.2329C7.59807 10.91 7.44918 10.5189 7.44918 10.1217C7.44918 9.2858 7.92545 8.84694 8.14536 8.64431C8.16073 8.63014 8.17486 8.61713 8.18748 8.60521C8.38057 8.42292 8.60916 8.37765 8.74972 8.37765C8.89099 8.37765 9.03155 8.37826 9.15436 8.38377C9.1696 8.38441 9.18544 8.38432 9.20182 8.38422C9.32503 8.38348 9.47826 8.38256 9.62928 8.69575C9.68334 8.80797 9.76082 8.97067 9.8437 9.14471L9.84371 9.14474C10.0296 9.53516 10.2427 9.98263 10.2795 10.0452C10.3328 10.1364 10.3676 10.2428 10.2973 10.364C10.2863 10.3828 10.2762 10.4005 10.2666 10.4174C10.2139 10.5098 10.1751 10.5778 10.085 10.6668C10.0497 10.7024 10.0132 10.7407 9.97676 10.779L9.97673 10.779L9.97672 10.779C9.90825 10.8509 9.83989 10.9228 9.7792 10.9761L9.76842 10.9855C9.66336 11.076 9.55332 11.1739 9.67613 11.3562C9.79895 11.5385 10.2228 12.1337 10.8496 12.6158C11.5228 13.1335 12.1083 13.3524 12.4057 13.4635L12.4735 13.489L12.4736 13.4891C12.5019 13.4998 12.5262 13.5094 12.5463 13.5181C12.7571 13.6092 12.8806 13.5939 13.0034 13.4728C13.0305 13.4462 13.0709 13.4057 13.1191 13.3568C13.291 13.1825 13.5611 12.9014 13.6714 12.7595C13.8127 12.5778 13.9533 12.6084 14.1464 12.669C14.3402 12.7296 15.3773 13.1694 15.5882 13.2605C15.6295 13.2784 15.6682 13.2945 15.704 13.3095L15.7041 13.3095L15.7041 13.3095C15.8508 13.3707 15.9499 13.412 15.9921 13.4734ZM8.66431 9.57193L8.66432 9.57193L8.65862 9.58183L8.66431 9.57193Z"
                                    fill="#E6E6E6" />
                            </svg>
                        </a>

                    </div>

                    <ul
                        class="max-lg:flex hidden text-lg text-center items-cente justify-center gap-14 lg:gap-10 xl:gap-14 transition-all duration-500">
                        <li class="text-white">
                            <div>
                                <p :class="[`${visibility.section7 ? 'animate-fadeUp' : 'animate-fadeUpOut opacity-0'} text-[0.85rem] md:text-[0.9rem] xl:text-[1.05rem]`]">© 2023 Digitalquo.</p>
                            </div>
                            <div class="flex flex-row gap-x-5">
                                <p
                                :class="[`${visibility.section7 ? 'animate-fadeUp' : 'animate-fadeUpOut opacity-0'} transition-all ease-in duration-150 text-[0.85rem] md:text-[0.9rem] xl:text-[1.05rem] cursor-pointer border-x-2 border-x-transparent border-t-transparent border-t-2 border-b-2 border-white hover:border-2 hover:border-x-white hover:border-t-white px-2 py-1`]">
                                    Política de privacidad</p>
                                <p
                                :class="[`${visibility.section7 ? 'animate-fadeUp' : 'animate-fadeUpOut opacity-0'} transition-all ease-in duration-150 text-[0.85rem] md:text-[0.9rem] xl:text-[1.05rem] cursor-pointer border-x-2 border-x-transparent border-t-transparent border-t-2 border-b-2 border-white hover:border-2 hover:border-x-white hover:border-t-white px-2 py-1`]">
                                    Política de Cookies</p>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        </footer>

    </div>
</template>


<script lang="ts" setup>
// Vue
import { onMounted, onUnmounted, reactive } from 'vue';

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
    threshold: 0.5,
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


<style></style>