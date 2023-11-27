// main.js
import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from './router/index.js'; // Ruta al archivo router.js
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})

const app = createApp(App).use(router).use(vuetify);

// Configuración global de Axios
axios.defaults.baseURL = 'http://localhost:8000/api';

app.config.globalProperties.$axios = axios;

app.mount('#app');
