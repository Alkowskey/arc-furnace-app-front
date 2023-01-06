import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { MatTableModule } from '@angular/material/table';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

import { ArcDataComponent } from './components/arc-data/arc-data.component';
import { ArcDataLineChartComponent } from './components/arc-data-line-chart/arc-data-line-chart.component';
import { ArcDataChartWrapperComponent } from './components/arc-data-chart-wrapper/arc-data-chart-wrapper.component';
import { ArcDataChartSelectorComponent } from './components/arc-data-chart-selector/arc-data-chart-selector.component';
import { ArcDataScatterChartComponent } from './components/arc-data-scatter-chart/arc-data-scatter-chart.component';
import { ArcScrapWrapperComponent } from './components/arc-scrap-wrapper/arc-scrap-wrapper.component';

@NgModule({
  declarations: [
    ArcDataComponent,
    ArcDataLineChartComponent,
    ArcDataChartWrapperComponent,
    ArcDataChartSelectorComponent,
    ArcDataScatterChartComponent,
    ArcScrapWrapperComponent
  ],
  imports: [CommonModule, NgChartsModule, SharedModule, MatTableModule, MaterialModule],
  exports: [ArcDataComponent, ArcDataChartSelectorComponent]
})
export class ArcModule {}
