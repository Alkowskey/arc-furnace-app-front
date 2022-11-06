import { TestBed } from '@angular/core/testing';

import { ArcStoreService } from './arc-store.service';

describe('ArcStoreService', () => {
  let service: ArcStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArcStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
