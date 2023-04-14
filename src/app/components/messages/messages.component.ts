import { Component, OnInit } from '@angular/core';
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

  ngOnInit() {
    const intervalo = interval(10000);

    intervalo.subscribe((timer) => {
      this.currentMessage = MESSAGES[timer % MESSAGES.length];
    });
  }
}
