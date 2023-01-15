import { TestBed } from '@angular/core/testing';

import { DEFAULT_SELECTIONS } from '../../components/arc-data-chart-selector/arc-data-chart-selector.const';
import { ChartSelection } from '../../interfaces/chart-selection.interface';

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

  it('Should get default chart selections', () => {
    expect(service.chartSelections).toEqual({ ...DEFAULT_SELECTIONS });
  });

  it('should update chart selections to have averageScrap true', () => {
    const newChartSelections: ChartSelection = {
      ...DEFAULT_SELECTIONS,
      averageScrap: true
    };

    service.updateSelections(newChartSelections);

    expect(service.chartSelections).toEqual(newChartSelections);
  });
});
