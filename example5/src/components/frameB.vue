<script setup lang="ts">
import Card from "./card.vue";
import {useCardStore} from "../store/card.ts";
const usecountStore = useCardStore();
</script>

<template>
  <div class="frame">
    <Card></Card>
  </div>
</template>

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