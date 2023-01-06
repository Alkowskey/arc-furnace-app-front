export interface ChartSelection {
  oxygenPerTon: boolean;
  kwhPerTon: boolean;
  powerOnTime: boolean;
  Anthracite: boolean;
  scrap: boolean;
  averageScrap: boolean;
}

export type ChartSelectionType = keyof ChartSelection;
