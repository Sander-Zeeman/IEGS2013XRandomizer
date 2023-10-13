import { Position } from '@/scripts/types';

export function position_to_style(position: Position): string {
  switch (position) {
    case Position.GK:
      return '-webkit-text-stroke-color: orange';
    case Position.DF:
      return '-webkit-text-stroke-color: green';
    case Position.MF:
      return '-webkit-text-stroke-color: blue';
    case Position.FW:
      return '-webkit-text-stroke-color: red';
  }
  return '';
}

export function position_to_name(position: Position): string {
  switch (position) {
    case Position.GK:
      return 'GK';
    case Position.DF:
      return 'DF';
    case Position.MF:
      return 'MF';
    case Position.FW:
      return 'FW';
  }
  return '';
}

export function name_to_position(pos: string): Position {
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
