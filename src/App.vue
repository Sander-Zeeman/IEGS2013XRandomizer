<script setup lang="ts">
import { ref } from 'vue';
import {
  type Player,
  type Team,
  type Coach,
  type Manager,
  type Formation,
  name_to_position
} from './types';
import {
  choosePlayers,
  chooseCoach,
  chooseManager,
  chooseEmblem,
  chooseOutfit,
  chooseFormation
} from './utility';

import Header from './components/Header.vue';
import PlayerCardCollection from './components/PlayerCardCollection.vue';
import NonPlayerCardCollection from './components/NonPlayerCardCollection.vue';
import { players, teams, coaches, managers, formations } from '@/../assets/data.json';

const chosenPlayers = ref<Player[]>([]);
const chosenCoach = ref<Coach>({ name: '' });
const chosenManager = ref<Manager>({ name: '' });
const chosenOutfit = ref<Team>({ name: '', has_uniform: false });
const chosenEmblem = ref<Team>({ name: '', has_uniform: false });
const chosenFormation = ref<Formation>({ name: '' });
const hideCards = ref(false);

const playerKey = ref(0);
const nonPlayerKey = ref(0);

function chooseRandom() {
  const m_players = players.map(
    (player) =>
      <Player>{
        index: parseInt(player.index),
        team: player.team,
        position: name_to_position(player.position),
        name: player.name
      }
  );

  chosenPlayers.value = choosePlayers(m_players);
  chosenCoach.value = chooseCoach(coaches);
  chosenManager.value = chooseManager(managers);
  chosenOutfit.value = chooseOutfit(teams);
  chosenEmblem.value = chooseEmblem(teams);
  chosenFormation.value = chooseFormation(formations);

  playerKey.value += 1;
  nonPlayerKey.value += 1;
}

function flipHideCard() {
  hideCards.value = !hideCards.value;

  playerKey.value += 1;
  nonPlayerKey.value += 1;
}

chooseRandom();
</script>

<template>
  <main>
    <Header @flipHideCard="flipHideCard" @randomize="chooseRandom" :hideCards="hideCards" />
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
  </main>
</template>

<style scoped></style>
