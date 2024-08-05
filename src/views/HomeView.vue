<script setup lang="ts">
import { reactive } from 'vue'
import { nameRegexValidation } from '../composable/validator'
import InputCustom from '../components/InputCustom.vue'

const form = reactive({
  name: ''
})
</script>

<template>
  <div class="bg-white w-full h-full">
    <div class="flex flex-col justify-evenly items-center">
      <div class="w-full md:w-5/12 mb-4 md:mb-12">
        <InputCustom
          key="name"
          id="name"
          type="text"
          label="Nombre"
          v-model="form.name"
          :value="form.name"
          bg-label="bg-white"
          focus-color-border="focus:border-secundary "
          color-text="text-green"
          :regexValidation="[nameRegexValidation]"
          :msg-error="['El nombre debe de tener al menos 3 caracteres']"
          :alternative-label="false"
        />
      </div>
    </div>
  </div>
</template>
