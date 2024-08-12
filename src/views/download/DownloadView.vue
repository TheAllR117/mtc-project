<script lang="ts" setup>
import InputCustom from '../../components/InputCustom.vue';
import ButtonLoading from '../../components/ButtonLoading.vue';
import { nameRegexValidation, textEmptyRegexValidation, validateForm } from '../../composable/validator';
import { ref } from 'vue';
import { reactive } from 'vue';
import { computed } from 'vue';

const search = ref<string>('')

const isLoading = ref<boolean>(false)
const form = reactive({
  name: '',
  icon: '',
  image: '',
  status: false,
  type: false
})

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
})

</script>

<template>
  <div class="h-full w-full">

    <!-- Footer container -->
    <footer class="font-popins bg-[#16215b] py-5 text-center lg:text-left dark:text-white">
      <div
        class="mx-auto py-10 text-center sm:max-w-[540px] md:max-w-[720px] md:text-left lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px]">
        <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div class="px-5 md:px-0">
            <p class="mb-5 text-sm">Suscribete para recibir ideas, noticias, tendencias y mucho mas para tu negocio</p>
            <div class="mb-2.5 h-auto">
              <InputCustom key="search" id="search" type="email" label="Ingresa tu correo" v-model="search"
                focus-color-border="focus:border-white" color-text="text-white" border-radius="rounded-full"
                bg-label="bg-[#16215b]" bg-input="bg-[#16215b]" bg-label-dark="bg-[#16215b]" color-border="border-white"
                :regexValidation="[textEmptyRegexValidation]" />
            </div>
            <div class="flex w-full justify-center md:pb-10">
              <ButtonLoading width="!w-full" label="Guardar" border-radius="rounded-full" :disable="!formValido"
                :is-loading="isLoading" color-button="!bg-[#0e33ca]" color-button-hover="!bg-[#0e33ca]/50" />
            </div>
            <p class="text-sm max-[768px]:hidden">Av. Vicente Guerrero 1304 2do. Piso Col. Lomas de Cortés, 62240
              Cuernavaca, Mor.</p>
          </div>

          <div class="flex w-full flex-col justify-center md:ml-8 md:justify-start">
            <h6 class="mb-4 flex justify-center text-sm font-bold md:justify-start">Ventas</h6>
            <div class="mb-4">
              <ul class="text-sm">
                <li>Telefono: 777 311 3066</li>
                <li>Whatsapp: 777 307 8320</li>
                <li>ventas@mtcenter.com.mx</li>
              </ul>
            </div>
            <div class="mb-[-10px] flex w-full flex-col items-center justify-between md:mb-10 md:!place-items-start">
              <div class="mb-2 text-sm">
                <p class="text-sm font-bold">Conecta con nosotros</p>
              </div>
              <!-- Social network icons container -->
              <div class="flex justify-between">
                <a href="#!" class="me-6 rounded-full border-[1.8px] border-white p-1 [&>svg]:h-3 [&>svg]:w-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 320 512">
                    <path
                      d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                  </svg>
                </a>
                <a href="#!" class="me-6 rounded-full border-[1.8px] border-white p-1 [&>svg]:h-3 [&>svg]:w-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                    <path
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </a>
                <a href="#!" class="rounded-full border-[1.8px] border-white p-1 md:me-6 [&>svg]:h-3 [&>svg]:w-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                    <path
                      d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                </a>
              </div>
            </div>
            <div class="max-[768px]:hidden">
              <ul class="text-sm">
                <li>Aviso de privacidad</li>
                <li>Términos y condiciones</li>
              </ul>
            </div>
          </div>
          <!-- Useful links section -->
          <div>
            <h6 class="mb-4 flex justify-center text-sm font-bold md:justify-start">Atención a clientes</h6>
            <div class="mb-4">
              <ul class="text-sm">
                <li>Telefono: 777 311 3066</li>
                <li>atnclientes@mtcenter.com.mx</li>
              </ul>
            </div>
            <div class="mb-4">
              <ul class="text-sm">
                <li class="mb-3 text-sm font-bold md:mb-0">
                  Dudas sobre liberación de <br class="hidden md:block" />
                  depósitos
                </li>
                <li>Whatsapp: 777 789 1913</li>
              </ul>
            </div>
            <div class="mb-[-10px] md:mb-4">
              <ul class="text-sm">
                <li class="mb-4 text-sm font-bold">Obtén asistencia con:</li>
                <li>
                  <a href="https://play.google.com/store/apps/details?id=com.digitalquo.onexpo"
                    onclick="redirectToAppStore('googlePlay')"
                    class="inline-flex w-auto items-center justify-center rounded-md border-2 border-white bg-transparent px-10 py-2 text-white transition-all duration-150 ease-in hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 sm:w-auto">
                    <svg class="mr-3 h-3 w-3 sm:h-5 sm:w-5" aria-hidden="true" focusable="false" data-prefix="fab"
                      data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z">
                      </path>
                    </svg>
                    <div class="text-left">
                      <div class="font-popins text-xs font-semibold">Play Store</div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <!-- Contact section -->
          <div>
            <h6 class="mb-4 flex justify-center text-sm font-bold md:justify-start">Descarga la plataforma</h6>
            <div
              class="flex flex-col !place-items-center items-center justify-center md:!place-items-start md:justify-start">
              <a href="https://apps.apple.com/mx/app/onexpo-puebla/id1670473347"
                onclick="redirectToAppStore('appStore')"
                class="mb-5 inline-flex w-auto items-center justify-center rounded-md border-2 border-white bg-transparent px-10 py-2 text-white transition-all duration-150 ease-in hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 sm:w-auto">
                <svg class="mr-3 h-3 w-3 sm:h-5 sm:w-5" aria-hidden="true" focusable="false" data-prefix="fab"
                  data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z">
                  </path>
                </svg>
                <div class="text-left">
                  <div class="font-popins text-xs font-semibold">App Store</div>
                </div>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.digitalquo.onexpo"
                onclick="redirectToAppStore('googlePlay')"
                class="mb-5 inline-flex w-auto items-center justify-center rounded-md border-2 border-white bg-transparent px-10 py-2 text-white transition-all duration-150 ease-in hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 sm:w-auto">
                <svg class="mr-3 h-3 w-3 sm:h-5 sm:w-5" aria-hidden="true" focusable="false" data-prefix="fab"
                  data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z">
                  </path>
                </svg>
                <div class="text-left">
                  <div class="font-popins text-xs font-semibold">Play Store</div>
                </div>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.digitalquo.onexpo"
                onclick="redirectToAppStore('googlePlay')"
                class="inline-flex w-auto items-center justify-center rounded-md border-2 border-white bg-transparent px-10 py-2 text-white transition-all duration-150 ease-in hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 sm:w-auto">
                <svg class="mr-3 h-3 w-3 sm:h-5 sm:w-5" aria-hidden="true" focusable="false" data-prefix="fab"
                  data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z">
                  </path>
                </svg>
                <div class="text-left">
                  <div class="font-popins text-xs font-semibold">Play Store</div>
                </div>
              </a>
            </div>
          </div>
          <div class="mb-[-10px] md:mb-4 md:hidden">
            <ul class="text-sm">
              <li>Aviso de privacidad</li>
              <li>Términos y condiciones</li>
            </ul>
          </div>
          <div class="mb-[-10px] md:mb-4 md:hidden">
            <p class="text-sm">
              Av. Vicente Guerrero 1304 2do. Piso Col. Lomas de <br />
              Cortés, 62240 Cuernavaca, Mor.
            </p>
          </div>
        </div>
      </div>
    </footer>
    <!-- Social link -->
    <div
      class="fixed bottom-[20px] right-[20px] z-40 flex flex-col gap-10 min-[1024px]:bottom-[180px] min-[1024px]:right-[50px]">
      <div
        class="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full bg-[#2d82fc] text-white transition-all duration-150 ease-in hover:scale-[0.80] min-[1024px]:h-[65px] min-[1024px]:w-[65px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-[60%]">
          <path class="" fill="currentColor"
            d="M256.6 8C116.5 8 8 110.3 8 248.6c0 72.3 29.7 134.8 78.1 177.9 8.4 7.5 6.6 11.9 8.1 58.2A19.9 19.9 0 0 0 122 502.3c52.9-23.3 53.6-25.1 62.6-22.7C337.9 521.8 504 423.7 504 248.6 504 110.3 396.6 8 256.6 8zm149.2 185.1l-73 115.6a37.4 37.4 0 0 1 -53.9 9.9l-58.1-43.5a15 15 0 0 0 -18 0l-78.4 59.4c-10.5 7.9-24.2-4.6-17.1-15.7l73-115.6a37.4 37.4 0 0 1 53.9-9.9l58.1 43.5a15 15 0 0 0 18 0l78.4-59.4c10.4-8 24.1 4.5 17.1 15.6z" />
        </svg>
      </div>
      <div
        class="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full bg-[#5433cb] text-white transition-all duration-150 ease-in hover:scale-[0.80] min-[1024px]:h-[65px] min-[1024px]:w-[65px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-[60%] rotate-[260deg]">
          <path class="" fill="currentColor"
            d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
        </svg>
      </div>
      <div
        class="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full bg-[#2ea729] text-white transition-all duration-150 ease-in hover:scale-[0.80] min-[1024px]:h-[65px] min-[1024px]:w-[65px]">
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

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
