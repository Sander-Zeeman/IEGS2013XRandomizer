<script setup lang="ts">
import { ref } from 'vue';

import { Position } from './utility';
import PlayerCard from './components/PlayerCard.vue';
import NonPlayerCard from './components/NonPlayerCard.vue';

const players = ref([
  'P1',
  'P2',
  'P3',
  'P4',
  'P5',
  'P6',
  'P7',
  'P8',
  'P9',
  'P10',
  'P11',
  'P12',
  'P13',
  'P14',
  'P15',
  'P16'
]);

const pos = ref(Position.GK);
const coach = ref('Mark Evans');
const manager = ref('Silvia Woods');
const outfit = ref('Raimon');
const emblem = ref('Royal Academy');
const formation = ref('4-4-2');
</script>

<template>
  <main>
    <h1 class="title">Inazuma Eleven GO Strikers 2013 Xtreme Randomizer</h1>
    <div id="PlayerCards">
      <h2>Players</h2>
      <div class="CardGroup">
        <div v-for="(player, idx) in players" :key="idx">
          <PlayerCard :name="player" team="Raimon" :position="pos" :index="idx" />
        </div>
      </div>
    </div>
    <div id="SupportCards">
      <h2>Support</h2>
      <div class="CardGroup">
        <NonPlayerCard :name="coach" prefix="coaches" />
        <NonPlayerCard :name="manager" prefix="managers" />
      </div>
    </div>
    <div id="OutfitCards">
      <h2>Outfit</h2>
      <div class="CardGroup">
        <NonPlayerCard :name="outfit" prefix="emblems" />
        <NonPlayerCard :name="emblem" prefix="emblems" />
      </div>
    </div>
    <div id="FormationCards">
      <h2>Formation</h2>
      <NonPlayerCard :name="formation" prefix="formations" />
    </div>
  </main>
</template>

<style scoped>
/* https://meyerweb.com/eric/thoughts/2007/05/01/reset-reloaded/ */
/* Reset stylesheet */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
font,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-weight: inherit;
  font-style: inherit;
  font-size: 100%;
  font-family: inherit;
  vertical-align: baseline;
}
/* remember to define focus styles! */
:focus {
  outline: 0;
}
body {
  line-height: 1;
  color: black;
  background: white;
}
ol,
ul {
  list-style: none;
}
/* tables still need 'cellspacing="0"' in the markup */
table {
  border-collapse: separate;
  border-spacing: 0;
}
caption,
th,
td {
  text-align: left;
  font-weight: normal;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
}
blockquote,
q {
  quotes: '' '';
}
/* End reset stylesheet */

* {
  font-family: cursive;
}

.title {
  font-size: x-large;
}

.CardGroup {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
}
</style>
