import { Injectable } from '@angular/core';
import { ChromeService } from './chrome.service';
import { Category } from '../category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private chromeService: ChromeService) {}

  isEmpty(): boolean {
    this.chromeService
      .getStorage()
      .get(['categories'])
      .then((result: any) => {
        console.log('Value currently is ' + result.key);
      });

    return true;
  }

  getCategories(): Category[] {
    return [];
  }

  addCategory(category: Category): void {}

  removeCategory(category: Category): void {}
}
