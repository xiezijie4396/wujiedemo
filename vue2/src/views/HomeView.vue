<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <MyButton>哈哈哈</MyButton>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { MyButton } from 'xzjviteui/vite-ui'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    MyButton
  }
}
</script>
