<script setup lang="ts">
import { Position, name_to_img } from '@/utility';

interface Props {
  name: String;
  team: String;
  position: Position;
  index: Number;
}

defineProps<Props>();
</script>

<template>
  <div class="card" :style="{ backgroundImage: 'url(' + name_to_img(team, 'emblems') + ')' }"></div>
</template>

<style scoped>
.card {
  border: 2px;
  border-style: solid;
  border-radius: 20px;
  background-size: cover;
  background-position: center;
  width: 300px;
  height: 300px;
}
</style>
