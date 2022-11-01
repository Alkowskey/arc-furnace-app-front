import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcDataComponent } from './arc-data.component';

describe('ArcDataComponent', () => {
  let component: ArcDataComponent;
  let fixture: ComponentFixture<ArcDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArcDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArcDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
