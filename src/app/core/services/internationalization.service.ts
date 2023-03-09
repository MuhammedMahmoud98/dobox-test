import { Injectable } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class InternationalizationService {
  currentLang: string = 'en';
  constructor(private readonly translate: TranslateService) {
  }

  setCurrentLangAndDirection(): void {
    this.currentLang = localStorage.getItem('stc-lang') as string;
    if (!this.currentLang) {
      this.setLocalStorageWithLang('en');
    } else {
      this.setLocalStorageWithLang(this.currentLang);
    }
    this.setAppDirection();
  }

  setAppDirection(): void {
    if (this.currentLang === 'ar') {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.add('ltr');
    }
    this.setLanguage(this.currentLang);
  }

  setLanguage(lang: string): void {
    this.translate.use(lang);
  }

  setLocalStorageWithLang(lang: string): void {
    localStorage.setItem('stc-lang', lang);
    this.currentLang = lang;
  }

  switchLang(): void {
    if(this.currentLang === 'en') {
      this.setLocalStorageWithLang('ar');
    } else {
      this.setLocalStorageWithLang('en');
    }
    window.location.reload();
  }
}
