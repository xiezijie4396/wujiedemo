import { createRouter, createWebHistory } from 'vue-router'
import vue2 from '../views/vue2.vue'
import vue3 from '../views/vue3.vue'
import vuevite from '../views/vuevite.vue'
import reactvite from '../views/reactvite.vue'

const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/vue2', component: vue2 },
  { path: '/vue3', component: vue3 },
  { path: '/vuevite', component: vuevite },
  { path: '/reactvite', component: reactvite },
]

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
})

export default router