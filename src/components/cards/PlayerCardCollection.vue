<script setup lang="ts">
import { ref } from 'vue';
import { type Player } from '@/scripts/types';
import PlayerCard from './PlayerCard.vue';

interface Props {
  players: Player[];
  hideCards: boolean;
}

interface Card {
  player: Player;
  revealed: boolean;
}

const props = defineProps<Props>();
const cards = ref(
  props.players.map(
    (player) =>
      <Card>{
        player: player,
        revealed: !props.hideCards
      }
  )
);
</script>

<template>
  <div class="subtitle">Players</div>
  <div class="CardGroup">
    <div v-for="(card, idx) in cards" :key="idx">
      <PlayerCard
        @reveal="card.revealed = true"
        :name="card.player.name"
        :team="card.player.team"
        :position="card.player.position"
        :index="card.player.index"
        :revealed="card.revealed"
      />
    </div>
  </div>
</template>

<style scoped>
.subtitle {
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
  padding: 1rem;
}

.CardGroup {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  gap: 1rem;
  padding: 1rem;
}
</style>
