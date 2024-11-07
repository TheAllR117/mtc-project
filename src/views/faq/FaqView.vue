<template>
  <div class="bg-white pt-[100px] !font-muller">

    <SectionSix />

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
                Preguntas frecuentes <span
                  class="bg-[url(/assets/img/emoji-1.webp)] bg-cover text-transparent">**</span></h6>
            </div>

            <div v-for="(item, index) in faqAllQuest" :key="index" class="" :class="[
              'border-b-[2px] border-[#04B2CA] py-10',
              index === faqAllQuest.length - 1 ? 'border-b-[2px] border-transparent' : 'border-b-[2px] border-[#04B2CA]'
            ]">
              <button @click="toggleAccordion(index)"
                class="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 w-full transition duration-500">
                <h5
                  class="text-bluecf text-left text-[1.1rem] sm:text-[1.2rem]  md:text-[1.4rem] xl:text-[1.6rem] 2xl:text-[1.8rem] font-bold">
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

    <FooterPage />
    <!-- Social link -->
    <SocialLinks />

  </div>
</template>


<script lang="ts" setup>
import { ref, onMounted, onUnmounted, reactive } from 'vue';
import { FAQ, FAQAllCfdiResponse } from '../../interfaces/faq/faq_all_response';
import SectionSix from '../../components/sections/SectionSix.vue';
import FooterPage from '../../components/sections/FooterPage.vue';
import SocialLinks from '../../components/sections/SocialLinks.vue';
import { onBeforeMount } from 'vue';

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


});

onUnmounted(() => {
  observer.disconnect(); // Limpia el observer al desmontar el componente
});


onBeforeMount(async () => {
  const data = await getBlogs();

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
})

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
