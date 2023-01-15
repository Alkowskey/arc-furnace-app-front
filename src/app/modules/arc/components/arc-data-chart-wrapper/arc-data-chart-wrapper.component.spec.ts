import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcDataChartWrapperComponent } from './arc-data-chart-wrapper.component';

describe('ArcDataChartWrapperComponent', () => {
  let component: ArcDataChartWrapperComponent;
  let fixture: ComponentFixture<ArcDataChartWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArcDataChartWrapperComponent],
      imports: [HttpClientModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ArcDataChartWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display nothing if empty', () => {
    expect(fixture.nativeElement.querySelector('app-arc-data-scatter-chart')).toBeFalsy();
    expect(fixture.nativeElement.querySelector('app-arc-data-line-chart')).toBeFalsy();
  });
});
