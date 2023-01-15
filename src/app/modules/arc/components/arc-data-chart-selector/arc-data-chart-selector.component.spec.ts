import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSelectionStoreService } from '../../services/chart-selection-store/chart-selection-store.service';

import { ArcDataChartSelectorComponent } from './arc-data-chart-selector.component';

describe('ArcDataChartSelectorComponent', () => {
  let component: ArcDataChartSelectorComponent;
  let fixture: ComponentFixture<ArcDataChartSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArcDataChartSelectorComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ArcDataChartSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run chartSelectionStore.updateSelections if form changed', () => {
    const chartSelectionStore = TestBed.inject(ChartSelectionStoreService);
    const spy = spyOn(chartSelectionStore, 'updateSelections');
    component.options.get(['options', 'averageScrap'])?.setValue(true);
    expect(spy).toHaveBeenCalled();
  });

  it('should not run chartSelectionStore.updateSelections if form has not been changed', () => {
    const chartSelectionStore = TestBed.inject(ChartSelectionStoreService);
    const spy = spyOn(chartSelectionStore, 'updateSelections');
    expect(spy).not.toHaveBeenCalled();
  });
});
