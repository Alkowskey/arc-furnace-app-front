import { Component, Input, ViewChild } from '@angular/core';
import { ChartType, ChartConfiguration, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import { ChartDataArc, Point } from '../../interfaces/chart-wrapper.interface';
import { ArcDataUtils } from '../../utils/arc-data.utils';

@Component({
  selector: 'app-arc-data-scatter-chart',
  templateUrl: './arc-data-scatter-chart.component.html',
  styleUrls: ['./arc-data-scatter-chart.component.sass']
})
export class ArcDataScatterChartComponent {
  @ViewChild(BaseChartDirective) chart!: BaseChartDirective;
  @Input() set data(data: ChartDataArc) {
    const points = this.buildPointData(data);
    this.scatterChartData.datasets[0].data = ArcDataUtils.selectUniquePoints(points);
    this.chart?.chart?.update();
  }
  // scatter
  scatterChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {
        suggestedMin: 1.25,
        suggestedMax: 2.75
      }
    }
  };

  scatterChartData: ChartData<'scatter'> = {
    datasets: [
      {
        data: [],
        backgroundColor: 'rgba(255,0,122,0.5)',
        label: 'Seria A',
        pointRadius: 5
      }
    ]
  };
  scatterChartType: ChartType = 'scatter';

  private buildPointData(data: ChartDataArc): Point[] {
    return data.x.reduce((acc: Point[], curr, index) => {
      acc = [...acc, { x: curr, y: data.y[index] }];
      return acc;
    }, []);
  }
}
