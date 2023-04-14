import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-year-progress-bar',
  templateUrl: './year-progress-bar.component.html',
  styleUrls: ['./year-progress-bar.component.css'],
})
export class YearProgressBarComponent {
  @Input() currentDayPercentaje?: number;
  currentYear = new Date().getFullYear();

  getProgressBarClass(currentDayPercentaje: number): string {
    if (currentDayPercentaje < 30) {
      return 'bg-danger';
    } else if (currentDayPercentaje < 70) {
      return 'bg-warning';
    } else {
      return 'bg-success';
    }
  }
}
