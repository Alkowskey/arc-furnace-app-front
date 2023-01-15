import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArcStoreService } from 'src/app/modules/shared/services/arc-store/arc-store.service';

import { ArcDataComponent } from './arc-data.component';

describe('ArcDataComponent', () => {
  let component: ArcDataComponent;
  let fixture: ComponentFixture<ArcDataComponent>;
  let store: ArcStoreService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArcDataComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ArcDataComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(ArcStoreService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display app-arc-data-chart-wrapper if range is not null', () => {
    store.updateRange({ start: new Date(), end: new Date() });
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('app-arc-data-chart-wrapper')).toBeTruthy();
  });
});
