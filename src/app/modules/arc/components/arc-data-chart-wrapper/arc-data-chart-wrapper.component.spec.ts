import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcDataChartWrapperComponent } from './arc-data-chart-wrapper.component';

describe('ArcDataChartWrapperComponent', () => {
  let component: ArcDataChartWrapperComponent;
  let fixture: ComponentFixture<ArcDataChartWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArcDataChartWrapperComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ArcDataChartWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
