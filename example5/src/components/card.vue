<script setup lang="ts">
import { ref } from "vue";
enum Position {
  left = "left",
  right = "right",
}
const count = ref(0);
const side = ref(Position.left);
const move = () => {
  side.value = side.value === Position.left ? Position.right : Position.left;
};
const randomLinearColor = {
  background: `linear-gradient(to right, #${Math.floor(
    /*  */
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
