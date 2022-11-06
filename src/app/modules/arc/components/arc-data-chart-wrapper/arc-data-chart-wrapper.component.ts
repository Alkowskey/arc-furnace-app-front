import { Component } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';

import { ArcDataSimplified } from '../../models/arc-data.inferface';
import { ArcDataUtils } from '../../utils/arc-data.utils';
import { ArcDataService } from '../../services/arc-data/arc-data.service';

@Component({
  selector: 'app-arc-data-chart-wrapper',
  templateUrl: './arc-data-chart-wrapper.component.html',
  styleUrls: ['./arc-data-chart-wrapper.component.sass']
})
export class ArcDataChartWrapperComponent {
  constructor(private arcData: ArcDataService) {}

  someStaticDateStart = new Date('2021-12-26'); //There will be some kind of date picker
  fullData: Observable<ArcDataSimplified[]> = this.arcData.getData().pipe(
    map((data: ArcDataSimplified[]) =>
      data.filter((item: ArcDataSimplified) =>
        ArcDataUtils.isDateBetween({
          date: item.date,
          start: this.someStaticDateStart,
          end: new Date()
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
}
