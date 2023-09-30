export function name_to_img(name: String, prefix: String): String {
  return ('./assets/' + prefix + '/' + name.split(' ').join('_') + '.png');
}

export enum Position {
  None,
  GK,
  DF,
  MF,
  FW
}
