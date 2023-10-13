<script setup lang="ts">
import { type Player } from '@/scripts/types';
import PlayerCard from '@/components/cards/PlayerCard.vue';

interface Props {
  choice: Player[];
}

defineProps<Props>();
defineEmits(['choose']);
</script>

<template>
  <div class="box" v-for="(player, idx) in choice" :key="idx">
    <PlayerCard
      @reveal="() => {}"
      :name="player.name"
      :team="player.team"
      :position="player.position"
      :index="player.index"
      :revealed="true"
      style="width: 20%; margin: 10px"
      @click="$emit('choose', player, choice.filter((c) => c != player)[0])"
    />
  </div>
</template>

<style scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
