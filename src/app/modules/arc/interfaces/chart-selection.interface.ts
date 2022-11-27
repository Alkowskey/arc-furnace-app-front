export interface ChartSelection {
  oxygenPerTon: boolean;
  kwhPerTon: boolean;
  powerOnTime: boolean;
  Anthracite: boolean;
  two: boolean; //TODO - rename it to something more meaningful
}

export type ChartSelectionType = keyof ChartSelection;
