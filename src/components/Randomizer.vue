<script setup lang="ts">
import { ref } from 'vue';
import { type Player, type Team, type Coach, type Manager, type Formation } from '@/scripts/types';
import {
  choosePlayers,
  chooseCoach,
  chooseManager,
  chooseEmblem,
  chooseOutfit,
  chooseFormation
} from '@/scripts/randomizer';

import PlayerCardCollection from '@/components/cards/PlayerCardCollection.vue';
import NonPlayerCardCollection from '@/components/cards/NonPlayerCardCollection.vue';

interface Props {
  hideCards: boolean;
}

const props = defineProps<Props>();

const chosenPlayers = ref<Player[]>([]);
const chosenCoach = ref<Coach>({ name: '' });
const chosenManager = ref<Manager>({ name: '' });
const chosenOutfit = ref<Team>({ name: '', has_uniform: false });
const chosenEmblem = ref<Team>({ name: '', has_uniform: false });
const chosenFormation = ref<Formation>({ name: '' });
const hideCards = ref(props.hideCards);

const playerKey = ref(0);
const nonPlayerKey = ref(0);

function chooseRandom() {
  chosenPlayers.value = choosePlayers(2, 4, 5, 5);
  chosenCoach.value = chooseCoach();
  chosenManager.value = chooseManager();
  chosenOutfit.value = chooseOutfit();
  chosenEmblem.value = chooseEmblem();
  chosenFormation.value = chooseFormation();

  playerKey.value += 1;
  nonPlayerKey.value += 1;
}

chooseRandom();
</script>

<template>
  <div>
    <button @click="chooseRandom">Randomize</button>
    <PlayerCardCollection :key="playerKey" :players="chosenPlayers" :hideCards="hideCards" />
    <NonPlayerCardCollection
      :key="nonPlayerKey"
      :coach="chosenCoach"
      :manager="chosenManager"
      :emblem="chosenEmblem"
      :outfit="chosenOutfit"
      :formation="chosenFormation"
      :hideCards="hideCards"
    />
  </div>
</template>
