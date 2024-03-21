<template>
  <div class="frame">
    <Card v-for="i in usecountStore.cardArray" :key="i"></Card>
  </div>
</template>

<script setup lang="ts">
import Card from "./card.vue";
import {useCardStore} from "../store/card.ts";
const usecountStore = useCardStore();
const handleClick = () => {
  console.log('clicked');
}
</script>
<style scoped>
.frame{
  background-color:greenyellow;
  margin: 5px;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 400px
}
</style>