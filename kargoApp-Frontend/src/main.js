import { createApp } from 'vue';
import App from './App.vue';
var ax = ;
import { createPinia } from 'pinia';
import './assets/main.css';
const pinia = createPinia();
axios.defaults.baseURL = "http://localhost:5000/api/v1/";
createApp(App).mount('#app');
