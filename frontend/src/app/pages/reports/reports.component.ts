import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { NgIf } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [NgIf],
  template: `
    <h2>Report Chart</h2>

    <div *ngIf="!chartReady">Loading chart...</div>

    <canvas
      *ngIf="chartReady"
      #chartCanvas
      style="max-width: 700px; display:block;">
    </canvas>
    <p>This chart displays the improvement of the o1 AIME model accuracy during training. The x-axis is the train-time compute on a log scale, and the y-axis is the pass at 1 
    accuracy. As you can see, as training time increases, so too does accuracy. Chart data is not necessarily accurate to the source charts. Rather, it was made to roughly
    match the source.</p>
    <p>Source: https://synoptek.com/insights/thought-leadership/data-insights/genai-trends-key-developments-to-watch-out-for/ (Section 4)</p>
  `
})
export class ReportsComponent implements OnInit, AfterViewInit {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;

  chart!: Chart;
  chartReady = false;

  private chartDataFromApi: any;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getChart().subscribe({
      next: (res) => {
        this.chartDataFromApi = res.chart;
        this.chartReady = true;
      },
      error: (err) => console.error('Chart load failed', err)
    });
  }

  ngAfterViewInit() {
    const interval = setInterval(() => {
      if (this.chartReady && this.chartCanvas) {
        clearInterval(interval);
        this.buildChart();
      }
    }, 50);
  }

  private buildChart() {
    const chart = this.chartDataFromApi;

    this.chart = new Chart(this.chartCanvas.nativeElement, {
      type: 'scatter',
      data: {
        labels: chart.labels,
        datasets: chart.datasets.map((d: any) => ({
          label: d.label,
          data: d.data
        }))
      },
      options: {
        responsive: true
      }
    });
  }
}
