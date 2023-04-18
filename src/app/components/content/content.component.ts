import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  currentYear: number = new Date().getFullYear();
  currentDay: number = new Date().getDate();
  currentMonth: string = '';

  ngOnInit(): void {
    let currentLanguage = localStorage.getItem('app_languaje')?.toString();
    this.currentMonth = new Date().toLocaleString(currentLanguage, {
      month: 'long',
    });
  }

  actualDate = new Date();

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
