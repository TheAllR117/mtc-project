<template>
  <div class="h-full w-full !font-muller bg-white ">

    <!-- Section 6 -->
    <section class="h-max bg-[#F3F5F6] font-muller pt-[100px]" id="section6">
      <div
        class="w-full h-full px-[15px] mx-auto sm:max-w-[740px] md:max-w-[940px] md:text-left lg:max-w-[1260px] xl:max-w-[1440px] 2xl:max-w-[1900px] py-[60px]">
        <div class="relative m-0 w-full h-full">
          <div class="w-full h-full rounded-[20px] overflow-hidden px-0 lg:px-14">

            <div class="relative m-0 w-full h-auto flex justify-center items-center">
              <div class="w-full h-auto flex flex-col md:flex-row justify-between items-center md:px-7">

                <div class="w-full h-full hidden md:flex md:justify-start xl:justify-center items-center">
                  <img src="/assets/img/contact.png" alt=""
                    :class="[`${visibility.section6 ? 'animate-fadeRight' : 'animate-fadeRightOut opacity-0'} w-[325px] sm:w-[300px] md:w-[300px] lg:w-[380px] xl:w-[425px] 2xl:w-[450px]`]">
                </div>

                <div class="w-full h-full flex justify-start items-center">

                  <div class="grid w-full md:w-[90%] h-full grid-cols-12 items-center gap-4">
                    <div class="col-span-12 w-full text-center md:text-left">
                      <h2
                        :class="[`${visibility.section6 ? 'animate-fadeLeft' : 'animate-fadeLeftOut opacity-0'} text-[1.7rem] md:text-[2rem] lg:text-[2rem] xl:text-[2.6rem] 2xl:text-[2.8rem] font-bold text-[#1D394D]`]">
                        ¿Tienes alguna duda?</h2>
                      <p
                        :class="[`${visibility.section6 ? 'animate-fadeLeft' : 'animate-fadeLeftOut opacity-0'} mb-8 text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] xl:text-[1.05rem] 2xl:text-[1.05rem] text-black max-md:px-6`]">
                        Contáctanos y te responderemos en un tiempo máximo de 24 horas.
                      </p>
                      <div class="flex flex-col gap-4 md:gap-8">
                        <div
                          :class="[`${visibility.section6 ? 'animate-fadeLeft' : 'animate-fadeLeftOut opacity-0'} flex flex-col md:flex-row`]">
                          <InputCustom key="name" id="name" type="text" label="Nombre*" v-model="form.name"
                            focus-color-border="focus:border-[#D4D4D4]" color-text="text-[#D4D4D4]"
                            border-radius="rounded-full" bg-label="bg-white" bg-input="bg-white"
                            bg-label-dark="bg-[#ffffff]" color-border="border-[#D4D4D4]"
                            :regexValidation="[textEmptyRegexValidation]" />
                        </div>
                        <div
                          :class="[`${visibility.section6 ? 'animate-fadeLeft' : 'animate-fadeLeftOut opacity-0'} flex flex-col md:flex-row`]">
                          <InputCustom key="email" id="email" type="email" label="Email*" v-model="form.email"
                            focus-color-border="focus:border-[#D4D4D4]" color-text="text-[#D4D4D4]"
                            border-radius="rounded-full" bg-label="bg-white" bg-input="bg-white"
                            bg-label-dark="bg-[#ffffff]" color-border="border-[#D4D4D4]"
                            :regexValidation="[textEmptyRegexValidation]" />
                        </div>
                        <div
                          :class="[`${visibility.section6 ? 'animate-fadeLeft' : 'animate-fadeLeftOut opacity-0'} hidden md:flex flex-col w-full`]">
                          <TextAreaCustom key="description" id="description" type="text" label="Descripción"
                            v-model="form.comment" :value="form.comment" focus-color-border="focus:border-[#D4D4D4]"
                            color-text="!text-[#D4D4D4]" border-radius="rounded-[20px]" bg-label="bg-white"
                            bg-input="bg-white" bg-label-dark="bg-[#ffffff]" color-border="border-[#D4D4D4]"
                            :regexValidation="[comentaryRegexValidation]" rows="12" />

                        </div>

                        <div
                          :class="[`${visibility.section6 ? 'animate-fadeLeft' : 'animate-fadeLeftOut opacity-0'} flex md:hidden flex-col w-full`]">
                          <TextAreaCustom key="description" id="description" type="text" label="Descripción"
                            v-model="form.comment" :value="form.comment" focus-color-border="focus:border-[#D4D4D4]"
                            color-text="!text-[#D4D4D4]" border-radius="rounded-[20px]" bg-label="bg-white"
                            bg-input="bg-white" bg-label-dark="bg-[#ffffff]" color-border="border-[#D4D4D4]"
                            :regexValidation="[comentaryRegexValidation]" rows="5" />

                        </div>
                        <div
                          :class="[`${visibility.section6 ? 'animate-fadeLeft' : 'animate-fadeLeftOut opacity-0'} flex w-full justify-end`]">
                          <ButtonLoading width="!w-[50%] md:!w-[40%] 2xl:!w-[30%]" label="Enviar"
                            border-radius="rounded-full" :disable="!formValido" :is-loading="isLoading"
                            color-button="!bg-[#04B2CA]" color-button-hover="!bg-[#04B2CA]/50" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- Section 7 -->
    <section class="py-24" v-if="faqAllQuest.length != 0">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          class="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full">
          <div class="w-full">

            <div
              class="mb-6 lg:mb-16 bg-gradient-to-r from-[#23465E] to-[#4992C4] py-[30px] rounded-[30px_30px_0px_0px] flex justify-center items-center">
              <h6
                class="text-center text-white text-[1.5rem] md:text-[1.7rem] lg:text-[1.9rem] xl:text-[2rem] 2xl:text-[2.2rem] font-bold">
                Preguntas frecuentes 😉</h6>
            </div>

            <div v-for="(item, index) in faqAllQuest" :key="index" class="border-b-[2px] border-[#04B2CA] py-10">
              <button @click="toggleAccordion(index)"
                class="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 w-full transition duration-500">
                <h5 class="text-[#1D394D] text-[1.2rem] md:text-[1.6rem] xl:text-[1.7rem] 2xl:text-[1.8rem] font-bold">
                  {{ item.title }}</h5>
                <svg
                  :class="[`${activeIndex == index ? 'rotate-180' : 'rotate-0'} w-[40px] lg:w-[40px] xl:w-[40px] 2xl:w-[50px] h-[40px] lg:h-[40px] xl:h-[40px] 2xl:h-[50px] text-[#1D394D] transition-transform duration-[0.6s] transform`]"
                  viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                    stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </button>

              <div
                :class="[`${activeIndex == index ? 'max-h-[305vh] opacity-100' : 'max-h-[0px] opacity-0'} accordion-content overflow-hidden transition-all ease-in-out duration-[0.6s]`]">
                <p class="text-base font-normal text-[#1D394D] my-4" v-html="item.text?.markdown"></p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="w-full bg-[#1D394D]" id="footer">
      <div class="mx-auto max-w-full px-20">
        <!--Grid-->
        <div class="py-16 flex justify-between items-center flex-col gap-8 lg:flex-row">

          <a href="https://pagedone.io/" class="flex justify-center">
            <img src="/assets/img/logo-footer.png" alt="" class="w-[150px] h-auto">
          </a>

          <ul
            class="text-lg text-center sm:flex items-cente justify-center gap-14 lg:gap-10 xl:gap-14 transition-all duration-500">
            <li class="text-white">
              <div>
                <p>© 2023 Digitalquo.</p>
              </div>
              <div class="flex flex-row gap-x-5">
                <p
                  class="transition-all ease-in duration-150 cursor-pointer border-x-2 border-x-transparent border-t-transparent border-t-2 border-b-2 border-white hover:border-2 hover:border-x-white hover:border-t-white px-2 py-1">
                  Política de privacidad</p>
                <p
                  class="transition-all ease-in duration-150 cursor-pointer border-x-2 border-x-transparent border-t-transparent border-t-2 border-b-2 border-white hover:border-2 hover:border-x-white hover:border-t-white px-2 py-1">
                  Política de Cookies</p>
              </div>
            </li>
          </ul>

          <div class="flex  space-x-4 sm:justify-center">

            <a href="javascript:;" class="w-9 h-9 flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path id="Vector"
                  d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z"
                  fill="white" />
              </svg>
            </a>

            <a href="javascript:;" class="w-9 h-9 flex justify-center items-center">
              <svg class="w-[1.25rem] h-[1.125rem] text-white" viewBox="0 0 15 15" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.70975 7.93663C4.70975 6.65824 5.76102 5.62163 7.0582 5.62163C8.35537 5.62163 9.40721 6.65824 9.40721 7.93663C9.40721 9.21502 8.35537 10.2516 7.0582 10.2516C5.76102 10.2516 4.70975 9.21502 4.70975 7.93663ZM3.43991 7.93663C3.43991 9.90608 5.05982 11.5025 7.0582 11.5025C9.05658 11.5025 10.6765 9.90608 10.6765 7.93663C10.6765 5.96719 9.05658 4.37074 7.0582 4.37074C5.05982 4.37074 3.43991 5.96719 3.43991 7.93663ZM9.97414 4.22935C9.97408 4.39417 10.0236 4.55531 10.1165 4.69239C10.2093 4.82946 10.3413 4.93633 10.4958 4.99946C10.6503 5.06259 10.8203 5.07916 10.9844 5.04707C11.1484 5.01498 11.2991 4.93568 11.4174 4.81918C11.5357 4.70268 11.6163 4.55423 11.649 4.39259C11.6817 4.23095 11.665 4.06339 11.6011 3.91109C11.5371 3.7588 11.4288 3.6286 11.2898 3.53698C11.1508 3.44536 10.9873 3.39642 10.8201 3.39635H10.8197C10.5955 3.39646 10.3806 3.48424 10.222 3.64043C10.0635 3.79661 9.97434 4.00843 9.97414 4.22935ZM4.21142 13.5892C3.52442 13.5584 3.15101 13.4456 2.90286 13.3504C2.57387 13.2241 2.33914 13.0738 2.09235 12.8309C1.84555 12.588 1.69278 12.3569 1.56527 12.0327C1.46854 11.7882 1.3541 11.4201 1.32287 10.7431C1.28871 10.0111 1.28189 9.79119 1.28189 7.93669C1.28189 6.08219 1.28927 5.86291 1.32287 5.1303C1.35416 4.45324 1.46944 4.08585 1.56527 3.84069C1.69335 3.51647 1.84589 3.28513 2.09235 3.04191C2.3388 2.79869 2.57331 2.64813 2.90286 2.52247C3.1509 2.42713 3.52442 2.31435 4.21142 2.28358C4.95417 2.24991 5.17729 2.24319 7.0582 2.24319C8.9391 2.24319 9.16244 2.25047 9.90582 2.28358C10.5928 2.31441 10.9656 2.42802 11.2144 2.52247C11.5434 2.64813 11.7781 2.79902 12.0249 3.04191C12.2717 3.2848 12.4239 3.51647 12.552 3.84069C12.6487 4.08513 12.7631 4.45324 12.7944 5.1303C12.8285 5.86291 12.8354 6.08219 12.8354 7.93669C12.8354 9.79119 12.8285 10.0105 12.7944 10.7431C12.7631 11.4201 12.6481 11.7881 12.552 12.0327C12.4239 12.3569 12.2714 12.5882 12.0249 12.8309C11.7784 13.0736 11.5434 13.2241 11.2144 13.3504C10.9663 13.4457 10.5928 13.5585 9.90582 13.5892C9.16306 13.6229 8.93994 13.6296 7.0582 13.6296C5.17645 13.6296 4.95395 13.6229 4.21142 13.5892ZM4.15307 1.03424C3.40294 1.06791 2.89035 1.18513 2.4427 1.3568C1.9791 1.53408 1.58663 1.77191 1.19446 2.1578C0.802277 2.54369 0.56157 2.93108 0.381687 3.38797C0.207498 3.82941 0.0885535 4.3343 0.0543922 5.07358C0.0196672 5.81402 0.0117188 6.05074 0.0117188 7.93663C0.0117188 9.82252 0.0196672 10.0592 0.0543922 10.7997C0.0885535 11.539 0.207498 12.0439 0.381687 12.4853C0.56157 12.9419 0.802334 13.3297 1.19446 13.7155C1.58658 14.1012 1.9791 14.3387 2.4427 14.5165C2.89119 14.6881 3.40294 14.8054 4.15307 14.839C4.90479 14.8727 5.1446 14.8811 7.0582 14.8811C8.9718 14.8811 9.212 14.8732 9.96332 14.839C10.7135 14.8054 11.2258 14.6881 11.6737 14.5165C12.137 14.3387 12.5298 14.1014 12.9219 13.7155C13.3141 13.3296 13.5543 12.9419 13.7347 12.4853C13.9089 12.0439 14.0284 11.539 14.062 10.7997C14.0962 10.0587 14.1041 9.82252 14.1041 7.93663C14.1041 6.05074 14.0962 5.81402 14.062 5.07358C14.0278 4.33424 13.9089 3.82913 13.7347 3.38797C13.5543 2.93135 13.3135 2.5443 12.9219 2.1578C12.5304 1.7713 12.137 1.53408 11.6743 1.3568C11.2258 1.18513 10.7135 1.06735 9.96388 1.03424C9.21256 1.00058 8.97236 0.992188 7.05876 0.992188C5.14516 0.992188 4.90479 1.00002 4.15307 1.03424Z"
                  fill="currentColor" />
              </svg>
            </a>

            <a href="javascript:;" class="w-9 h-9 flex justify-center items-center">
              <svg class="w-[1rem] h-[1rem] text-white" viewBox="0 0 13 12" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.8794 11.5527V3.86835H0.318893V11.5527H2.87967H2.8794ZM1.59968 2.81936C2.4924 2.81936 3.04817 2.2293 3.04817 1.49188C3.03146 0.737661 2.4924 0.164062 1.61666 0.164062C0.74032 0.164062 0.167969 0.737661 0.167969 1.49181C0.167969 2.22923 0.723543 2.8193 1.5829 2.8193H1.59948L1.59968 2.81936ZM4.29668 11.5527H6.85698V7.26187C6.85698 7.03251 6.87369 6.80255 6.94134 6.63873C7.12635 6.17968 7.54764 5.70449 8.25514 5.70449C9.18141 5.70449 9.55217 6.4091 9.55217 7.44222V11.5527H12.1124V7.14672C12.1124 4.78652 10.8494 3.68819 9.16483 3.68819C7.78372 3.68819 7.17715 4.45822 6.84014 4.98267H6.85718V3.86862H4.29681C4.33023 4.5895 4.29661 11.553 4.29661 11.553L4.29668 11.5527Z"
                  fill="currentColor" />
              </svg>
            </a>

            <a href="javascript:;" class="w-9 h-9 flex justify-center items-center">
              <svg class="w-[1.25rem] h-[0.875rem] text-white" viewBox="0 0 16 12" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M13.9346 1.13529C14.5684 1.30645 15.0665 1.80588 15.2349 2.43896C15.5413 3.58788 15.5413 5.98654 15.5413 5.98654C15.5413 5.98654 15.5413 8.3852 15.2349 9.53412C15.0642 10.1695 14.5661 10.669 13.9346 10.8378C12.7886 11.1449 8.19058 11.1449 8.19058 11.1449C8.19058 11.1449 3.59491 11.1449 2.44657 10.8378C1.81277 10.6666 1.31461 10.1672 1.14622 9.53412C0.839844 8.3852 0.839844 5.98654 0.839844 5.98654C0.839844 5.98654 0.839844 3.58788 1.14622 2.43896C1.31695 1.80353 1.81511 1.30411 2.44657 1.13529C3.59491 0.828125 8.19058 0.828125 8.19058 0.828125C8.19058 0.828125 12.7886 0.828125 13.9346 1.13529ZM10.541 5.98654L6.72178 8.19762V3.77545L10.541 5.98654Z"
                  fill="currentColor" />
              </svg>
            </a>

          </div>
        </div>
      </div>
    </footer>

    <!-- Social link -->
    <div class="fixed bottom-[20px] right-[20px] z-40 flex flex-col gap-5" id="section7">
      <div
        class="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full bg-[#1D394D] text-white transition-all duration-150 ease-in hover:scale-[0.80] min-[1024px]:h-[55px] min-[1024px]:w-[55px]">

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" class="w-[100%]">
          <path fill="currentColor" d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
        </svg>

      </div>
      <div
        class="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full bg-[#2ea729] text-white transition-all duration-150 ease-in hover:scale-[0.80] min-[1024px]:h-[55px] min-[1024px]:w-[55px]">
        <svg class="svg-inline--fa fa-whatsapp fa-w-14 w-[60%]" aria-hidden="true" focusable="false" data-prefix="fab"
          data-icon="whatsapp" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path class="" fill="currentColor"
            d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z">
          </path>
        </svg>
      </div>
    </div>

  </div>
</template>


<script lang="ts" setup>
import TextAreaCustom from '../../components/TextAreaCustom.vue';
import InputCustom from '../../components/InputCustom.vue';
import ButtonLoading from '../../components/ButtonLoading.vue';
import { comentaryRegexValidation, nameRegexValidation, textEmptyRegexValidation, validateForm } from '../../composable/validator';
import { ref, onMounted, onUnmounted, reactive, computed } from 'vue';
import { FAQ, FAQAllCfdiResponse } from '../../interfaces/faq/faq_all_response';

const faqAllQuest = ref<FAQ[]>([])
const isLoading = ref<boolean>(false);
const activeIndex = ref<number | null>(null);

const visibility = reactive<Visibility>({
  section1: false,
  section2: false,
  section3: false,
  section4: false,
  section5: false,
  section6: false,
  section7: false,
});

const form = reactive({
  name: '',
  email: '',
  comment: '',
  status: false,
  type: false
});

// Configuración del Intersection Observer
const opciones = {
  root: null,
  rootMargin: '0px',
  threshold: 0, // 80% de intersección para activar
};


const formValido = computed(() => {
  return validateForm(
    {
      name: form.name,
      status: form.status
    },
    {
      name: nameRegexValidation,
      status: nameRegexValidation
    }
  )
});

// Crear el Intersection Observer para manejar la visibilidad de múltiples elementos
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const sectionId = entry.target.id as keyof Visibility; // Asegúrate de que `sectionId` es una clave de Visibility

    if (entry.isIntersecting) {
      visibility[sectionId] = true; // Actualiza la visibilidad según el ID
    } else {
      visibility[sectionId] = false;
    }
  });
}, opciones);


function toggleAccordion(index: number) {
  activeIndex.value = activeIndex.value === index ? null : index;
}

async function getBlogs() {
  let query = `query faq {
  faqs(orderBy: createdAt_DESC, last: 100) {
    title
    text {
      html
      markdown
      raw
      text
    }
    id
  }
}`
  // API CALL
  try {
    let res = await fetch(
      // 'https://api-us-west-2.hygraph.com/v2/cln93v6c9168901ukf44r4tyv/master',
      'https://api-us-west-2.hygraph.com/v2/cm2xfy7jh052307wawy5a538s/master',

      {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({ query })
      }
    )
    res = await res.json()
    return res
  } catch (error) {
    console.log(error)
  }
}

onMounted(async () => {
  // Selecciona los elementos que deseas observar
  const elementosObservados = [
    document.querySelector('#section1'),
    document.querySelector('#section2'),
    document.querySelector('#section3'),
    document.querySelector('#section4'),
    document.querySelector('#section5'),
    document.querySelector('#section6'),
    document.querySelector('#section7')
  ];

  // Observa cada elemento si existe en el DOM
  elementosObservados.forEach(elemento => {
    if (elemento) observer.observe(elemento);
  });

  const data = await getBlogs();

  console.log('Datos obtenidos de getBlogs:', data);

  if (data) {
    const result = data as FAQAllCfdiResponse;
    console.log('Resultado después del casting:', result);

    if (result.data && result.data.faqs) {
      faqAllQuest.value = result.data.faqs; // Asigna los FAQs directamente

      // Acceder al texto de la primera FAQ
      if (faqAllQuest.value.length > 0) {
        const firstFAQ = faqAllQuest.value[0];

        // Acceder a los diferentes formatos de texto
        const textHTML = firstFAQ.text?.html; // Accediendo al HTML
        const textMarkdown = firstFAQ.text?.markdown; // Accediendo al Markdown
        const textRaw = firstFAQ.text?.raw?.children![0]?.children![0]?.text; // Accediendo al texto crudo

        console.log('Texto HTML:', textHTML);
        console.log('Texto Markdown:', textMarkdown);
        console.log('Texto Crudo:', textRaw);
      }
    } else {
      console.error("No se encontraron faqs en la respuesta.");
    }
  } else {
    console.error("La llamada a getBlogs no devolvió datos.");
  }
});

onUnmounted(() => {
  observer.disconnect(); // Limpia el observer al desmontar el componente
});
</script>


<style>
:root {
  --background: 86, 113, 254;
  --size: 300px;
  --duration: 3s;
  --scale: 4;
  --opacity: 1;
}


.status__icon {
  width: var(--size);
  height: var(--size);
  background: rgb(var(--background));
  border-radius: 100%;
  position: relative;
  animation: pulse-shadow var(--duration) calc(2 * var(--duration) / 3) linear infinite
}

.status__icon::after,
.status__icon::before {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgb(var(--background));
  border-radius: 100%;
}

.status__icon:after {
  animation: pulse var(--duration) linear infinite
}

.status__icon:before {
  animation: pulse var(--duration) calc(var(--duration) / 3) linear infinite
}

details>summary {
  outline: none;
  cursor: pointer;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: var(--opacity);
  }

  100% {
    transform: scale(var(--scale));
    opacity: 0;
  }
}

@keyframes pulse-shadow {
  0% {
    box-shadow: 0 0 0 0 rgba(var(--background), var(--opacity))
  }

  100% {
    box-shadow: 0 0 0 calc((var(--scale) - 1) * var(--size) / 2) rgba(var(--background), 0)
  }
}

.swiper-slide-opacity {
  opacity: 0.5;
  /* Opacidad inicial */
  transition: opacity 0.3s ease;
}

.swiper-slide-active {
  opacity: 1 !important;
  /* Opacidad completa solo para el slide activo */
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
