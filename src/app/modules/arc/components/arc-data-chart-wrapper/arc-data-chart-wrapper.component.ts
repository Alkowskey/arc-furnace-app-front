import { Component, Input } from '@angular/core';
import { Observable, map, shareReplay, ignoreElements, of, catchError, combineLatest } from 'rxjs';

import { ArcDataSimplified } from '../../models/arc-data.inferface';
import { ArcDataUtils } from '../../utils/arc-data.utils';
import { ArcDataService } from '../../services/arc-data/arc-data.service';
import { ArcStoreService } from '../../../shared/services/arc-store/arc-store.service';
import { ChartSelectionStoreService } from '../../services/chart-selection-store/chart-selection-store.service';
import { ChartSelection, ChartSelectionType } from '../../interfaces/chart-selection.interface';
import { ChartDataArc } from '../../interfaces/chart-wrapper.interface';
@Component({
  selector: 'app-arc-data-chart-wrapper',
  templateUrl: './arc-data-chart-wrapper.component.html',
  styleUrls: ['./arc-data-chart-wrapper.component.sass']
})
export class ArcDataChartWrapperComponent {
  @Input() title: string = 'Arc Data Chart Wrapper';
  @Input() startDate: Date = new Date('2021-12-26');
  @Input() endDate: Date = new Date();

  constructor(
    private arcData: ArcDataService,
    private store: ArcStoreService,
    private chartSelectionStore: ChartSelectionStoreService
  ) {}
  arcCharts$ = this.chartSelectionStore.chartSelections$;
  arcData$: Observable<ArcDataSimplified[]> = combineLatest([this.store.dateRange$, this.arcData.getData()]).pipe(
    map(([{ start, end }, data]) =>
      data.filter((item: ArcDataSimplified) =>
        ArcDataUtils.isDateBetween({
          date: item.date,
          start,
          end
        })
      )
    ),
    shareReplay()
  );

  // TODO - rename
  arcDataLabels$ = combineLatest([this.arcData$, this.arcCharts$]).pipe(
    map(([data, charts]) => this.getSelectedData(data, charts)),
    map((data) => this.pairSelectedData(data as { [key in ChartSelectionType]: (number | string)[] }))
  );

  error$: Observable<any> = this.arcData$.pipe(
    ignoreElements(),
    catchError((err) => of(err))
  );

  private getSelectedData(data: ArcDataSimplified[], chart: ChartSelection): { [key: string]: (number | string)[] } {
    const selectedProperties = data.map((item: ArcDataSimplified) => ArcDataUtils.selectProperties(item, { ...chart }));
    return selectedProperties.reduce((acc: { [key: string]: (string | number)[] }, curr) => {
      Object.entries(curr).forEach(([key, value]) => {
        acc[key]?.push(value) || (acc[key] = [value]);
      });
      return acc;
    }, {});
  }

  private pairSelectedData(data: { [key in ChartSelectionType]: (number | string)[] }): ChartDataArc[] {
    return [
      this.buildChartData(data.Anthracite, data.oxygenPerTon, 'Oxygen per ton', 'Anthracite'),
      this.buildChartData(data.Anthracite, data.powerOnTime, 'Power on time', 'Anthracite'),
      this.buildChartData(data.Anthracite, data.kwhPerTon, 'Kwh per ton', 'Anthracite')
    ].filter((item) => item?.x && item?.y) as ChartDataArc[];
  }

  private buildChartData(
    x: (number | string)[],
    y: (number | string)[],
    xLabel: string,
    yLabel: string
  ): ChartDataArc | null {
    return {
      y: y as number[],
      x: x as number[],
      yLabel,
      xLabel
    };
  }
}
