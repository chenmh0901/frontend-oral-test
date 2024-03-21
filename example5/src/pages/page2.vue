<template>
  <h1>Page2</h1>
  <div style="display: flex; gap: 20px">
    <side-frame id="left" :amount="usecardStore.cardManager.leftAmount" />
    <side-frame id="right" :amount="usecardStore.cardManager.rightAmount" />
  </div>
  <button @click="add()">add card</button>
</template>

<script setup lang="ts">
import { useCardStore } from "../store/card";
import SideFrame from "../components/side-frame.vue";

const usecardStore = useCardStore();
const add = () => {
  usecardStore.addCard();
};
</script>
