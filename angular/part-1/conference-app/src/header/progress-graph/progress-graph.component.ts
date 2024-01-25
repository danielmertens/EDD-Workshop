import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AchievementSummary } from '../../api/models';
import Chart from "chart.js/auto";

@Component({
  selector: 'app-progress-graph',
  templateUrl: './progress-graph.component.html',
  styleUrl: './progress-graph.component.scss',
  standalone: true
})
export class ProgressGraphComponent implements OnInit, OnChanges {
  @Input() achievementSummary!: AchievementSummary;

  public chart: any;

  ngOnInit() {
    this.initializeChart();
  }

  ngOnChanges() {
    if (this.chart) {
      this.chart.data.datasets[0].data = [this.completed, this.uncompleted];
      this.chart.update();
    }
  }

  private initializeChart() {
    this.chart = new Chart("canvas", {
      type: "doughnut",
      data: {
        datasets: [
          {
            label: '',
            data: [this.completed, this.uncompleted],
            backgroundColor: [
              'rgba(255, 226, 0, 1)',
              'rgba(0, 0, 0, 0.4)'
            ],
            borderWidth: 0,
    
          },
        ]
      },
      options: {
        responsive: true,
        plugins: {
          tooltip: {
            enabled: true
          }
        }
      }
    });
  }

  get total(): number {
    return this.achievementSummary?.total;
  }

  get completed(): number {
    return this.achievementSummary?.completed;
  }

  get uncompleted(): number {
    return this.achievementSummary?.uncompleted;
  }
}