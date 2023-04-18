import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.css'],
})
export class ThemeToggleComponent implements OnInit {
  currentTheme: string = 'light-theme';

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.checkForCurrentTheme();
  }

  checkForCurrentTheme(): void {
    const theme: string = localStorage.getItem('theme')!;
    this.currentTheme = theme;
  }

  changeTheme(): void {
    this.checkForCurrentTheme();

    this.document.body.classList.replace(
      this.currentTheme,
      this.currentTheme === 'light-theme'
        ? (this.currentTheme = 'dark-theme')
        : (this.currentTheme = 'light-theme')
    );

    localStorage.setItem('theme', this.currentTheme);
  }
}
