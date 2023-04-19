import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { timer } from 'rxjs';
import { MESSAGES } from '../data/messages-data';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  currentMessage: string =
    'Aprovecha bien tu tiempo, ya que cuando quieras ver, se habrá ido volando';
  currentLanguage: string = 'es';
  currentIndex: number = -1;
  currentTimeUntilNextMessage: number = 0;

  constructor(private translateService: TranslateService) {
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.currentLanguage = event.lang;
      this.updateCurrentMessage();
    });
  }

  ngOnInit() {
    this.currentLanguage = localStorage.getItem('app_language')!;
    this.updateCurrentMessage();

    timer(0, 100).subscribe((n) => this.updateTimeUntilNextMessage(n));
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

  updateTimeUntilNextMessage(timer: number): void {
    let seconds = (timer % 100) / 10;

    if (seconds % 100 === 0) {
      this.updateCurrentMessage();
    }

    this.currentTimeUntilNextMessage = seconds * 10;
  }
}
