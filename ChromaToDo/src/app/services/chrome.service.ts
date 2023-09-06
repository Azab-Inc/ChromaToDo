import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChromeService {
  chromeStorage: any = chrome.storage.sync;

  constructor() {}

  getStorage(): any {
    return this.chromeStorage;
  }
}
