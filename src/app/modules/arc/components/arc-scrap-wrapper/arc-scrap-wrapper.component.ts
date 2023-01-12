import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';

import { ChartDataArc } from '../../interfaces/chart-wrapper.interface';
import { ArcDataScrapEnum, ArcDataSimplified } from '../../models/arc-data.inferface';
import { ChartSelectionStoreService } from '../../services/chart-selection-store/chart-selection-store.service';

@Component({
  selector: 'app-arc-scrap-wrapper',
  templateUrl: './arc-scrap-wrapper.component.html',
  styleUrls: ['./arc-scrap-wrapper.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArcScrapWrapperComponent {
  @Input() data: ArcDataSimplified[] = [];
  @Input() isAverege = false;
  @Input() isScatter = true;
  isScrapSelected: Observable<boolean> = this.chartSelectionStore.chartSelections$.pipe(
    map((selections) => selections.scrap)
  );

  allKeys = Object.values(ArcDataScrapEnum);
  selectedData$ = new Subject<ChartDataArc>();

  constructor(private chartSelectionStore: ChartSelectionStoreService) {}

  public getScrapData(key: ArcDataScrapEnum): ChartDataArc {
    const scrapData = {
      x: this.data.map((item) => item.Anthracite),
      y: this.data.map((item) => item.scrap[key])
    };

    scrapData.x.sort((a, b) => a - b);
    scrapData.y = scrapData.x.map((_, i) => scrapData.y[i]);

    return this.isAverege ? this.getAveregeData(scrapData) : scrapData;
  }

  private getAveregeData(data: ChartDataArc): ChartDataArc {
    const x = [...new Set(data.x)];
    const y = x.map((x) => {
      const y = data.y.filter((_, i) => data.x[i] === x);
      return y.reduce((acc, curr) => acc + curr, 0) / y.length;
    });
    return { x, y };
  }
}
