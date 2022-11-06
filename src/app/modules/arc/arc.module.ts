import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArcDataComponent } from './components/arc-data/arc-data.component';
import { ArcDataLineChartComponent } from './components/arc-data-line-chart/arc-data-line-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { ArcDataChartWrapperComponent } from './components/arc-data-chart-wrapper/arc-data-chart-wrapper.component';

@NgModule({
  declarations: [
    ArcDataComponent,
    ArcDataLineChartComponent,
    ArcDataChartWrapperComponent,
  ],
  imports: [CommonModule, NgChartsModule],
  exports: [ArcDataComponent],
})
export class ArcModule {}
