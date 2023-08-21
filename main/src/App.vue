<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router'
// 获取当前路由对象
const route = useRoute();
// 获取路由导航对象
const router = useRouter();
const appList = [
  {
    appName: 'vue2',
    query: '/child/vue2/',
  },
  {
    appName: 'vue3',
    query: '/child/vue3/',
  },
  {
    appName: 'vuevite',
    query: '/child/vite/',
  }
]
const toApp = (app) => {
  router.push({
    path: `/${app.appName}`
  });
}
</script>

<template>
  <button
    v-for="(item, index) in appList"
    :key="index"
    @click="toApp(item)"
  >{{ item.appName }}</button>
  <router-view />
</template>

<style scoped>

</style>
