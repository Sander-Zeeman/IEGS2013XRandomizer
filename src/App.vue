<script setup lang="ts">
import { ref } from 'vue';
import { type Player, Position, chooseNRandom, createPlayer } from './utility';
import PlayerCard from './components/PlayerCard.vue';
import NonPlayerCard from './components/NonPlayerCard.vue';
import { players, teams, coaches, managers, formations } from '../assets/data.json';

let tbl = document.getElementById("teamTable") as HTMLTableElement;
let index = 0;
tbl.style.border = '1px solid'

let row = tbl.insertRow(index++);
let cell1 = row.insertCell(0);
let cell2 = row.insertCell(1);
cell2.innerHTML = "Emblem";
cell2.style.border = '1px solid';
cell1.innerHTML = "Name";
cell1.style.textAlign = 'center';
cell1.style.verticalAlign = 'middle';
cell1.style.border = '1px solid';

let Xteams = [
"Raimon"                                ,
"Raimon II"                            ,
"Inazuma National"                      ,
"Royal Academy"                         ,
"Royal Academy Redux"                   ,
"Zeus"                                  ,
"Alius Academy"                         ,
"Chaos"                                 ,
"Genesis"                               ,
"Diamond Dust"                          ,
"Prominence"                            ,
"Gemini Storm"                          ,
"Epsilon"                               ,
"Dark Emperors"                         ,
"Neo National"                          ,
"International Allstars Remastered"     ,
"Little Gigant"                         ,
"Orpheus"                               ,
"Unicorns"                              ,
"The Kingdom"                           ,
"Fire Dragon"                           ,
"Knights of Queen"                      ,
"The Empire"                            ,
 "Brocken Brigade"                      ,
 "Rose Griffons"                        ,
 "Red Matador"                          ,
"Dark Angels"                           ,
"Girls Team"                            ,
"Team Ogre"                             ,
"Raimon (GO)"                           ,
 "Black Templars"                       ,
 "Ancient Darkness"                     ,
 "Eternal Light"                        ,
"Zero"                                  ,
"The Sherwinds"                         ,
"Protocol Omega"                        ,
"Revolutionaries"                       ,
"Fifth Sector"                          ,
"Zanark Domain"                         ,
"The Despairadoes"                      ,
"New Inazuma National"                  ,
"Inazuma Legend National"               ,
"Dragon Link"                           ,
"Alpine"                                ,
"Universal Middle School"               ,
 "White Deer"                           ,
 "Brainwashing Junior High"             ,
 "Kirkwood Junior High"                 ,
 "Team Zoolan"                          ,
 "Inazuma KFC"                          ,
 "Golden Oldies"                        ,
 "Protocol Omega 1.0"                   ,
 "Protocol Omega 2.0"                   ,
 "Protocol Omega 3.0"                   ,
 "Mirage Academy"                       ,
 "Mount Olympus"                        ,
 "Royal Academy (GO)"                   ,
 "Almighty Faith"                       ,
 "Milky Way Charter"                    ,
 "Pirates Cove Merchant Marine Academy" ,
 "Lunar Sea Military Academy"           ,
 "Perfect Cascade"                      ,
 "El Dorado 01"                         ,
 "El Dorado 02"                         ,
 "El Dorado 03"                         ,
 "Chrono Storm"                         ,
 "Zan"                                  ,
 "Gahl"                                 ,
 "Gihl"                                 ,
 "Ragnah"                               ,
 "Lunar Howl"                           ,
 "Nosfanatica"                          ,
 "Children of the Night"                ,
 "Earth Eleven"                         ,
 "Japanese Resistance"                  ,
 "Fire Dragon (GO)"                     ,
 "Big Waves"                            ,
 "Shamshir"                             ,
 "Muay Tigers"                          ,
 "Storm Wolves"                         ,
 "Naiadi Eleven"                        ,
 "Silica Eleven"                        ,
 "Fertilia Eleven"                      ,
 "Magmavia Eleven"                      ,
 "Falam Medius"                         ,
 "Ixar Fleet"                           ,
 "Big Bang"                             ,
 "Supernova"                            ,
 "Space Rankers"                        
];

for (const team of Xteams) {
  let row = tbl.insertRow(index++);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  cell2.innerHTML = "<img style='width: 40%' src=assets/emblems/" + team.split(' ').join('_') + ".png />";
  cell2.style.border = '1px solid';
  cell1.innerHTML = team;
  cell1.style.textAlign = 'center';
  cell1.style.verticalAlign = 'middle';
  cell1.style.border = '1px solid';
}

function name_to_position(pos: string): Position {
  switch (pos) {
    case 'GK':
      return Position.GK;
    case 'DF':
      return Position.DF;
    case 'MF':
      return Position.MF;
    case 'FW':
      return Position.FW;
  }
  return Position.None;
}

const m_players: Player[] = players.map((player) =>
  createPlayer(player.name, name_to_position(player.position), parseInt(player.index), player.team)
);
const m_teams = teams.map((team) => team.name);
const m_coaches = coaches.map((coach) => coach.name);
const m_managers = managers.map((manager) => manager.name);
const m_formations = formations.map((formation) => formation.name);

const chosenPlayers = ref<Player[]>([]);
const chosenCoach = ref('');
const chosenManager = ref('');
const chosenOutfit = ref('');
const chosenEmblem = ref('');
const chosenFormation = ref('');

function choosePlayers() {
  const GKs = m_players.filter((player) => player.position == Position.GK);
  const DFs = m_players.filter((player) => player.position == Position.DF);
  const MFs = m_players.filter((player) => player.position == Position.MF);
  const FWs = m_players.filter((player) => player.position == Position.FW);

  const chosenGKs = chooseNRandom<Player>(GKs, 2);
  const chosenDFs = chooseNRandom<Player>(DFs, 4);
  const chosenMFs = chooseNRandom<Player>(MFs, 5);
  const chosenFWs = chooseNRandom<Player>(FWs, 5);

  console.table(chosenGKs);
  console.table(chosenDFs);
  console.table(chosenMFs);
  console.table(chosenFWs);

  chosenPlayers.value = chosenGKs.concat(chosenDFs, chosenMFs, chosenFWs);
}

function chooseCoach() {
  chosenCoach.value = chooseNRandom<string>(m_coaches, 1)[0];
}

function chooseManager() {
  chosenManager.value = chooseNRandom<string>(m_managers, 1)[0];
}

function chooseOutfit() {
  const outfitTeams = teams.filter((team) => team.has_uniform).map((team) => team.name);
  chosenOutfit.value = chooseNRandom<string>(outfitTeams, 1)[0];
}

function chooseEmblem() {
  chosenEmblem.value = chooseNRandom<string>(m_teams, 1)[0];
}

function chooseFormation() {
  chosenFormation.value = chooseNRandom<string>(m_formations, 1)[0];
}

function chooseRandom() {
  choosePlayers();
  chooseCoach();
  chooseManager();
  chooseOutfit();
  chooseEmblem();
  chooseFormation();
}

chooseRandom();
</script>

<template>
  <main>
    <h1 class="title">Inazuma Eleven GO Strikers 2013 Xtreme Randomizer</h1>
    <div class="ButtonWrapper">
      <button class="Button" @click="chooseRandom">Randomize</button>
    </div>
    <div id="PlayerCards">
      <h2 class="subtitle">Players</h2>
      <div class="CardGroup">
        <div v-for="(player, idx) in chosenPlayers" :key="idx">
          <PlayerCard
            :name="player.name"
            :team="player.team"
            :position="player.position"
            :index="player.index"
          />
        </div>
      </div>
    </div>
    <div id="SupportCards">
      <div class="CardGroup">
        <div>
          <h3 class="subtitle">Coach</h3>
          <NonPlayerCard :name="chosenCoach" prefix="coaches" />
        </div>
        <div>
          <h3 class="subtitle">Manager</h3>
          <NonPlayerCard :name="chosenManager" prefix="managers" />
        </div>
      </div>
    </div>
    <div id="OutfitCards">
      <div class="CardGroup">
        <div>
          <h3 class="subtitle">Outfit</h3>
          <NonPlayerCard :name="chosenOutfit" prefix="emblems" />
        </div>
        <div id="FormationCards">
          <h3 class="subtitle">Formation</h3>
          <NonPlayerCard :name="chosenFormation" prefix="formations" />
        </div>
        <div>
          <h3 class="subtitle">Emblem</h3>
          <NonPlayerCard :name="chosenEmblem" prefix="emblems" />
        </div>
      </div>
    </div>
  </main>
  <footer style="height: 20px"></footer>
</template>

<style scoped>
.title {
  font-size: xxx-large;
  text-align: center;
}

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

.ButtonWrapper {
  width: 100%;
  text-align: center;
}

.Button {
  margin-top: 25px;
  width: 200px;
  height: 50px;
  border-radius: 15px;
  background-color: #50c878;
  cursor: pointer;
}

</style>
