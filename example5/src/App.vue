<script setup lang="ts">
import Page1 from "./pages/page1.vue";
import Page2 from "./pages/page2.vue";
import Page3 from "./pages/Page3.vue";
import {ref} from "vue";

const pageIndex=ref(0);
const PageList=[Page1,Page2,Page3];
const changePage=()=>{
  if(pageIndex.value==PageList.length-1 ){
    pageIndex.value=0;
  }else {
    pageIndex.value++;
  }
}
</script>

<template>
  <button @click="changePage">ChangePage</button>
  <component :is="PageList[pageIndex]"></component>
</template>

<style scoped>
</style>
