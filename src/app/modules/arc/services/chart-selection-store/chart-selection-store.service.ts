import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ChartSelection } from '../../interfaces/chart-selection.interface';
import { DEFAULT_SELECTIONS } from '../../components/arc-data-chart-selector/arc-data-chart-selector.const';

@Injectable({
  providedIn: 'root'
})
export class ChartSelectionStoreService {
  private readonly _chartSelections = new BehaviorSubject<ChartSelection>({ ...DEFAULT_SELECTIONS });
  readonly chartSelections$ = this._chartSelections.asObservable();

  get chartSelections(): ChartSelection {
    return this._chartSelections.getValue();
  }

  private set chartSelections(val: ChartSelection) {
    this._chartSelections.next(val);
  }

  updateSelections(chartSelection: ChartSelection) {
    this.chartSelections = chartSelection;
  }
}
