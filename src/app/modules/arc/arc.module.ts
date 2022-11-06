import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';

import { SharedModule } from '../shared/shared.module';

import { ArcDataComponent } from './components/arc-data/arc-data.component';
import { ArcDataLineChartComponent } from './components/arc-data-line-chart/arc-data-line-chart.component';
import { ArcDataChartWrapperComponent } from './components/arc-data-chart-wrapper/arc-data-chart-wrapper.component';

@NgModule({
  declarations: [ArcDataComponent, ArcDataLineChartComponent, ArcDataChartWrapperComponent],
  imports: [CommonModule, NgChartsModule, SharedModule],
  exports: [ArcDataComponent]
})
export class ArcModule {}
