import { ref } from 'vue'

// text
export const nameRegexValidation = ref(/^(?=.*?[A-Z]?[a-z]?).{3,}$/)
export const textEmptyRegexValidation = ref(/^.{0,}$/)
export const comentaryRegexValidation = ref(/^(?=.*?[A-Z]?[a-z]?).{3,}$/s)

// email
export const emailRegexValidation = ref(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
)

// password
export const passwordRegexValidation = ref(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/)
export const passwordV1RegexValidation = ref(/^(?=.*?[A-Z]).{1,}$/)
export const passwordV2RegexValidation = ref(/^(?=.*?[a-z]).{1,}$/)
export const passwordV3RegexValidation = ref(/^(?=.*?[0-9]).{1,}$/)
export const passwordV4RegexValidation = ref(/^.{8,}$/)

// rfc
export const rfcRegexValidation = ref(
  /^[A-Z&Ñ&AMP]{3,4}(?:\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])|[0-9]{6})[A-Z\d]{3}$/
)

// phone
export const phoneRegexValidation = ref(/^\d{10}$/)

//fecha
export const dateCodeRegexValidation = ref(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/)

//zipcode
export const zipCodeRegexValidation = ref(/^\d{5}$/)

//pl
export const plRegexValidation = ref(/^PL\/\d+\/EXP\/[A-Z]+\/\d{4}$/)

export const numberRegexValidation = ref(/^[0-9]+$/)
export const numberWithDecinalRegexValidation = ref(/^[0-9]+(\.[0-9]+)?$/)

// coods
export const coordsValidation = ref(/^-?\d{1,3}\.\d{1,15},\s?-?\d{1,3}\.\d{1,15}$/)

// url
export const urlValidation = ref(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/)

// price
export const priceRegexValidation = ref(/\d+/)

export function validateInput(valor: any, regularExpression: RegExp) {
  return regularExpression.test(valor)
}

export function validateForm(form: any, validations: any) {
  for (const campo in validations) {
    const expresionRegular = validations[campo].value
    if (!validateInput(form[campo], expresionRegular)) {
      return false // La validación falló para al menos un campo
    }
  }
  return true // Todos los campos pasaron la validación
}
