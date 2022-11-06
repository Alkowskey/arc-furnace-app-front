import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-arc-data-line-chart',
  templateUrl: './arc-data-line-chart.component.html',
  styleUrls: ['./arc-data-line-chart.component.sass']
})
export class ArcDataLineChartComponent implements OnInit {
  @Input() labels: string[] = [];
  @Input() data: number[] = [];
  @Input() title: string = 'Line Chart';

  @Input() borderColor = 'rgba(255,0,122,0.3)';
  @Input() backgroundColor = 'rgba(122,0,255,0.3)';

  lineChartData!: ChartConfiguration<'line'>['data'];
  lineChartOptions: ChartOptions<'line'> = {
    responsive: true
  };
  lineChartLegend = true;

  constructor() {}

  ngOnInit() {
    this.lineChartData = {
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
  }
}
