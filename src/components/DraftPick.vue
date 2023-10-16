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
  <div class="box">
    <div v-for="(player, idx) in choice" :key="idx">
      <PlayerCard
        @reveal="() => {}"
        :name="player.name"
        :team="player.team"
        :position="player.position"
        :index="player.index"
        :revealed="true"
        @click="$emit('choose', player, choice.filter((c) => c != player)[0])"
      />
    </div>
  </div>
</template>

<style scoped>
@media only screen and (max-width: 500px) {
  .box {
    margin: 2rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }
}
@media only screen and (min-width: 501px) {
  .box {
    margin: 2rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: baseline;
    gap: 3rem;
  }
}
</style>
