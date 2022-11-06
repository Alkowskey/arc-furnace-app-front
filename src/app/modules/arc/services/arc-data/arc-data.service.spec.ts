import { TestBed } from '@angular/core/testing';

import { ArcDataService } from './arc-data.service';

describe('ArcDataService', () => {
  let service: ArcDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArcDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
