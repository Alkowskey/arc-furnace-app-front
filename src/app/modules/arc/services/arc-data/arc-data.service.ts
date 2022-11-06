import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { ArcDataSimplified, ArcDataDTO } from '../../models/arc-data.inferface';
import { ArcApiDTOService } from '../arc-api-dto/arc-api-dto.service';

@Injectable({
  providedIn: 'root'
})
export class ArcDataService {
  constructor(private arcApiDTO: ArcApiDTOService) {}

  getData(): Observable<ArcDataSimplified[]> {
    return this.arcApiDTO
      .getData()
      .pipe(map((data: ArcDataDTO[]) => data.map((item: ArcDataDTO) => this.mapToSimplified(item))));
  }

  private mapToSimplified(item: ArcDataDTO): ArcDataSimplified {
    //TODO - whole mapping will happen here, or some helper function outside of this class
    return { ...item, date: new Date(item.date.$date), id: item._id.$oid, oxygenPerTon: item['Oxygen Per Ton'] };
  }
}
