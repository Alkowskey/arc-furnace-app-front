export interface ArcDataSimplified {
  id: string;
  gatunek: string;
  oxygenPerTon: number;
  date: Date; //Rename it
}

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
  powerOnTime: number;
  kwhPerTon: number;
  date: { $date: Date };
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
