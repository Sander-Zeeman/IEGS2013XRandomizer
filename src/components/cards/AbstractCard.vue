<script setup lang="ts">
import { name_to_img } from '@/scripts/utility';

interface Props {
  name: String;
  img_name: String;
  prefix: String;
  revealed: boolean;
}

defineProps<Props>();

defineEmits(['reveal']);
</script>

<template>
  <div class="card">
    <div v-if="revealed">
      <img :src="name_to_img(img_name, prefix).toString()" alt="Revealed" class="image" />
      <slot />
      <h2 class="name">{{ name }}</h2>
    </div>
    <div v-else>
      <img
        :src="name_to_img('Mystery', 'emblems').toString()"
        alt="Mystery"
        class="image"
        @click="$emit('reveal')"
      />
    </div>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  border: 2px;
  border-style: solid;
  border-radius: 15px;
  width: 25vw;
  max-width: 200px;
}

.image {
  width: 100%;
  height: 25vw;
  max-height: 200px;
  border-radius: 15px 15px 0 0;
  object-fit: fill;
}

.name {
  font-size: 1.5rem;
  text-align: center;
  border-radius: 0 0 15px 15px;
  padding: 2px;
}
</style>
