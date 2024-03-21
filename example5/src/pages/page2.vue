<!-- ParentComponent.vue -->
<template>
  <h1>Page2</h1>
  <div style="display: flex">
    <FrameA />
    <FrameB />
  </div>
</template>

<script setup lang="ts">
import FrameA from '../components/frameA.vue';
import FrameB from '../components/frameB.vue';

</script>