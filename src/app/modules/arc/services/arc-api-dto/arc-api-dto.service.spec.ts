import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ArcApiDTOService } from './arc-api-dto.service';

describe('ArcApiDTOService', () => {
  let service: ArcApiDTOService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ArcApiDTOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
