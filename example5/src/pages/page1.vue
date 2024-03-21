<script setup lang="ts">
import {useCardStore} from "../store/card.ts";
import {ref} from "vue";
import CardPlain from '../components/card-plain.vue';

const usecardStore=useCardStore();
const inputNumber=ref()
</script>

<template>
  <h1>Page1</h1>
  <input ref="inputNumber" @change="(e)=>{
    usecardStore.setCardAmount(e.target?.value)
  }"/>
  <CardPlain v-for="i in usecardStore.cardArray" :key="i" />
</template>

<style scoped>
</style>
