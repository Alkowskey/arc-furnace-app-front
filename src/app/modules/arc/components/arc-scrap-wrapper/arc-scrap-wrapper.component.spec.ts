import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcDataScrapEnum, ArcDataSimplified, ArcDataScrap } from '../../models/arc-data.inferface';

import { ArcScrapWrapperComponent } from './arc-scrap-wrapper.component';

const SCRAP: ArcDataScrap = {
  A: 1,
  B: 2,
  G: 3,
  H: 4,
  Ł: 5,
  M: 6,
  O: 7,
  P: 8,
  T: 9,
  U: 10,
  W: 11,
  Z: 12
};
describe('ArcScrapWrapperComponent', () => {
  let component: ArcScrapWrapperComponent;
  let fixture: ComponentFixture<ArcScrapWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArcScrapWrapperComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ArcScrapWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should get data for scrap', () => {
    const data: Partial<ArcDataSimplified>[] = [
      {
        scrap: {
          ...SCRAP
        },
        Anthracite: 1
      },
      {
        scrap: {
          ...SCRAP,
          A: 13
        },
        Anthracite: 2
      }
    ];
    component.data = data as ArcDataSimplified[];

    expect(component.getScrapData(ArcDataScrapEnum.A)).toEqual({ x: [1, 2], y: [1, 13] });
  });

  it('Should get average data for scrap', () => {
    const data: Partial<ArcDataSimplified>[] = [
      {
        scrap: {
          ...SCRAP
        },
        Anthracite: 1
      },
      {
        scrap: {
          ...SCRAP,
          A: 13
        },
        Anthracite: 1
      },
      {
        scrap: {
          ...SCRAP,
          A: 8
        },
        Anthracite: 2
      }
    ];
    component.isAverege = true;
    component.data = data as ArcDataSimplified[];
    expect(component.getScrapData(ArcDataScrapEnum.A)).toEqual({ x: [1, 2], y: [7, 8] });
  });
});
