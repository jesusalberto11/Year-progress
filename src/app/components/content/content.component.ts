import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  currentYear: number = new Date().getFullYear();

  actualDate = new Date();
  navigatorLocale = [navigator.language];
  dateOptions = { month: 'long', day: 'numeric' } as const;
  currentDate = this.actualDate.toLocaleDateString(
    this.navigatorLocale,
    this.dateOptions
  );

  currentDayInMiliseconds = this.actualDate.getTime();
  firstDayOfTheYearInMiliseconds = new Date(
    this.actualDate.getFullYear(),
    0,
    1
  ).getTime();

  //1000 miliseconds in a second, 60 seconds in a minute, 60 minutes in a hour and 24 hours in a day
  totalMilisecondsInADay = 1000 * 60 * 60 * 24;

  numberOfTheCurrentDay =
    (this.currentDayInMiliseconds - this.firstDayOfTheYearInMiliseconds) /
      this.totalMilisecondsInADay +
    1;

  currentDayPercentaje = Math.round((this.numberOfTheCurrentDay / 365) * 100);

  lastDayOfTheYearInMiliseconds = new Date(
    this.actualDate.getFullYear(),
    11,
    31
  ).getTime();

  remainingDays = Math.ceil(
    (this.lastDayOfTheYearInMiliseconds - this.currentDayInMiliseconds) /
      this.totalMilisecondsInADay
  );
}
