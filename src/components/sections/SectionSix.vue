<template>
    <div class="h-full w-full !font-muller bg-white overflow-hidden">
        <!-- Section 6 -->
        <section class="h-max bg-[#F3F5F6] font-muller" id="section6">
            <div
                class="w-full h-full px-[15px] mx-auto sm:max-w-[740px] md:max-w-[940px] md:text-left lg:max-w-[1260px] xl:max-w-[1440px] 2xl:max-w-[1900px] py-[60px]">
                <div class="relative m-0 w-full h-full">
                    <div class="w-full h-full rounded-[20px] overflow-hidden px-0 lg:px-14">

                        <div class="relative m-0 w-full h-auto flex justify-center items-center">
                            <div class="w-full h-auto flex flex-col md:flex-row justify-between items-center md:px-7">

                                <div
                                    class="w-full h-full hidden md:flex md:justify-start xl:justify-center items-center">
                                    <img src="/assets/img/contact.webp" alt=""
                                        :class="[`${visibility.section6 ? 'animate-fadeRight' : 'animate-fadeRightOut opacity-0'} w-[325px] sm:w-[300px] md:w-[300px] lg:w-[380px] xl:w-[425px] 2xl:w-[450px]`]">

                                    <!-- <img :class="[`${visibility.section6 ? 'animate-fadeRight' : 'animate-fadeRightOut opacity-0'} w-[325px] sm:w-[300px] md:w-[300px] lg:w-[380px] xl:w-[425px] 2xl:w-[450px] rounded-full`]"
                                        v-lazy="{
                                            src: '/assets/img/contact.webp',
                                            loading: '/assets/img/placeholder.webp',
                                            error: '/assets/img/placeholder.webp',
                                            delay: 250
                                        }" loading="lazy" alt="" /> -->
                                </div>

                                <div class="w-full h-full flex justify-start items-center">

                                    <div class="grid w-full md:w-[90%] h-full grid-cols-12 items-center gap-4">
                                        <div class="col-span-12 w-full text-center md:text-left">
                                            <h2
                                                :class="[`${visibility.section6 ? 'animate-fadeLeft' : 'animate-fadeLeftOut opacity-0'} text-[1.7rem] md:text-[1.8rem] lg:text-[2rem] xl:text-[2.6rem] 2xl:text-[2.8rem] font-bold text-bluecf`]">
                                                ¿Tienes alguna duda?</h2>
                                            <p
                                                :class="[`${visibility.section6 ? 'animate-fadeLeft' : 'animate-fadeLeftOut opacity-0'} mb-8 text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] xl:text-[1.05rem] 2xl:text-[1.05rem] text-black max-md:px-6`]">
                                                Contáctanos y te responderemos en un tiempo máximo de 24 horas.
                                            </p>
                                            <form @submit.prevent="sendMeesage()" class="flex flex-col gap-4 md:gap-8">
                                                <div
                                                    :class="[`${visibility.section6 ? 'animate-fadeLeft' : 'animate-fadeLeftOut opacity-0'} flex flex-col md:flex-row`]">
                                                    <InputCustom key="name" id="name" type="text" label="Nombre"
                                                        v-model="form.name" :value="form.name"
                                                        focus-color-border="focus:border-[#D4D4D4]"
                                                        color-text="text-bluecf" border-radius="rounded-full"
                                                        bg-label="bg-white" bg-input="bg-white"
                                                        border-width="border-[1px]" bg-label-dark="bg-white"
                                                        color-border="border-[#D4D4D4]"
                                                        :regexValidation="[nameRegexValidation]" />
                                                </div>
                                                <div
                                                    :class="[`${visibility.section6 ? 'animate-fadeLeft' : 'animate-fadeLeftOut opacity-0'} flex flex-col md:flex-row`]">
                                                    <InputCustom key="email" id="email" type="email" label="Email"
                                                        v-model="form.email" :value="form.email"
                                                        focus-color-border="focus:border-[#D4D4D4]"
                                                        color-text="text-bluecf" border-radius="rounded-full"
                                                        border-width="border-[1px]" bg-label="bg-white"
                                                        bg-input="bg-white" bg-label-dark="bg-white"
                                                        color-border="border-[#D4D4D4]"
                                                        :regexValidation="[emailRegexValidation]" />
                                                </div>
                                                <div
                                                    :class="[`${visibility.section6 ? 'animate-fadeLeft' : 'animate-fadeLeftOut opacity-0'} hidden md:flex flex-col w-full`]">
                                                    <TextAreaCustom key="comment" id="comment" type="text"
                                                        label="Comentario" v-model="form.comment" :value="form.comment"
                                                        focus-color-border="focus:border-[#D4D4D4]"
                                                        color-text="!text-bluecf" border-radius="rounded-[20px]"
                                                        border-width="border-[1px]" bg-label="bg-white"
                                                        bg-input="bg-white" bg-label-dark="bg-white"
                                                        color-border="border-[#D4D4D4]"
                                                        height-text-area=" !h-[200px] resize-none"
                                                        :regexValidation="[comentaryRegexValidation]" rows="1" />
                                                </div>

                                                <div
                                                    :class="[`${visibility.section6 ? 'animate-fadeLeft' : 'animate-fadeLeftOut opacity-0'} flex md:hidden flex-col w-full`]">
                                                    <TextAreaCustom key="comment" id="comment" type="text"
                                                        label="Comentario" v-model="form.comment" :value="form.comment"
                                                        focus-color-border="focus:border-[#D4D4D4]"
                                                        color-text="!text-bluecf" border-radius="rounded-[20px]"
                                                        bg-label="bg-white" bg-input="bg-white"
                                                        border-width="border-[1px]" bg-label-dark="bg-white"
                                                        color-border="border-[#D4D4D4]"
                                                        height-text-area=" !h-[200px] resize-none"
                                                        :regexValidation="[comentaryRegexValidation]" rows="1" />

                                                </div>
                                                <div
                                                    :class="[`${visibility.section6 ? 'animate-fadeLeft' : 'animate-fadeLeftOut opacity-0'} flex w-full justify-end`]">
                                                    <!-- <ButtonLoading width="w-[50%] md:w-[40%] 2xl:w-[30%]" label="Enviar"
                                                        border-radius="rounded-full" :disable="!formValido"
                                                        :is-loading="isLoading" color-button="!bg-bluelightcf"
                                                        color-button-hover="!bg-bluelightcf/50" /> -->
                                                    <ButtonLoading label="Enviar" :disable="!formValido"
                                                        :is-loading="isLoading" width="!w-full md:!w-[40%]"
                                                        width-loading="!w-2/12" border-radius="rounded-[25px]"
                                                        color-button="!bg-bluelightcf"
                                                        color-button-hover="!bg-[#04B2CA80]" color-text="text-white"
                                                        size-text="text-[0.8em]" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </div>

    <ModalCustom :is-open="showModal" :close-modal="closeModal" :title="messageModal.title"
        :description="messageModal.description" />
</template>


<script lang="ts" setup>
// Composables
import { comentaryRegexValidation, emailRegexValidation, nameRegexValidation, validateForm } from '../../composable/validator';
// Components
import TextAreaCustom from '../../components/TextAreaCustom.vue';
import ButtonLoading from '../../components/ButtonLoading.vue';
import InputCustom from '../../components/InputCustom.vue';
// Vue
import { ref, onMounted, onUnmounted, reactive, computed } from 'vue';
import ModalCustom from '../ModalCustom.vue';
// EmailJS
import emailjs from "@emailjs/browser";

const showScrollTopButton = ref<boolean>(false);
const isLoading = ref<boolean>(false)
const showModal = ref<boolean>(false)

const messageModal = ref({
    title: '',
    description: ['']
})

function closeModal() {
    showModal.value = false
}
const visibility = reactive({
    section1: false,
    section2: false,
    section3: false,
    section4: false,
    section5: false,
    section6: false,
    section7: false,
});

const form = reactive({
    name: '',
    email: '',
    comment: '',
});

const formValido = computed(() => {
    return validateForm(form, {
        name: nameRegexValidation,
        email: emailRegexValidation,
        comment: comentaryRegexValidation
    })
})

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const sectionId = entry.target.id as keyof typeof visibility;
        visibility[sectionId] = entry.isIntersecting;
    });
}, observerOptions);


function handleScroll() {
    showScrollTopButton.value = window.scrollY >= 500;
}

// onMounted(() => {
//     const sections = ['#section1', '#section2', '#section3', '#section4', '#section5', '#section6', '#section7'].map((id) => document.querySelector(id));
//     sections.forEach((section) => section && observer.observe(section));

//     window.addEventListener('scroll', handleScroll);

//     onUnmounted(() => {
//         observer.disconnect();
//         window.removeEventListener('scroll', handleScroll);
//     });
// });
// async function sendMeesage() {
//     isLoading.value = true
//     try {
//         // en caso de ser exitoso se navega al dashboard
//         // router.push('/dashboard')
//         setTimeout(() => {
//             messageModal.value.title = 'Contacto';
//             messageModal.value.description = ['Lo sentimos, ocurrio un error al enviar tu mensaje.'];
//             showModal.value = true;
//             isLoading.value = false;
//         }, 2000);
//     } catch (err) {
//         isLoading.value = false
//         messageModal.value.title = 'Contacto'
//         messageModal.value.description = [err!.toString()]
//         showModal.value = true
//     }
// }

function clearForm() {
    form.name = '',
        form.email = '',
        form.comment = ''
    console.log('Limpio')
}

async function sendMeesage() {
    const templateParams = {
        to_name: form.name,
        from_name: 'Prueba',
        email: form.email,
        message: form.comment,
    };

    isLoading.value = true;

    if (form.name && form.email && form.comment && formValido) {
        emailjs.init("kaHynZ5VHw-0uFV4l");
        try {
            // openModal("#sentSuccesfully"); // Abre el modal de éxito
            await emailjs.send("service_0t739ew", "template_6c3w8v9", templateParams);
            messageModal.value.title = 'Contacto';
            messageModal.value.description = ['Correo enviado correctamente'];
            showModal.value = true;
            isLoading.value = false;
            clearForm()
        } catch (error) {
            // openModal("#incorrectShipment"); // Abre el modal de error
            // console.error("FAILED...", error);

            isLoading.value = false
            messageModal.value.title = 'Contacto'
            messageModal.value.description = [error!.toString()]
            showModal.value = true
        }
    } else {

        isLoading.value = false
        messageModal.value.title = 'Contacto'
        messageModal.value.description = ['Datos incompletos']
        showModal.value = true

        // console.log('datos incompletos');
        // openModal("#incorrectShipment"); // Abre el modal de error
    }

    isLoading.value = false;
}

onMounted(() => {
    const sections = ['#section1', '#section2', '#section3', '#section4', '#section5', '#section6', '#section7'].map((id) => document.querySelector(id));
    sections.forEach((section) => section && observer.observe(section));

    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    observer.disconnect();
    window.removeEventListener('scroll', handleScroll);
});
</script>


<style></style>