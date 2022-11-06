import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ArcDataDTO } from '../../models/arc-data.inferface';

@Injectable({
  providedIn: 'root'
})
export class ArcApiDTOService {
  API_URL: string = 'http://localhost:8000/data';

  constructor(private httpClient: HttpClient) {}

  getData(): Observable<ArcDataDTO[]> {
    return this.httpClient.get<ArcDataDTO[]>(this.API_URL);
  }
}
