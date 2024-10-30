<template>
  <section
    class="min-h-screen flex items-stretch bg-no-repeat bg-cover relative text-white bg-gradient-to-r from-[#1D394D] to-[#5083C2] !font-muller p-5">
    <div
      class="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-1 bg-transparent rounded-[20px]"></div>
    <div
      class="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-1 bg-[#1D394D] rounded-[20px]">
      <div class="w-full py-6 z-20">
        <div class="text-left sm:w-2/3 w-full px-10 lg:px-0 mx-auto pb-0">
          <h1 class="text-3xl font-semibold">Bienvenido</h1>
        </div>

        <form @submit.prevent="login" class="sm:w-2/3 w-full px-10 lg:px-0 mx-auto">
          <div class="mt-6">
            <InputCustom key="email" id="email" type="email" label="Email" v-model="form.email" bg-label="bg-white" bg-label-dark="bg-white"
              focus-color-border="focus:border-white" success-color-text="text-[#15082B]" color-border="border-white" color-text="text-[#15082B]"  bg-input="bg-white" :regexValidation="[emailRegexValidation]"
              svg="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
          </div>

          <div class="mt-6">
            <InputCustom key="password" id="password" type="password" label="Contraseña"
              :msgError="['La contraseña debe tener al menos 8 caracteres']" v-model="form.password"
              bg-label="bg-white" bg-label-dark="bg-white" success-color-text="text-[#15082B]" focus-color-border="focus:border-white" color-border="border-white" color-text="text-[#15082B]"  bg-input="bg-white" :regexValidation="[passwordV4RegexValidation]"
              svg="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
          </div>

          <div class="flex justify-between pt-4">
            <ButtonLoading label="Iniciar sesión" :disable="!formValido" :is-loading="isLoading"
              width="w-6/12 md:w-[60%]" width-loading="w-2/12" border-radius="rounded-[25px]" color-button="!bg-[#04B2CA]" color-button-hover="!bg-[#04B2CA80]" color-text="text-white"
              size-text="text-[0.8em]" />
            <div
              class="font-muller flex justify-center items-center transition-all ease-in duration-500 border-2 border-[#04B2CA] rounded-[25px] px-7 w-4/12 md:w-[37%] hover:bg-[#77EDD7] hover:text-black uppercase font-black text-[0.8em] cursor-pointer"
              >Registrarme</div>
          </div>

          <div class="p-4 text-center right-0 left-0 flex justify-center space-x-4 mt-16 lg:hidden">
            <a href="#">
              <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="#">
              <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a href="#">
              <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
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
  passwordV4RegexValidation,
  validateForm
} from '../../composable/validator'


const router = useRouter()

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
    router.push('/dashboard')
    isLoading.value = false
  } catch (err) {
    isLoading.value = false
    messageModal.value.title = 'Inicio de sesión'
    messageModal.value.description = [err!.toString()]
    showModal.value = true
  }
}
</script>
