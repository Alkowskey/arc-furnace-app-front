import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ArcDataSimplified } from 'src/app/modules/arc/models/arc-data.inferface';
import { ArcDataService } from 'src/app/modules/arc/services/arc-data/arc-data.service';

import { ArcStoreService } from '../../services/arc-store/arc-store.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-table-wrapper',
  templateUrl: './table-wrapper.component.html',
  styleUrls: ['./table-wrapper.component.sass']
})
export class TableWrapperComponent {
  displayedColumns: string[] = [
    'id',
    'gatunek',
    'oxygenPerTon',
    'kwhPerTon',
    'powerOnTime',
    'Anthracite',
    'date',
    'scrap'
  ];
  dataSource: Observable<ArcDataSimplified[]> = this.arcData.getData();

  constructor(private arcData: ArcDataService, private store: ArcStoreService) {}
}
