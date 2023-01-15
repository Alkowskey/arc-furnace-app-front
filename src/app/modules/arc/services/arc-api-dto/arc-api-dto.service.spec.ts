import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ArcApiDTOService } from './arc-api-dto.service';

describe('ArcApiDTOService', () => {
  let service: ArcApiDTOService;
  let httpMock: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ArcApiDTOService);
    httpMock = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should get data from API', () => {
    const spy = spyOn(httpMock, 'get').and.returnValue(of());

    service.getData();

    expect(spy).toHaveBeenCalled();
  });

  it('Should call getData with correct url', () => {
    const spy = spyOn(httpMock, 'get').and.returnValue(of());

    service.getData();

    expect(spy).toHaveBeenCalledWith(service.API_URL);
  });
});
