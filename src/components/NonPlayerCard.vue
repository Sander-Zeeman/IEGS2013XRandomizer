<script setup lang="ts">
import { name_to_img } from '@/utility';

interface Props {
  name: String;
  prefix: String;
}

const props = defineProps<Props>();

const imgPath = name_to_img(props.name, props.prefix);
</script>

<template>
  <div class="card">
    <img :src="imgPath.toString()" :alt="name.toString()" class="image" />
    <h2 class="name">{{ name }}</h2>
  </div>
</template>

<style scoped>
.card {
  border: 2px;
  border-style: solid;
  border-radius: 15px;
  width: 40%;
}

.image {
  width: 100%;
  border-radius: 15px 15px 0 0;
}

.name {
  text-align: center;
  margin: 0;
  margin-bottom: 10px;
}
</style>
