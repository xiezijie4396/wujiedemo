import { createApp } from 'vue'
import App from './App.vue'
import WujieVue from "wujie-vue3";
import router from './router/index'
import { appList } from './app'

appList.forEach(item => {
    WujieVue.setupApp({
        name: item.name,
        url: item.url,
        alive: item.alive
    })
    // 预加载静态资源
    // WujieVue.preloadApp({
    //     name: item.name,
    //     exec: true // 预执行
    // })
})

createApp(App).use(router).use(WujieVue).mount('#app')
