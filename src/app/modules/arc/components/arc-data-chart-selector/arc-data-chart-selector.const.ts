import { FormGroup, FormControl } from '@angular/forms';

import { ChartSelection } from '../../interfaces/chart-selection.interface';
export const DEFAULT_SELECTIONS: ChartSelection = {
  Anthracite: true,
  two: false,
  kwhPerTon: false,
  oxygenPerTon: false,
  powerOnTime: true
} as const;

export const CHART_SELECTOR_FORM = new FormGroup({
  dependents: new FormGroup({
    oxygenPerTon: new FormControl(DEFAULT_SELECTIONS.oxygenPerTon, { nonNullable: true }),
    kwhPerTon: new FormControl(DEFAULT_SELECTIONS.kwhPerTon, { nonNullable: true }),
    powerOnTime: new FormControl(DEFAULT_SELECTIONS.powerOnTime, { nonNullable: true })
  }),
  specifying: new FormGroup({
    Anthracite: new FormControl(DEFAULT_SELECTIONS.Anthracite, { nonNullable: true }),
    two: new FormControl(DEFAULT_SELECTIONS.two, { nonNullable: true }) //TODO - rename it to something more meaningful
  })
});
