<script setup lang="ts">
defineProps<{
  id: string;
}>();
</script>

<template>
  <div>
    <h1 style="text-transform: capitalize">{{ $props.id }}</h1>
    <div class="side" :id="$props.id"></div>
  </div>
</template>

<style scoped>
.side {
  border-radius: 10px;
  padding: 10px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  background-color: #5d5a5a;
  width: 300px;
  height: 500px;
}
</style>
