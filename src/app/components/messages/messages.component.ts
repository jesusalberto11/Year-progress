import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { interval } from 'rxjs';
import { MESSAGES } from '../data/messages-data';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  currentMessage: string =
    'Aprovecha bien tu tiempo, ya que cuando quieras ver, se habrá ido volando';
  currentLanguage = 'es';
  currentIndex: number = -1;

  constructor(private translateService: TranslateService) {
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.currentLanguage = event.lang;
      this.updateCurrentMessage();
    });
  }

  ngOnInit() {
    const intervalo = interval(10000);
    this.currentLanguage = localStorage.getItem('app_language')!;
    this.updateCurrentMessage();

    intervalo.subscribe(() => {
      this.updateCurrentMessage();
    });
  }

  updateCurrentMessage(): void {
    const messageArray = MESSAGES[this.currentLanguage];

    let newIndex = Math.floor(Math.random() * messageArray.length);

    while (newIndex === this.currentIndex) {
      newIndex = Math.floor(Math.random() * messageArray.length);
    }

    this.currentIndex = newIndex;
    this.currentMessage = messageArray[this.currentIndex];
  }
}
