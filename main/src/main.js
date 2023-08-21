import { createApp } from 'vue'
import App from './App.vue'
import WujieVue from "wujie-vue3";
import router from './router/index'

createApp(App).use(router).use(WujieVue).mount('#app')
