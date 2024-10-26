import './style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)
// AOS.init({
//     offset: 120, // Desplazamiento desde la parte superior al activar la animación
//     duration: 600, // Duración de la animación
//     easing: 'ease-in-out', // Efecto de suavizado
//     delay: 100, // Retraso
// });

app.mount('#app')
