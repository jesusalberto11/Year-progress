import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  currentYear: number = new Date().getFullYear();
  currentDay: number = new Date().getDate();
  currentMonth: string = '';
  actualDate = new Date();
  currentDayPercentaje: number = 0;
  remainingDays: number = 0;
  totalMilisecondsInADay: number = 1000 * 60 * 60 * 24;

  constructor(private translateService: TranslateService) {
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.updateLanguage(event.lang);
    });
  }

  ngOnInit(): void {
    let currentLanguage = localStorage.getItem('app_language')?.toString();
    this.updateLanguage(currentLanguage);
    this.calculateCurrentDayPercentaje();
  }

  updateLanguage(language?: string): void {
    this.currentMonth = new Date().toLocaleString(language, {
      month: 'long',
    });
  }

  calculateCurrentDayPercentaje(): void {
    let currentDayInMiliseconds = this.actualDate.getTime();
    let firstDayOfTheYearInMiliseconds = new Date(
      this.actualDate.getFullYear(),
      0,
      1
    ).getTime();

    let numberOfTheCurrentDay =
      (currentDayInMiliseconds - firstDayOfTheYearInMiliseconds) /
        this.totalMilisecondsInADay +
      1;

    this.currentDayPercentaje = Math.round((numberOfTheCurrentDay / 365) * 100);

    this.calculateRemainingDays(currentDayInMiliseconds);
  }

  calculateRemainingDays(currentDayInMiliseconds: number): void {
    let lastDayOfTheYearInMiliseconds = new Date(
      this.actualDate.getFullYear(),
      11,
      31
    ).getTime();

    this.remainingDays = Math.ceil(
      (lastDayOfTheYearInMiliseconds - currentDayInMiliseconds) /
        this.totalMilisecondsInADay
    );
  }
}
