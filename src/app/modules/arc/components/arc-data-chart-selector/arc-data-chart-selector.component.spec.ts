import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcDataChartSelectorComponent } from './arc-data-chart-selector.component';

describe('ArcDataChartSelectorComponent', () => {
  let component: ArcDataChartSelectorComponent;
  let fixture: ComponentFixture<ArcDataChartSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArcDataChartSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArcDataChartSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
