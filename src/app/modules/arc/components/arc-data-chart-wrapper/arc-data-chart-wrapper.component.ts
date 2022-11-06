import { Component, Input } from '@angular/core';
import { Observable, map, shareReplay, ignoreElements, of, catchError, tap, combineLatest } from 'rxjs';

import { ArcDataSimplified } from '../../models/arc-data.inferface';
import { ArcDataUtils } from '../../utils/arc-data.utils';
import { ArcDataService } from '../../services/arc-data/arc-data.service';
import { ArcStoreService } from '../../../shared/services/arc-store/arc-store.service';

@Component({
  selector: 'app-arc-data-chart-wrapper',
  templateUrl: './arc-data-chart-wrapper.component.html',
  styleUrls: ['./arc-data-chart-wrapper.component.sass']
})
export class ArcDataChartWrapperComponent {
  @Input() title: string = 'Arc Data Chart Wrapper';
  @Input() startDate: Date = new Date('2021-12-26');
  @Input() endDate: Date = new Date();

  constructor(private arcData: ArcDataService, private store: ArcStoreService) {}
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

  arcDataLabels$: Observable<string[]> = this.arcData$.pipe(
    map((data: ArcDataSimplified[]) => data.map((item: ArcDataSimplified) => item.gatunek)),
    tap(console.log)
  );

  arcDataNumbers$: Observable<number[]> = this.arcData$.pipe(
    map((data: ArcDataSimplified[]) => data.map((item: ArcDataSimplified) => item.oxygenPerTon)),
    tap(console.log)
  );

  error$: Observable<any> = this.arcData$.pipe(
    ignoreElements(),
    catchError((err) => of(err))
  );
}
