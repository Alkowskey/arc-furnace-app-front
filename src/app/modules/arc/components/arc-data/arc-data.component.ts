import { Component } from '@angular/core';

import { ArcStoreService } from '../../../shared/services/arc-store/arc-store.service';
@Component({
  selector: 'app-arc-data',
  templateUrl: './arc-data.component.html',
  styleUrls: ['./arc-data.component.sass']
})
export class ArcDataComponent {
  constructor(private store: ArcStoreService) {}
  dateRange$ = this.store.dateRange$;
}
