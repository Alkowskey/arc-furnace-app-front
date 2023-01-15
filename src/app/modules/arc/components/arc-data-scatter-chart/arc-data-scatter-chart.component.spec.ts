import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcDataScatterChartComponent } from './arc-data-scatter-chart.component';

describe('ArcDataScatterChartComponent', () => {
  let component: ArcDataScatterChartComponent;
  let fixture: ComponentFixture<ArcDataScatterChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArcDataScatterChartComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ArcDataScatterChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have canvas element', () => {
    const canvas = fixture.nativeElement.querySelector('canvas');
    expect(canvas).toBeTruthy();
  });
});
