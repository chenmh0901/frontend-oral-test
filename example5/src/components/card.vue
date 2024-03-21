<script setup lang="ts">
import { ref } from "vue";
import { useCardStore } from "../store/card";
enum Position {
  left = "left",
  right = "right",
}
const count = ref(0);
const side = ref(Position.left);
const usecardStore=useCardStore();
const move = () => {
  if(side.value === Position.left){
    usecardStore.cardManager.leftAmount--;
    usecardStore.cardManager.rightAmount++;
  }else{
    usecardStore.cardManager.rightAmount--;
    usecardStore.cardManager.leftAmount++;
  }
  side.value = side.value === Position.left ? Position.right : Position.left;
};
const randomLinearColor = {
  background: `linear-gradient(to right, #${Math.floor(
    Math.random() * 16777215
  ).toString(16)}, #${Math.floor(Math.random() * 16777215).toString(16)})`,
  borderRadius: "10px",
  padding: "10px",
};
</script>

<template>
  <Teleport :to="`#${side}`">
    <div :style="{ ...randomLinearColor }">
      <button style="margin-right: 8px" @click="count++">
        count is {{ count }}
      </button>
      <button @click="move()">move</button>
    </div>
  </Teleport>
</template>

<style scoped></style>
