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
  font-weight: bolder;
  font-size: 60px;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 15px;
}

@media only screen and (min-width: 600px) {
  .CardGroup {
    padding: 30px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    width: 100%;
    height: 100%;
    gap: 30px;
    justify-content: center;
    align-items: center;
  }
}

@media only screen and (max-width: 600px) {
  .CardGroup {
    padding: 30px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(8, 1fr);
    width: 80%;
    height: 100%;
    gap: 30px;
    justify-content: center;
    align-items: center;
  }
}
</style>
