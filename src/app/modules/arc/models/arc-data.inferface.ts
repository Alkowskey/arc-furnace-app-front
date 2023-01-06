export type ArcDataSimplified = {
  id: string;
  gatunek: string;
  oxygenPerTon: number;
  kwhPerTon: number;
  powerOnTime: number;
  Anthracite: number;
  date: Date; //Rename it
  scrap: ArcDataScrap;
};

export enum ArcDataScrapEnum {
  A = 'A',
  B = 'B',
  G = 'G',
  H = 'H',
  Ł = 'Ł',
  M = 'M',
  O = 'O',
  P = 'P',
  T = 'T',
  U = 'U',
  W = 'W',
  Z = 'Z'
}
// create type as key of ArcDataScrapEnum and type is number
export type ArcDataScrap = {
  [key in ArcDataScrapEnum]: number;
};

export interface ArcDataDTO extends ArcDataStatusDTO, ArcElementDTO {
  _id: { $oid: string };
  level_0: number; // not sure if this is needed
  gatunek: string;
  ['Crushed Raw Magensite']: number;
  ['Burnet Lime']: number;
  ['Dolomitic Lime']: number;
  ['Oxygen Per Ton']: number;
  Anthracite: number;
  ['SHELMO - Non ferrous scrap mix']: number; //TODO - rename to something more meaningful
  Gatunek: string; //IDK why its twice here
  ['Power On Time [min]']: number;
  ['Kwh Per Ton']: number;
  date: { $date: Date };
  A: number;
  B: number;
  G: number;
  H: number;
  Ł: number;
  M: number;
  O: number;
  P: number;
  T: number;
  U: number;
  W: number;
  Z: number;
}

export interface ArcDataStatusDTO {
  //TODO - rename it somehow
  A: number;
  B: number;
  G: number;
  H: number;
  Ł: number;
  M: number;
  O: number;
  P: number;
  T: number;
  U: number;
  W: number;
  Z: number;
  A1: number;
  B1: number;
  TOPEX_MGO: number;
  F1: number;
}
export interface ArcElementDTO {
  C: number;
  Mn: number;
  Si: number;
  P: number;
  S: number;
  Cr: number;
  Ni: number;
  Cu: number;
  Mo: number;
  Sn: number;
  N: number;
  Pb: number;
  As: number;
  Zn: number;
  Zr: number;
  Sb: number;
  NFMeq: number;
}
