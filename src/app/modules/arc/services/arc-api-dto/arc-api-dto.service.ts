import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArcData } from '../../models/arc-data.inferface';

@Injectable({
  providedIn: 'root'
})
export class ArcApiDTOService {
  API_URL: string = 'http://localhost:8000/data';

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<ArcData[]> {
    return this.httpClient.get<ArcData[]>(this.API_URL);
  }
}
