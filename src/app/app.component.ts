import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.checkForTheme();
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
