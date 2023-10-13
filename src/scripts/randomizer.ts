import {
  Position,
  type Player,
  type Coach,
  type Manager,
  type Team,
  type Formation
} from '@/scripts/types';
import { name_to_position } from '@/scripts/type_util';

import { players, teams, coaches, managers, formations } from '@/../assets/data.json';

const m_players = players.map(
  (player) =>
    <Player>{
      index: parseInt(player.index),
      team: player.team,
      position: name_to_position(player.position),
      name: player.name
    }
);
const m_coaches = coaches;
const m_managers = managers;
const m_outfits = teams.filter((team) => team.has_uniform && !team.name.startsWith('Secret_'));
const m_emblems = teams.filter((team) => !team.name.startsWith('Secret_'));
const m_formations = formations;

function shuffle<T>(array: T[]): T[] {
  array.sort(() => 0.5 - Math.random());
  return array;
}

function chooseN<T>(array: T[], N: number): T[] {
  return array.slice(0, N);
}

function chooseNRandom<T>(array: T[], N: number): T[] {
  return chooseN<T>(shuffle<T>(array), N);
}

export function choosePlayers(
  GKCount: number,
  DFCount: number,
  MFCount: number,
  FWCount: number
): Player[] {
  const GKs = m_players.filter((player) => player.position == Position.GK);
  const DFs = m_players.filter((player) => player.position == Position.DF);
  const MFs = m_players.filter((player) => player.position == Position.MF);
  const FWs = m_players.filter((player) => player.position == Position.FW);

  const chosenGKs = chooseNRandom<Player>(GKs, GKCount);
  const chosenDFs = chooseNRandom<Player>(DFs, DFCount);
  const chosenMFs = chooseNRandom<Player>(MFs, MFCount);
  const chosenFWs = chooseNRandom<Player>(FWs, FWCount);

  return [...chosenGKs, ...chosenDFs, ...chosenMFs, ...chosenFWs];
}

export function chooseCoach(): Coach {
  return chooseNRandom<Coach>(m_coaches, 1)[0];
}

export function chooseManager(): Manager {
  return chooseNRandom<Manager>(m_managers, 1)[0];
}

export function chooseOutfit(): Team {
  return chooseNRandom<Team>(m_outfits, 1)[0];
}

export function chooseEmblem(): Team {
  return chooseNRandom<Team>(m_emblems, 1)[0];
}

export function chooseFormation(): Formation {
  return chooseNRandom<Formation>(m_formations, 1)[0];
}
