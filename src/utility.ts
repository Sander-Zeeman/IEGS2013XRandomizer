import { type Player, type Team, type Coach, type Manager, type Formation } from './types';
import { Position } from './types';

export function name_to_img(name: String, prefix: String): String {
  return './assets/' + prefix + '/' + name.split(' ').join('_') + '.png';
}

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

export function choosePlayers(players: Player[]): Player[] {
  const GKs = players.filter((player) => player.position == Position.GK);
  const DFs = players.filter((player) => player.position == Position.DF);
  const MFs = players.filter((player) => player.position == Position.MF);
  const FWs = players.filter((player) => player.position == Position.FW);

  const chosenGKs = chooseNRandom<Player>(GKs, 2);
  const chosenDFs = chooseNRandom<Player>(DFs, 4);
  const chosenMFs = chooseNRandom<Player>(MFs, 5);
  const chosenFWs = chooseNRandom<Player>(FWs, 5);

  return chosenGKs.concat(chosenDFs, chosenMFs, chosenFWs);
}

export function chooseCoach(coaches: Coach[]): Coach {
  return chooseNRandom<Coach>(coaches, 1)[0];
}

export function chooseManager(managers: Manager[]): Manager {
  return chooseNRandom<Manager>(managers, 1)[0];
}

export function chooseOutfit(teams: Team[]): Team {
  const m_teams = teams.filter((team) => team.has_uniform && !team.name.startsWith('Secret_'));
  return chooseNRandom<Team>(m_teams, 1)[0];
}

export function chooseEmblem(teams: Team[]): Team {
  const m_teams = teams.filter((team) => !team.name.startsWith('Secret_'));
  return chooseNRandom<Team>(m_teams, 1)[0];
}

export function chooseFormation(formations: Formation[]): Formation {
  return chooseNRandom<Formation>(formations, 1)[0];
}
