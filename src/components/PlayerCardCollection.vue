<script setup lang="ts">
import { ref } from 'vue';
import { type Player } from '@/types';
import PlayerCard from './PlayerCard.vue';

interface Props {
    players: Player[];
    hideCards: boolean;
}

const props = defineProps<Props>();

const revealed = ref(Array(props.players.length).fill(!props.hideCards));
</script>

<template>
    <h2 class="subtitle">Players</h2>
    <div class="CardGroup">
        <div v-for="(player, idx) in players" :key="idx">
            <PlayerCard
                @reveal="revealed[idx] = true"
                :name="player.name"
                :team="player.team"
                :position="player.position"
                :index="player.index"
                :revealed="revealed[idx]"
            />
        </div>
    </div>
</template>

<style scoped>
.subtitle {
  font-weight: bolder;
  font-size: xx-large;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 15px;
}

.CardGroup {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 4vw;
}
</style>
