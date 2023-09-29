<script setup lang="ts">
import { name_to_img } from '@/utility';

interface Props {
  name: String;
  prefix: String;
}

defineProps<Props>();
</script>

<template>
  <div class="card" :style="{ backgroundImage: 'url(' + name_to_img(name, prefix) + ')' }"></div>
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
