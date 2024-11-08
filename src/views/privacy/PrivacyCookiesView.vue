<template>
    <div class="bg-white pt-[90px] !font-muller">

        <section class="h-[280px] md:h-[280px] bg-gradient-to-tl from-bluecf to-bluemdcf" id="section4">
            <div
                class="w-full h-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[850px] md:text-left lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px] flex justify-center items-center">
                <div class="relative m-0 w-full h-auto flex justify-center items-center">
                    <div
                        class="absolute top-[50%] left-0 translate-y-[-50%] w-full h-auto flex flex-col md:flex-row justify-between items-center px-2 md:px-0">

                        <div class="w-full h-full flex flex-col justify-center items-center">
                            <h2
                                :class="[`${visibility.section4 ? 'animate-fadeRight' : 'animate-fadeRightOut opacity-0'} text-white text-[2rem] sm:text-[2.7rem] md: lg:text-[3rem] xl:text-[3.2rem] 2xl:text-[3.5rem] font-bold font-muller leading-[2.3rem] lg:leading-[3.3rem] mb-2`]">
                                Politica de Cookies</h2>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <!-- Section 7 -->
        <section
            class="pb-24 pt-12 mx-auto sm:max-w-[540px] md:max-w-[850px] md:text-left lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px]"
            v-if="politicsAll.length != 0">

            <div class="w-full" v-html="politicsAll[1].contentPolitics?.markdown"></div>
            <div class="max-lg:px-6 hidden">
                <h1 class="text-bluecf font-bold text-[1.7em] md:text-[3em] mb-3"><span
                        class="text-bluelightcf font-bold"></span></h1>
                <p class="text-bluecf font-medium leading-normal text-[0.8em] md:text-base mb-5"><span
                        class="text-bluelightcf font-medium"> </span><br><a href="/privacypolicy" class=""><span
                            class="transition-all duration-150 ease-in font-medium text-bluelightcf hover:drop-shadow-[0_0_0.15em_#00FFCE]"></span></a>
                </p>
                <h2 class="text-bluelightcf font-bold text-[1.5em] md:text-[2.2em] lg:text-[2.7em] mb-3">1. Descripción
                </h2>
                <p class="text-bluecf text-[0.8em] md:text-base font-medium mb-5"> </p>
                <h2 class="text-bluelightcf font-bold text-[1.5em] md:text-[2.2em] lg:text-[2.7em] mb-3"></h2>
                <p class="text-bluecf text-[0.8em] md:text-base font-medium mb-5"> </p>
                <h2 class="text-bluelightcf font-bold text-[1.5em] md:text-[2.2em] lg:text-[2.7em] mb-3"></h2>
                <p class="text-bluecf text-[0.8em] md:text-base font-medium mb-5"> <a
                        href="mailto:hola@digitalquo.com"><span
                            class="transition-all duration-150 ease-in font-medium text-bluelightcf hover:drop-shadow-[0_0_0.15em_#00FFCE]"></span></a>.
                </p>
                <h2 class="text-bluelightcf font-bold text-[1.5em] md:text-[2.2em] lg:text-[2.7em] mb-3"></h2>
                <p class="text-bluecf text-[0.8em] md:text-base font-medium mb-5"> </p>
                <h3 class="text-bluecf font-bold text-[1.4em] md:text-[1.6em] lg:text-[2em]"></h3>
                <p class="text-bluecf text-[0.8em] md:text-base font-medium mb-5"> </p>
                <h3 class="text-bluecf font-bold text-[1.4em] md:text-[1.6em] lg:text-[2em]"></h3>
                <p class="text-bluecf text-[0.8em] md:text-base font-medium mb-5"> </p>
                <h3 class="text-bluecf font-bold text-[1.4em] md:text-[1.6em] lg:text-[2em]"> </h3>
                <p class="text-bluecf text-[0.8em] md:text-base font-medium mb-5"> <a
                        href="mailto:hola@digitalquo.com"><span
                            class="transition-all duration-150 ease-in font-medium text-bluelightcf hover:drop-shadow-[0_0_0.15em_#00FFCE]"></span></a>.
                </p>
                <h3 class="text-bluecf font-bold text-[1.4em] md:text-[1.6em] lg:text-[2em]"></h3>
                <p class="text-bluecf text-[0.8em] md:text-base font-medium mb-5"> </p>
                <h2 class="text-bluelightcf font-bold text-[1.5em] md:text-[2.2em] lg:text-[2.7em] mb-3">
                </h2>
                <h3 class="text-bluecf font-bold text-[1.4em] md:text-[1.6em] lg:text-[2em]"></h3>
                <h3 class="text-bluecf font-bold text-[1.4em] md:text-[1.6em] lg:text-[2em]"></h3>
                <p class="text-bluecf text-[0.8em] md:text-base font-medium mb-5">  </p>
                <h3 class="text-bluecf font-bold text-[1.4em] md:text-[1.6em] lg:text-[2em]"></h3>
                <p class="text-bluecf text-[0.8em] md:text-base font-medium mb-5">  </p>
                <h2 class="text-bluelightcf font-bold text-[1.5em] md:text-[2.2em] lg:text-[2.7em] mb-3"></h2>
                <p class="text-bluecf text-[0.8em] md:text-base font-medium mb-5"> 
                </p>
                <h2 class="text-bluelightcf font-bold text-[1.5em] md:text-[2.2em] lg:text-[2.7em] mb-3"></h2>
                <h3 class="text-bluecf font-bold text-[1.4em] md:text-[1.6em] lg:text-[2em]"> </h3>
                <p class="text-bluecf text-[0.8em] md:text-base font-medium mb-5"> 
                </p>
                <h3 class="text-bluecf font-bold text-[1.4em] md:text-[1.6em] lg:text-[2em]">
                </h3>
                <p class="text-bluecf text-[0.8em] md:text-base font-medium mb-5"> </p>
                <h2 class="text-bluelightcf font-bold text-[1.5em] md:text-[2.2em] lg:text-[2.7em] mb-3">
                </h2>
                <h3 class="text-bluecf font-bold text-[1.4em] md:text-[1.6em] lg:text-[2em]"></h3>
                <p class="text-bluecf text-[0.8em] md:text-base font-medium mb-5"> </p>
                <h3 class="text-bluecf font-bold text-[1.4em] md:text-[1.6em] lg:text-[2em]"> </h3>
                <p class="text-bluecf text-[0.8em] md:text-base font-medium mb-5"> </p>
                <h3 class="text-bluecf font-bold text-[1.4em] md:text-[1.6em] lg:text-[2em]"> </h3>
                <p class="text-bluecf text-[0.8em] md:text-base font-medium mb-5"> </p>
                <h3 class="text-bluecf font-bold text-[1.4em] md:text-[1.6em] lg:text-[2em]"></h3>
                <p class="text-bluecf text-[0.8em] md:text-base font-medium"> </p>
                <ul class="list-decimal text-bluecf ml-5 font-medium text-[0.8em] md:text-base">
                    <li class="text-bluecf">  </li>
                    <li class="text-bluecf">  </li>
                    <li class="text-bluecf"> S </li>
                </ul>
                <p class="text-bluecf text-[0.8em] md:text-base font-medium mb-5">
                </p>
                <h3 class="text-bluecf font-bold text-[1.4em] md:text-[1.6em] lg:text-[2em]"> </h3>
                <p class="text-bluecf text-[0.8em] md:text-base font-medium mb-5">  </p>
                <h3 class="text-bluecf font-bold text-[1.4em] md:text-[1.6em] lg:text-[2em]">
                </h3>
                <p class="text-bluecf text-[0.8em] md:text-base font-medium mb-5"> </p>
                <h2 class="text-bluelightcf font-bold text-[1.5em] md:text-[2.2em] lg:text-[2.7em] mb-3"></h2>
                <p class="text-bluecf text-[0.8em] md:text-base font-medium"></p>
                <ul class="list-disc ml-5 text-bluecf mb-5 text-[0.8em] md:text-base font-medium">
                    <li> </li>
                    <li> </li>
                    <li> </li>
                    <li></li>
                    <li> </li>
                    <li> </li>
                    <li> </li>
                    <li> </li>
                    <li> </li>
                </ul>
                <h2 class="text-bluelightcf font-bold text-[1.5em] md:text-[2.2em] lg:text-[2.7em] mb-3"></h2>
                <p class="text-bluecf text-[0.8em] md:text-base font-medium mb-5"> </p>
                <h2 class="text-bluelightcf font-bold text-[1.5em] md:text-[2.2em] lg:text-[2.7em] mb-3"></h2>
                <h3 class="text-bluecf font-bold text-[1.4em] md:text-[1.6em] lg:text-[2em]"></h3>
                <p class="text-bluecf text-[0.8em] md:text-base font-medium mb-5"> </p>
                <h3 class="text-bluecf font-bold text-[1.4em] md:text-[1.6em] lg:text-[2em]"></h3>
                <p class="text-bluecf text-[0.8em] md:text-base font-medium mb-5"> <a
                        href="mailto:hola@digitalquo.com"><span
                            class="transition-all duration-150 ease-in font-medium text-bluelightcf hover:drop-shadow-[0_0_0.15em_#00FFCE]"></span></a>.
                </p>
                <h3 class="text-bluecf font-bold text-[1.4em] md:text-[1.6em] lg:text-[2em]"></h3>
                <p class="text-bluecf text-[0.8em] md:text-base font-medium mb-5"> </p>
                <h3 class="text-bluecf font-bold text-[1.4em] md:text-[1.6em] lg:text-[2em]"></h3>
                <p class="text-bluecf text-[0.8em] md:text-base font-medium mb-5">
                </p>
                <h2 class="text-bluelightcf font-bold text-[1.5em] md:text-[2.2em] lg:text-[2.7em] mb-3"></h2>
                <p class="text-bluecf text-[0.8em] md:text-base font-medium mb-5"> </p>
                <h2 class="text-bluelightcf font-bold text-[1.5em] md:text-[2.2em] lg:text-[2.7em] mb-3"> </h2>
                <p class="text-bluecf text-[0.8em] md:text-base font-medium mb-5"> </p>
                <h2 class="text-bluelightcf font-bold text-[1.5em] md:text-[2.2em] lg:text-[2.7em] mb-3"></h2>
                <p class="text-bluecf text-[0.8em] md:text-base font-medium mb-5"> </p>
                <h2 class="text-bluelightcf font-bold text-[1.5em] md:text-[2.2em] lg:text-[2.7em] mb-3"></h2>
                <p class="text-bluecf text-[0.8em] md:text-base font-medium mb-5">

                    <br>
                </p>
                <h2 class="text-bluelightcf font-bold text-[1.5em] md:text-[2.2em] lg:text-[2.7em] mb-3"></h2>
                <p class="text-bluecf text-[0.8em] md:text-base font-medium mb-5"></p>
                <h3 class="text-bluecf font-bold text-[1.4em] md:text-[1.6em] lg:text-[2em]"></h3>
                <p class="text-bluecf text-[0.8em] md:text-base font-medium mb-5"> </p>
                <h3 class="text-bluecf font-bold text-[1.4em] md:text-[1.6em] lg:text-[2em]"> </h3>
                <p class="text-bluecf text-[0.8em] md:text-base font-medium mb-5"> </p>
                <h3 class="text-bluecf font-bold text-[1.4em] md:text-[1.6em] lg:text-[2em]">
                </h3>
                <p class="text-bluecf text-[0.8em] md:text-base font-medium mb-5"> <a
                        href="mailto:hola@digitalquo.com"><span
                            class="transition-all duration-150 ease-in font-medium text-bluelightcf hover:drop-shadow-[0_0_0.15em_#00FFCE]"></span></a>
                    <a href="mailto:hola@digitalquo.com"><span
                            class="transition-all duration-150 ease-in font-medium text-bluelightcf hover:drop-shadow-[0_0_0.15em_#00FFCE]"></span></a>
                </p>
                <h3 class="text-bluecf font-bold text-[1.4em] md:text-[1.6em] lg:text-[2em]"></h3>
                <p class="text-bluecf text-[0.8em] md:text-base font-medium mb-5"> </p>
            </div>
        </section>

        <!-- Footer -->

        <FooterPage />
        <!-- Social link -->
        <SocialLinks />

    </div>
</template>


<script lang="ts" setup>
import { onMounted, onUnmounted, reactive, ref } from 'vue';
import FooterPage from '../../components/sections/FooterPage.vue';
import SocialLinks from '../../components/sections/SocialLinks.vue';
import { Politic } from '../../interfaces/politics/politics_all_response';
import { onBeforeMount } from 'vue';

const politicsAll = ref<Politic[]>([]);

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
    const politicsData = await fetchData(`query Politics { politics (orderBy: createdAt_ASC) { contentPolitics { markdown }} }`);
    if (politicsData?.data?.politics) politicsAll.value = politicsData.data.politics;
}

onBeforeMount(() => {
    loadData();
})

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