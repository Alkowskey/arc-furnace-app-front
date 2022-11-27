import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-arc-data-line-chart',
  templateUrl: './arc-data-line-chart.component.html',
  styleUrls: ['./arc-data-line-chart.component.sass']
})
export class ArcDataLineChartComponent implements OnChanges {
  @Input() labels: string[] = [];
  @Input() data: number[] = [];
  @Input() title: string = 'Line Chart';

  @Input() borderColor = 'rgba(255,0,122,0.3)';
  @Input() backgroundColor = 'rgba(122,0,255,0.3)';

  @ViewChild(BaseChartDirective) chart!: BaseChartDirective;

  public barChartType: ChartType = 'bar';

  lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [...this.labels],
    datasets: [
      {
        data: [...this.data],
        label: this.title,
        fill: true,
        tension: 0.5,
        borderColor: this.borderColor,
        backgroundColor: this.backgroundColor
      }
    ]
  };
  lineChartOptions: ChartOptions<'line'> = {
    responsive: true
  };
  lineChartLegend = true;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'].currentValue && changes['labels'].currentValue) {
      this.lineChartData.datasets[0].data = [...changes['data'].currentValue];
      this.lineChartData.labels = [...changes['labels'].currentValue];
      this.lineChartData.datasets[0].label = changes['title'].currentValue;
      this.chart?.chart?.update();
    }
  }

  constructor() {}
}
