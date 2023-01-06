import { FormGroup, FormControl } from '@angular/forms';

import { ChartSelection } from '../../interfaces/chart-selection.interface';
export const DEFAULT_SELECTIONS: ChartSelection = {
  Anthracite: false,
  scrap: true,
  kwhPerTon: false,
  oxygenPerTon: false,
  powerOnTime: false,
  averageScrap: false
} as const;

export const CHART_SELECTOR_FORM = new FormGroup({
  dependents: new FormGroup({
    oxygenPerTon: new FormControl(DEFAULT_SELECTIONS.oxygenPerTon, { nonNullable: true }),
    kwhPerTon: new FormControl(DEFAULT_SELECTIONS.kwhPerTon, { nonNullable: true }),
    powerOnTime: new FormControl(DEFAULT_SELECTIONS.powerOnTime, { nonNullable: true })
  }),
  specifying: new FormGroup({
    Anthracite: new FormControl(DEFAULT_SELECTIONS.Anthracite, { nonNullable: true }),
    scrap: new FormControl(DEFAULT_SELECTIONS.scrap, { nonNullable: true })
  }),
  options: new FormGroup({
    averageScrap: new FormControl(DEFAULT_SELECTIONS.averageScrap, { nonNullable: true })
  })
});
