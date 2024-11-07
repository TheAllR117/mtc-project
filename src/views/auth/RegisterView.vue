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

        <div
          class="ext-left md:w-[50%] w-full px-0 mx-auto pb-0 flex items-center"
          @click="router.push('/login')"
        >
          <IconArrowDown class="transition-all ease-in duration-150 rotate-90 !w-8 !h-8 scale-100 hover:scale-75 cursor-pointer mt-[-5px]" />
          <h1 class="text-3xl font-semibold">Registro</h1>
        </div>

        <form @submit.prevent="login" class="md:w-[50%] w-full px-0 mx-auto">
          <div class="mt-6">
            <InputCustom key="name" id="name" type="text" label="Nombre" v-model="form.name" bg-label="bg-white"
              bg-label-dark="bg-white" focus-color-border="focus:border-white" success-color-text="text-[#15082B]"
              color-border="border-white" color-text="text-[#15082B]" bg-input="bg-white"
              :regexValidation="[nameRegexValidation]" />
          </div>
          <div class="mt-6">
            <InputCustom key="last_name" id="last_name" type="text" label="Apellidos" v-model="form.last_name" bg-label="bg-white"
              bg-label-dark="bg-white" focus-color-border="focus:border-white" success-color-text="text-[#15082B]"
              color-border="border-white" color-text="text-[#15082B]" bg-input="bg-white"
              :regexValidation="[nameRegexValidation]" />
          </div>
          <div class="mt-6">
            <InputCustom key="phone" id="phone" type="phone" label="Telefono" v-model="form.phone" bg-label="bg-white"
              bg-label-dark="bg-white" focus-color-border="focus:border-white" success-color-text="text-[#15082B]"
              color-border="border-white" color-text="text-[#15082B]" bg-input="bg-white"
              :regexValidation="[phoneRegexValidation]" />
          </div>
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
            <ButtonLoading label="Registrame" :disable="!formValido" :is-loading="isLoading"
              width="!w-full md:!w-[100%]" width-loading="!w-2/12" border-radius="rounded-[25px]"
              color-button="!bg-bluelightcf" color-button-hover="!bg-[#04B2CA80]" color-text="text-white"
              size-text="text-[0.8em]" />
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
import { useRouter } from 'vue-router'
import { computed, reactive, ref } from 'vue'
import {
  emailRegexValidation,
  nameRegexValidation,
  passwordV4RegexValidation,
  phoneRegexValidation,
  validateForm
} from '../../composable/validator'
import IconArrowDown from '../../components/icons/IconArrowDown.vue'


const router = useRouter()

const form = reactive({
  name: null,
  last_name: null,
  phone: null,
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
    name: nameRegexValidation,
    last_name: nameRegexValidation,
    phone: phoneRegexValidation,
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
      messageModal.value.title = 'Registro';
      messageModal.value.description = ['Lo sentimos, ocurrio un error al registrar la cuenta.'];
      showModal.value = true;
      isLoading.value = false;
    }, 2000);
  } catch (err) {
    isLoading.value = false
    messageModal.value.title = 'Registro'
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