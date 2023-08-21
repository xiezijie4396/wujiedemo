<template>
    <WujieVue
        width="100%"
        height="100%"
        :name="name"
        :alive="alive"
        :url="url"
        :sync="true"
    ></WujieVue>
</template>

<script setup>
import { findApp } from '../app';
import { ref } from 'vue'

const target = findApp('reactvite')
const url = ref(target.url)
const name = ref(target.name)
const alive = ref(target.alive)

</script>