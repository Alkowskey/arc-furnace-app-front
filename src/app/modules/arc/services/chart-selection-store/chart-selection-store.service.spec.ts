import { TestBed } from '@angular/core/testing';

import { ChartSelectionStoreService } from './chart-selection-store.service';

describe('ChartSelectionStoreService', () => {
  let service: ChartSelectionStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartSelectionStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
