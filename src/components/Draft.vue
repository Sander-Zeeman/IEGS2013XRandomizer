<script setup lang="ts">
import { ref, computed } from 'vue';
import { Position, type Player, type Formation } from '@/scripts/types';
import { chooseFormation, choosePlayers } from '@/scripts/randomizer';
import DraftPick from '@/components/DraftPick.vue';
import PlayerCardCollection from '@/components/cards/PlayerCardCollection.vue';
import NonPlayerCard from '@/components/cards/NonPlayerCard.vue';

interface Props {
  optionsPerDraft: number;
  two_player: boolean;
}

const props = defineProps<Props>();

const GKCount = 2;
const DFCount = 4;
const MFCount = 5;
const FWCount = 5;

const selectedGKs0 = ref<Player[]>([]);
const selectedDFs0 = ref<Player[]>([]);
const selectedMFs0 = ref<Player[]>([]);
const selectedFWs0 = ref<Player[]>([]);

const selectedGKs1 = ref<Player[]>([]);
const selectedDFs1 = ref<Player[]>([]);
const selectedMFs1 = ref<Player[]>([]);
const selectedFWs1 = ref<Player[]>([]);

const selectedPlayers0 = computed(() => [
  ...selectedGKs0.value,
  ...selectedDFs0.value,
  ...selectedMFs0.value,
  ...selectedFWs0.value
]);
const selectedPlayers1 = computed(() => [
  ...selectedGKs1.value,
  ...selectedDFs1.value,
  ...selectedMFs1.value,
  ...selectedFWs1.value
]);

const formation0 = ref<Formation>({ name: '' });
const formation1 = ref<Formation>({ name: '' });

let options: Player[] = [];
let GKOptions: Player[] = [];
let DFOptions: Player[] = [];
let MFOptions: Player[] = [];
let FWOptions: Player[] = [];

let turn = 0;

function reset() {
  selectedGKs0.value = [];
  selectedDFs0.value = [];
  selectedMFs0.value = [];
  selectedFWs0.value = [];

  selectedGKs1.value = [];
  selectedDFs1.value = [];
  selectedMFs1.value = [];
  selectedFWs1.value = [];

  options = choosePlayers(
    props.optionsPerDraft * GKCount,
    props.optionsPerDraft * DFCount,
    props.optionsPerDraft * MFCount,
    props.optionsPerDraft * FWCount
  );
  GKOptions = options.splice(0, props.optionsPerDraft * GKCount);
  DFOptions = options.splice(0, props.optionsPerDraft * DFCount);
  MFOptions = options.splice(0, props.optionsPerDraft * MFCount);
  FWOptions = options.splice(0, props.optionsPerDraft * FWCount);

  formation0.value = chooseFormation();
  formation1.value = chooseFormation();

  turn = 0;
}

reset();

function handleSoloChoice(player0: Player, position: Position) {
  switch (position) {
    case Position.GK:
      selectedGKs0.value.push(player0);
      break;
    case Position.DF:
      selectedDFs0.value.push(player0);
      break;
    case Position.MF:
      selectedMFs0.value.push(player0);
      break;
    case Position.FW:
      selectedFWs0.value.push(player0);
      break;
  }

  turn = 1 - turn;
}

function handleDoubleChoice(player0: Player, player1: Player, position: Position) {
  switch (position) {
    case Position.GK:
      selectedGKs0.value.push(player0);
      selectedGKs1.value.push(player1);
      break;
    case Position.DF:
      selectedDFs0.value.push(player0);
      selectedDFs1.value.push(player1);
      break;
    case Position.MF:
      selectedMFs0.value.push(player0);
      selectedMFs1.value.push(player1);
      break;
    case Position.FW:
      selectedFWs0.value.push(player0);
      selectedFWs1.value.push(player1);
      break;
  }

  turn = 1 - turn;
}
</script>

<template>
  <button class="button" @click="reset">Reset</button>
  <h1
    class="title"
    v-if="
      two_player &&
      (selectedGKs0.length !== GKCount ||
        selectedDFs0.length !== DFCount ||
        selectedMFs0.length !== MFCount ||
        selectedFWs0.length !== FWCount)
    "
  >
    Player {{ turn + 1 }}'s turn.
  </h1>
  <div v-if="selectedGKs0.length < GKCount">
    <DraftPick
      :choice="GKOptions.splice(0, props.optionsPerDraft)"
      @choose="
        (p0, p1) =>
          two_player ? handleDoubleChoice(p0, p1, Position.GK) : handleSoloChoice(p0, Position.GK)
      "
    />
  </div>
  <div v-else-if="selectedDFs0.length < DFCount">
    <DraftPick
      :choice="DFOptions.splice(0, props.optionsPerDraft)"
      @choose="
        (p0, p1) =>
          two_player ? handleDoubleChoice(p0, p1, Position.DF) : handleSoloChoice(p0, Position.DF)
      "
    />
  </div>
  <div v-else-if="selectedMFs0.length < MFCount">
    <DraftPick
      :choice="MFOptions.splice(0, props.optionsPerDraft)"
      @choose="
        (p0, p1) =>
          two_player ? handleDoubleChoice(p0, p1, Position.MF) : handleSoloChoice(p0, Position.MF)
      "
    />
  </div>
  <div v-else-if="selectedFWs0.length < FWCount">
    <DraftPick
      :choice="FWOptions.splice(0, props.optionsPerDraft)"
      @choose="
        (p0, p1) =>
          two_player ? handleDoubleChoice(p0, p1, Position.FW) : handleSoloChoice(p0, Position.FW)
      "
    />
  </div>
  <div v-else-if="two_player">
    <h1 class="title">Player 1's selection.</h1>
    <PlayerCardCollection :players="selectedPlayers0" :hideCards="false" />
    <NonPlayerCard
      @reveal="() => {}"
      :name="formation0.name"
      prefix="formations"
      :revealed="true"
    />
    <h1 class="title">Player 2's selection</h1>
    <PlayerCardCollection :players="selectedPlayers1" :hideCards="false" />
    <NonPlayerCard
      @reveal="() => {}"
      :name="formation1.name"
      prefix="formations"
      :revealed="true"
    />
  </div>
  <div v-else>
    <PlayerCardCollection :players="selectedPlayers0" :hideCards="false" />
    <NonPlayerCard
      @reveal="() => {}"
      :name="formation0.name"
      prefix="formations"
      :revealed="true"
    />
  </div>
</template>

<style scoped>
.title {
  font-size: 3em;
  text-align: center;
  font-weight: bold;
  padding: 1em;
}

.button {
  font-size: 1.5rem;
  padding: 0.5rem;
  text-align: center;
}
</style>
