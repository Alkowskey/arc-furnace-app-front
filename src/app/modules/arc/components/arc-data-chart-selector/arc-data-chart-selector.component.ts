import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';

import { UnsubscribeDirective } from '../../../shared/directives/unsubscribe.directive';
import { ChartSelectionStoreService } from '../../services/chart-selection-store/chart-selection-store.service';
import { ChartSelection } from '../../interfaces/chart-selection.interface';

import { CHART_SELECTOR_FORM } from './arc-data-chart-selector.const';

@Component({
  selector: 'app-arc-data-chart-selector',
  templateUrl: './arc-data-chart-selector.component.html',
  styleUrls: ['./arc-data-chart-selector.component.sass']
})
export class ArcDataChartSelectorComponent extends UnsubscribeDirective implements OnInit {
  options = CHART_SELECTOR_FORM;
  constructor(private chartSelectionStore: ChartSelectionStoreService) {
    super();
  }
  ngOnInit(): void {
    this.options.valueChanges.pipe(takeUntil(this.destroyed)).subscribe((selections) => {
      this.chartSelectionStore.updateSelections(this.getSelections(selections));
    });
  }

  private getSelections({
    dependents,
    specifying,
    options
  }: {
    dependents?: Partial<ChartSelection>;
    specifying?: Partial<ChartSelection>;
    options?: Partial<ChartSelection>;
  }): ChartSelection {
    return Object.entries({ ...dependents, ...specifying, ...options }).reduce(
      (acc, curr) => ({ ...acc, [curr[0]]: curr[1] }),
      {} as ChartSelection
    );
  }
}
