<template>
  <div class="bg-white pt-[100px] !font-muller">

    <!-- Section 6 -->
    <!-- <section class="h-max bg-[#F3F5F6] font-muller pt-[100px]" id="section6">
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
                        :class="[`${visibility.section6 ? 'animate-fadeLeft' : 'animate-fadeLeftOut opacity-0'} text-[1.7rem] md:text-[2rem] lg:text-[2rem] xl:text-[2.6rem] 2xl:text-[2.8rem] font-bold text-bluecf`]">
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
                            bg-label-dark="bg-white" color-border="border-[#D4D4D4]"
                            :regexValidation="[textEmptyRegexValidation]" />
                        </div>
                        <div
                          :class="[`${visibility.section6 ? 'animate-fadeLeft' : 'animate-fadeLeftOut opacity-0'} flex flex-col md:flex-row`]">
                          <InputCustom key="email" id="email" type="email" label="Email*" v-model="form.email"
                            focus-color-border="focus:border-[#D4D4D4]" color-text="text-[#D4D4D4]"
                            border-radius="rounded-full" bg-label="bg-white" bg-input="bg-white"
                            bg-label-dark="bg-white" color-border="border-[#D4D4D4]"
                            :regexValidation="[textEmptyRegexValidation]" />
                        </div>
                        <div
                          :class="[`${visibility.section6 ? 'animate-fadeLeft' : 'animate-fadeLeftOut opacity-0'} hidden md:flex flex-col w-full`]">
                          <TextAreaCustom key="description" id="description" type="text" label="Descripción"
                            v-model="form.comment" :value="form.comment" focus-color-border="focus:border-[#D4D4D4]"
                            color-text="!text-[#D4D4D4]" border-radius="rounded-[20px]" bg-label="bg-white"
                            bg-input="bg-white" bg-label-dark="bg-white" color-border="border-[#D4D4D4]"
                            :regexValidation="[comentaryRegexValidation]" rows="12" />

                        </div>

                        <div
                          :class="[`${visibility.section6 ? 'animate-fadeLeft' : 'animate-fadeLeftOut opacity-0'} flex md:hidden flex-col w-full`]">
                          <TextAreaCustom key="description" id="description" type="text" label="Descripción"
                            v-model="form.comment" :value="form.comment" focus-color-border="focus:border-[#D4D4D4]"
                            color-text="!text-[#D4D4D4]" border-radius="rounded-[20px]" bg-label="bg-white"
                            bg-input="bg-white" bg-label-dark="bg-white" color-border="border-[#D4D4D4]"
                            :regexValidation="[comentaryRegexValidation]" rows="5" />

                        </div>
                        <div
                          :class="[`${visibility.section6 ? 'animate-fadeLeft' : 'animate-fadeLeftOut opacity-0'} flex w-full justify-end`]">
                          <ButtonLoading width="!w-[50%] md:!w-[40%] 2xl:!w-[30%]" label="Enviar"
                            border-radius="rounded-full" :disable="!formValido" :is-loading="isLoading"
                            color-button="!bg-bluelightcf" color-button-hover="!bg-bluelightcf/50" />
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
    </section> -->
    <SectionSix/>

    <!-- Section 7 -->
    <section class="pb-24 pt-24" v-if="faqAllQuest.length != 0">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          class="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full">
          <div class="w-full">

            <div
              class="mb-1 lg:mb-3 bg-gradient-to-tl from-[#23465E] to-[#4992C4] py-[30px] rounded-[30px_30px_0px_0px] flex justify-center items-center">
              <h6
                class="text-center text-white text-[1.5rem] md:text-[1.7rem] lg:text-[1.9rem] xl:text-[2rem] 2xl:text-[2.2rem] font-bold">
                Preguntas frecuentes 😉</h6>
            </div>

            <div v-for="(item, index) in faqAllQuest" :key="index" class="" :class="[
                'border-b-[2px] border-[#04B2CA] py-10',
                index === faqAllQuest.length - 1 ? 'border-b-[2px] border-transparent' : 'border-b-[2px] border-[#04B2CA]'
              ]" >
              <button @click="toggleAccordion(index)"
                class="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 w-full transition duration-500">
                <h5 class="text-bluecf text-left text-[1.1rem] sm:text-[1.2rem]  md:text-[1.4rem] xl:text-[1.6rem] 2xl:text-[1.8rem] font-bold">
                  {{ item.title }}</h5>
                <svg
                  :class="[`${activeIndex == index ? 'rotate-180' : 'rotate-0'} w-[40px] lg:w-[40px] xl:w-[40px] 2xl:w-[50px] h-[40px] lg:h-[40px] xl:h-[40px] 2xl:h-[50px] text-bluecf transition-transform duration-[0.6s] transform`]"
                  viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                    stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </button>

              <div
                :class="[`${activeIndex == index ? 'max-h-[305vh] opacity-100' : 'max-h-[0px] opacity-0'} accordion-content overflow-hidden transition-all ease-in-out duration-[0.6s]`]">
                <p class="text-base font-normal text-bluecf my-4" v-html="item.text?.markdown"></p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->

    <FooterPage/>
    <!-- Social link -->
    <div class="fixed bottom-[20px] right-[20px] z-40 flex flex-col gap-5" id="section7">
      <div
        class="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full bg-bluecf text-white transition-all duration-150 ease-in hover:scale-[0.80] min-[1024px]:h-[55px] min-[1024px]:w-[55px]">

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
import { ref, onMounted, onUnmounted, reactive} from 'vue';
import { FAQ, FAQAllCfdiResponse } from '../../interfaces/faq/faq_all_response';
import SectionSix from '../../components/sections/SectionSix.vue';
import FooterPage from '../../components/sections/FooterPage.vue';

const faqAllQuest = ref<FAQ[]>([])
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

// Configuración del Intersection Observer
const opciones = {
  root: null,
  rootMargin: '0px',
  threshold: 0, // 80% de intersección para activar
};

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
