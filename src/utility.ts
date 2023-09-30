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

export function chooseNRandom<T>(array: T[], N: number): T[] {
  return chooseN<T>(shuffle<T>(array), N);
}

export function createPlayer(
  name: string,
  position: Position,
  index: number,
  team: string
): Player {
  const p = { name: '', position: Position.None, index: 0, team: '' };
  p.name = name;
  p.position = position;
  p.index = index;
  p.team = team;
  return p;
}

export enum Position {
  None,
  GK,
  DF,
  MF,
  FW
}

export interface Player {
  name: string;
  position: Position;
  index: number;
  team: string;
}
