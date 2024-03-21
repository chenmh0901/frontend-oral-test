<script setup lang="ts">
import { ref } from "vue";
const count = ref(0);
const randomLinearColor = {
  background: `linear-gradient(to right, #${Math.floor(
    Math.random() * 16777215
  ).toString(16)}, #${Math.floor(Math.random() * 16777215).toString(16)})`,
  borderRadius: "10px",
  padding: "10px",
};
</script>

<template>
  <div :style="{ ...randomLinearColor }">
    <button style="margin-right: 8px" @click="count++">
      count is {{ count }}
    </button>
  </div>
</template>

<style scoped></style>
