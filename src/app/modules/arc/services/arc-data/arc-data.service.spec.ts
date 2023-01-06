import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';

import { ArcDataDTO } from '../../models/arc-data.inferface';
import { ArcApiDTOService } from '../arc-api-dto/arc-api-dto.service';

import { ArcDataService } from './arc-data.service';

class MockArcApiDTOService {
  getData(): Observable<Partial<ArcDataDTO>[]> {
    return of([
      {
        gatunek: 'gatnek',
        ['Crushed Raw Magensite']: 1,
        ['Burnet Lime']: 2,
        ['Dolomitic Lime']: 3,
        ['Oxygen Per Ton']: 4,
        Anthracite: 1,
        ['SHELMO - Non ferrous scrap mix']: 1,
        Gatunek: 'gatnek',
        ['Power On Time [min]']: 1,
        ['Kwh Per Ton']: 1,
        A: 1,
        date: { $date: new Date(0) },
        _id: { $oid: '123' }
      }
    ]);
  }
}
describe('ArcDataService', () => {
  let service: ArcDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [{ provide: ArcApiDTOService, useClass: MockArcApiDTOService }]
    });
    service = TestBed.inject(ArcDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should map data', (done) => {
    service.getData().subscribe((data) => {
      expect(data[0].Anthracite).toEqual(1);
      expect(data[0].date).toEqual(new Date(0));
      expect(data[0].id).toEqual('123');
      expect(data[0].oxygenPerTon).toEqual(4);
      done();
    });
  });
});
