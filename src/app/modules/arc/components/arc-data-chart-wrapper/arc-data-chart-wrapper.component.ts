import { Component, Input } from '@angular/core';
import { Observable, map, shareReplay, ignoreElements, of, catchError } from 'rxjs';

import { ArcDataSimplified } from '../../models/arc-data.inferface';
import { ArcDataUtils } from '../../utils/arc-data.utils';
import { ArcDataService } from '../../services/arc-data/arc-data.service';

@Component({
  selector: 'app-arc-data-chart-wrapper',
  templateUrl: './arc-data-chart-wrapper.component.html',
  styleUrls: ['./arc-data-chart-wrapper.component.sass']
})
export class ArcDataChartWrapperComponent {
  @Input() title: string = 'Arc Data Chart Wrapper';
  @Input() startDate: Date = new Date('2021-12-26');
  @Input() endDate: Date = new Date();

  constructor(private arcData: ArcDataService) {}

  fullData: Observable<ArcDataSimplified[]> = this.arcData.getData().pipe(
    map((data: ArcDataSimplified[]) =>
      data.filter((item: ArcDataSimplified) =>
        ArcDataUtils.isDateBetween({
          date: item.date,
          start: this.startDate,
          end: this.endDate
        })
      )
    ),
    shareReplay()
  );
  arcDataLabels$: Observable<string[]> = this.fullData.pipe(
    map((data: ArcDataSimplified[]) => data.map((item: ArcDataSimplified) => item.gatunek))
  );

  arcData$: Observable<number[]> = this.fullData.pipe(
    map((data: ArcDataSimplified[]) => data.map((item: ArcDataSimplified) => item.oxygenPerTon))
  );

  error$: Observable<any> = this.fullData.pipe(
    ignoreElements(),
    catchError((err) => of(err))
  );
}
