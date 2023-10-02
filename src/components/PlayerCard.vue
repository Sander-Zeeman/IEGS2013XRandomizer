<script setup lang="ts">
import { Position, name_to_img } from '@/utility';

interface Props {
  name: String;
  team: String;
  position: Position;
  index: Number;
}

function position_to_style(position: Position): string {
  switch (position) {
    case Position.GK:
      return '-webkit-text-stroke-color: orange';
    case Position.DF:
      return '-webkit-text-stroke-color: green';
    case Position.MF:
      return '-webkit-text-stroke-color: blue';
    case Position.FW:
      return '-webkit-text-stroke-color: red';
  }
  return '';
}

function position_to_name(position: Position): string {
  switch (position) {
    case Position.GK:
      return 'GK';
    case Position.DF:
      return 'DF';
    case Position.MF:
      return 'MF';
    case Position.FW:
      return 'FW';
  }
  return '';
}

defineProps<Props>();
</script>

<template>
  <div class="card">
    <img :src="name_to_img(team, 'emblems').toString()" :alt="name.toString()" class="image" />
    <div class="position" :style="position_to_style(position)">
      {{ position_to_name(position) }}
    </div>
    <div class="index">{{ index }}</div>
    <h2 class="name">{{ name }}</h2>
  </div>
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
