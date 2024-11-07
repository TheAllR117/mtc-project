<template>
  <section
    class="h-dvh flex items-stretch bg-no-repeat bg-cover relative text-white bg-gradient-to-br from-bluecf to-[#5083C2] !font-muller p-5">

    <div
      class="hidden md:flex lg:w-1/2 w-full items-center justify-center text-center md:px-16 px-0 z-1 bg-transparent rounded-[20px] relative">
      <img src="/assets/img/bg-login.webp" alt="" class="w-[500px] floating">

      <!-- <img class="w-[500px] floating" v-lazy="{
        src: '/assets/img/bg-login.webp',
        loading: '/assets/img/placeholder.webp',
        error: '/assets/img/placeholder.webp',
        delay: 0
      }" loading="lazy" alt="" /> -->
    </div>

    <div
      class="lg:w-1/2 w-full flex items-center justify-center text-center px-8 md:px-10 xl:px-14 2xl:px-16 z-1 bg-bluecf rounded-[20px] relative">
      <div class="w-full py-6 z-20">
        <div class="text-left md:w-2/3 w-full px-0 mx-auto pb-0">
          <h1 class="text-3xl font-semibold">Bienvenido</h1>
        </div>

        <form @submit.prevent="login" class="md:w-2/3 w-full px-0 mx-auto">
          <div class="mt-6">
            <InputCustom key="email" id="email" type="email" label="Email" v-model="form.email" bg-label="bg-white"
              bg-label-dark="bg-white" focus-color-border="focus:border-white" success-color-text="text-[#15082B]"
              color-border="border-white" color-text="text-[#15082B]" bg-input="bg-white"
              :regexValidation="[emailRegexValidation]"
              svg="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
          </div>

          <div class="mt-6">
            <InputCustom key="password" id="password" type="password" label="Contraseña"
              :msgError="['La contraseña debe tener al menos 8 caracteres']" v-model="form.password" bg-label="bg-white"
              bg-label-dark="bg-white" success-color-text="text-[#15082B]" focus-color-border="focus:border-white"
              color-border="border-white" color-text="text-[#15082B]" bg-input="bg-white"
              :regexValidation="[passwordV4RegexValidation]"
              svg="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
          </div>

          <div class="flex flex-col md:flex-row justify-between pt-4 max-md:gap-y-5">
            <ButtonLoading label="Iniciar sesión" :disable="!formValido" :is-loading="isLoading"
              width="!w-full md:!w-[60%]" width-loading="!w-2/12" border-radius="rounded-[25px]"
              color-button="!bg-bluelightcf" color-button-hover="!bg-[#04B2CA80]" color-text="text-white"
              size-text="text-[0.8em]" />

            <router-link to="/register"
              class="font-muller flex justify-center items-center transition-all ease-in duration-500 border-2 border-[#04B2CA] rounded-[25px] max-md:py-3 px-7 w-full md:w-[37%] hover:bg-bluelightcf hover:text-white uppercase font-black text-[0.8em] cursor-pointer">
              Registrarme
            </router-link>
          </div>

        </form>
      </div>
    </div>
  </section>
  <ModalCustom :is-open="showModal" :close-modal="closeModal" :title="messageModal.title"
    :description="messageModal.description" />
</template>

<script lang="ts" setup>
import ButtonLoading from '../../components/ButtonLoading.vue'
import InputCustom from '../../components/InputCustom.vue'
import ModalCustom from '../../components/ModalCustom.vue'
// import { useRouter } from 'vue-router'
import { computed, reactive, ref } from 'vue'
import {
  emailRegexValidation,
  passwordV4RegexValidation,
  validateForm
} from '../../composable/validator'


// const router = useRouter()

const form = reactive({
  email: null,
  password: null
})

const messageModal = ref({
  title: '',
  description: ['']
})

const isLoading = ref<boolean>(false)
const showModal = ref<boolean>(false)

function closeModal() {
  showModal.value = false
}

const formValido = computed(() => {
  return validateForm(form, {
    email: emailRegexValidation,
    password: passwordV4RegexValidation
  })
})

async function login() {
  isLoading.value = true
  try {
    // en caso de ser exitoso se navega al dashboard
    // router.push('/dashboard')
    setTimeout(() => {
      messageModal.value.title = 'Inicio de sesión';
      messageModal.value.description = ['Lo sentimos, cuenta no registrada o activada.'];
      showModal.value = true;
      isLoading.value = false;
    }, 2000);
  } catch (err) {
    isLoading.value = false
    messageModal.value.title = 'Inicio de sesión'
    messageModal.value.description = [err!.toString()]
    showModal.value = true
  }
}
</script>


<style>
.floating {
  animation: float 3s infinite linear;
}

@keyframes float {
  from {
    transform: rotate(0deg) translate3d(10px, 0, 0) rotate(0deg);
  }

  to {
    transform: rotate(360deg) translate3d(10px, 0, 0) rotate(-360deg);
  }
}
</style>