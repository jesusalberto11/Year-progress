import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-year-progress-bar',
  templateUrl: './year-progress-bar.component.html',
  styleUrls: ['./year-progress-bar.component.css'],
})
export class YearProgressBarComponent {
  @Input() currentDayPercentaje?: number;
  currentYear = new Date().getFullYear();
}
