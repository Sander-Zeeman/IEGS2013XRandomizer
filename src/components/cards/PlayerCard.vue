<script setup lang="ts">
import AbstractCard from './AbstractCard.vue';

import { Position } from '@/scripts/types';
import { position_to_name, position_to_style } from '@/scripts/type_util';

interface Props {
  name: String;
  team: String;
  position: Position;
  index: Number;
  revealed: boolean;
}

defineProps<Props>();

defineEmits(['reveal']);
</script>

<template>
  <AbstractCard
    @reveal="$emit('reveal')"
    :name="name"
    :img_name="team"
    prefix="emblems"
    :revealed="revealed"
  >
    <div class="position" :style="position_to_style(position)">
      {{ position_to_name(position) }}
    </div>
    <div class="index">{{ index }}</div>
  </AbstractCard>
</template>

<style scoped>
.position {
  position: absolute;
  top: 8px;
  left: 16px;
  font-size: xx-large;
  color: white;
  -webkit-text-stroke-width: 2px;
}

.index {
  position: absolute;
  top: 8px;
  right: 16px;
  font-size: xx-large;
  color: white;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: black;
}
</style>
