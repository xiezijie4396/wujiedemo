<script setup>
import { useRoute, useRouter } from 'vue-router'
import { appList } from './app';
// 获取当前路由对象
const route = useRoute();
// 获取路由导航对象
const router = useRouter();
const toApp = (app) => {
  router.push({
    path: `/${app.name}`
  });
}
</script>

<template>
  <button
    v-for="(item, index) in appList"
    :key="index"
    @click="toApp(item)"
  >{{ item.name }}</button>
  <router-view />
</template>

<style scoped>

</style>
