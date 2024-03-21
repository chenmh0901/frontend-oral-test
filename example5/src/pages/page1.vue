<script setup lang="ts">
import Card from '../components/card.vue'
import {useCardStore} from "../store/card.ts";
import {ref} from "vue";
const usecountStore=useCardStore();
const inputNumber=ref()
</script>

<template>
  <h1>Page1</h1>
  <input ref="inputNumber" @change="(e)=>{
    usecountStore.setCardNumber(e.target.value)
  }"/>
  <Card v-for="i in usecountStore.cardArray" :key="i" />
</template>

<style scoped>
</style>
