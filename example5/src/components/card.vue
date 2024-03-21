<script setup lang="ts">
import {computed} from "vue";

interface IProps {
  color?: string;
}
const props=defineProps<IProps>()
const bgColor = props.color??'blue';
const style = computed(()=>{
  return 'height: 100px; width: 300px; margin: 5px; background-color:'+bgColor;
})
</script>

<template>
<div :style="style"></div>
</template>

<style scoped>
</style>
