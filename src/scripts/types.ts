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

export interface Team {
  has_uniform: boolean;
  name: string;
}

export interface Coach {
  name: string;
}

export interface Manager {
  name: string;
}

export interface Formation {
  name: string;
}
