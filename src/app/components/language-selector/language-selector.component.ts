import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css'],
})
export class LanguageSelectorComponent implements OnInit {
  currentLanguage: string = 'es';

  constructor(public translate: TranslateService) {}

  ngOnInit(): void {
    this.currentLanguage = localStorage.getItem('app_language')!;
  }

  changeCurrentLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem('app_language', language);
  }
}
