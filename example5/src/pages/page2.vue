<template>
  <h1>Page2</h1>
  <div style="display: flex;gap: 20px;">
    <side-frame id="left" />
    <side-frame id="right" />
  </div>
  <card v-for="_ in [1,2,3,4,5,6,7]" :key="_"/>
</template>

<script setup lang="ts">
import SideFrame from '../components/side-frame.vue';
import Card from '../components/card.vue';
</script>