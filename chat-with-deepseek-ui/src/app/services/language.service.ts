import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export type Language = 'tr' | 'en';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLang = new BehaviorSubject<Language>('en');
  currentLang$ = this.currentLang.asObservable();
  private translations: any = {};

  constructor(private http: HttpClient) {
    this.loadTranslations('en');
  }

  private loadTranslations(lang: Language) {
    this.http.get(`/assets/i18n/${lang}.json`).subscribe({
      next: (translations) => {
        this.translations[lang] = translations;
      },
      error: (error) => console.error(`Dil dosyası yüklenemedi: ${lang}`, error)
    });
  }

  setLanguage(lang: Language) {
    if (!this.translations[lang]) {
      this.loadTranslations(lang);
    }
    this.currentLang.next(lang);
  }

  getTranslation(key: string): string {
    const currentLang = this.currentLang.value;
    return this.translations[currentLang]?.[key] || key;
  }
} 