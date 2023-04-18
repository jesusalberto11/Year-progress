import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.checkForTheme();
    this.addLanguages();
    this.checkForCurrentLanguage();
  }

  addLanguages(): void {
    this.translateService.addLangs([
      'en',
      'es',
      'fr',
      'de',
      'ja',
      'ko',
      'zh',
      'ru',
    ]);
  }

  checkForCurrentLanguage(): void {
    let currentNavigatorLanguage = navigator.language.substring(0, 2);
    let appLanguage = this.translateService
      .getLangs()
      .includes(currentNavigatorLanguage)
      ? currentNavigatorLanguage
      : 'en';

    this.translateService.setDefaultLang(appLanguage);
    localStorage.setItem('app_language', appLanguage);
  }

  checkForTheme(): void {
    const theme: string = localStorage.getItem('theme')!;

    if (theme === 'light-theme' || theme === 'dark-theme') {
      this.renderer.addClass(this.document.body, theme);
      return;
    }

    if (theme === null || theme === undefined) {
      localStorage.setItem('theme', 'light-theme');
      const theme: string = localStorage.getItem('theme')!;

      this.renderer.addClass(this.document.body, theme);
    }
  }
}
