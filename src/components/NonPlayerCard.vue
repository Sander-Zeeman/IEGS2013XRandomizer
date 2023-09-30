<script setup lang="ts">
import { name_to_img } from '@/utility';

interface Props {
  name: String;
  prefix: String;
}

defineProps<Props>();
</script>

<template>
  <div class="card">
    <img :src="name_to_img(name, prefix).toString()" :alt="name.toString()" class="image" />
    <h2 class="name">{{ name }}</h2>
  </div>
</template>

<style scoped></style>
