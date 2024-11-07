<template>
  <div class="text-left">
    <div class="relative">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="[
          'w-4 h-4',
          isFocused
            ? errorInput !== ''
              ? `${errorColorText} `
              : `${colorText} `
            : `${successColorText} `
        ]" viewBox="0 0 512 512">
          <path :d="svg" />
        </svg>
      </div>
      <textarea :id="id" :type="showPassword ? 'text' : type"
        :class="[errorInput == '' ? styleInputDefautl.toString() : styleInputError.toString()] + heightTextArea"
        placeholder=" " v-model="inputValue" @input="handleChange" @focus="onFocus" @blur="onBlur" :rows="rows" />
      <label :for="id" :class="[
        isFocused
          ? errorInput != ''
            ? `${bgLabel} ${errorColorText} `
            : `${bgLabel} ${colorBorder} ${colorText} `
          : inputValue == ''
            ? `'bg-transparent ' ${colorText} `
            : errorInput != ''
              ? `${bgLabel} ${errorColorText} `
              : `${bgLabel} ${colorText} `,
        `absolute rounded-full text-sm duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] ${bgLabelDark} px-2 mx-7 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[13%] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-0`
      ]">
        {{ label }}
      </label>
      <button v-if="type == 'password'" type="button" class="flex items-center pr-3" @click="showAndHiddenPassword">
        <div class="absolute inset-y-0 right-0 flex items-center pr-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="[
            'w-6 h-4',
            isFocused ? (errorInput !== '' ? 'text-red' : colorText) : 'text-primary'
          ]" viewBox="0 0 512 512">
            <path v-if="!showPassword"
              d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />

            <path v-else
              d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z" />
          </svg>
        </div>
      </button>
    </div>
    <p :id="id + '_help'" :class="'mt-2 text-xs ' + errorColorText + ' dark:' + errorColorText">
      {{ errorInput }}
    </p>
  </div>
</template>

<script lang="ts">
import { onBeforeMount, ref, watch, watchEffect } from 'vue'

export default {
  props: {
    id: String,
    type: String,
    label: {
      type: String,
      default: ''
    },
    bgLabel: {
      type: String,
      default: 'bg-white'
    },
    bgLabelDark: {
      type: String,
      default: 'dark:bg-black'
    },
    svg: String,
    regexValidation: {
      type: Array<RegExp>,
      default: []
    },
    colorText: {
      type: String,
      default: 'text-white'
    },
    successColorText: {
      type: String,
      default: 'text-primary'
    },
    errorColorText: {
      type: String,
      default: 'text-red'
    },
    colorBorder: {
      type: String,
      default: 'border-primary'
    },
    focusColorBorder: {
      type: String,
      default: 'focus:border-white'
    },
    errorColorBorder: {
      type: String,
      default: 'border-red'
    },
    msgError: {
      type: Array<string>,
      default: []
    },
    borderRadius: {
      type: String,
      default: 'rounded-xl'
    },
    bgInput: {
      type: String,
      default: 'bg-transparent'
    },
    borderWidth: {
      type: String,
      default: 'border-2'
    },
    heightTextArea: {
      type: String,
      default: 'h-auto'
    },
    value: {
      type: String,
      default: ''
    },
    rows: {
      type: String,
      default: '3'
    }
  },
  setup(props, { emit }) {
    const styleInputDefautl = ref(
      `block px-10 py-3 w-full h-full text-sm ${props.colorText} ${props.bgInput} ${props.borderRadius
      } ${props.borderWidth} ${props.colorBorder} appearance-none dark:${props.colorText} dark:${props.colorBorder
      } dark:focus:${props.focusColorBorder
      } focus:outline-none focus:ring-0 ${props.focusColorBorder!} peer`
    )
    const styleInputError = ref(
      `block px-10 py-3 w-full h-full text-sm ${props.colorText} ${props.bgInput} ${props.borderRadius
      } ${props.borderWidth} ${props.errorColorBorder} appearance-none dark:${props.colorText
      } dark:${props.errorColorBorder} dark:focus:${props.errorColorBorder
      } focus:outline-none focus:ring-0 focus:${props.focusColorBorder!} peer`
    )

    const inputValue = ref(props.value)
    const errorInput = ref('')
    const isFocused = ref(false)
    const showPassword = ref(false)
    const optionMSG = ref<number>(0)

    function handleChange(event: any) {
      inputValue.value = event.target.value
      if (isValid(inputValue.value)) {
        errorInput.value = ''
      } else {
        errorInput.value =
          props.msgError.length > 0
            ? props.msgError[optionMSG.value] ?? ''
            : `${props.label} no valido`
      }
    }

    function load(event: any) {
      console.log(event)
    }

    function showAndHiddenPassword() {
      showPassword.value = !showPassword.value
    }

    function onFocus() {
      isFocused.value = true
    }

    function onBlur() {
      isFocused.value = false
    }

    function isValid(data: String) {
      for (let index = 0; index < props.regexValidation.length; index++) {
        const regex = props.regexValidation[index]
        if (!regex) continue // Ignora expresiones regulares nulas
        if (!regex.test(data.toString())) {
          optionMSG.value = index // Almacena el índice de la expresión regular no coincidente
          return false // Si alguna de las expresiones regulares no coincide, se considera inválido
        }
      }

      return true // Si todas las expresiones regulares coinciden, se considera válido
    }

    watch(inputValue, (newValue) => {
      emit('update:modelValue', newValue)
    })

    watchEffect(() => {
      inputValue.value = props.value
    })

    onBeforeMount(() => { })

    return {
      // funciones
      handleChange,
      showAndHiddenPassword,
      onFocus,
      onBlur,
      isValid,
      // varibles
      inputValue,
      errorInput,
      isFocused,
      showPassword,
      styleInputDefautl,
      styleInputError,
      load
    }
  }
}
</script>
