import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  set<T>(key: string, value: T): void {
    if (this.storage.getItem(key) === null) {
      this.storage.setItem(key, JSON.stringify([value]));
    } else {
      this.storage.setItem(
        key,
        JSON.stringify([...JSON.parse(this.storage.getItem(key) ?? ''), value])
      );
    }
  }

  get<T>(key: string): T {
    let storage = this.storage.getItem(key);
    return JSON.parse(storage ?? '');
  }
}
