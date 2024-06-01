import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { PLATFORM_ID, Provider } from '@angular/core';

interface IStorage {
  setItem<T>(key: string, item: T): T;
  getItem<T>(key: string): T;
}

export class StorageService implements IStorage {
  setItem<T>(key: string, item: T): T {
    return item;
  }
  getItem<T>(key: string): T {
    return null as any;
  }
}

export function storageFactory(platformId: string){
  if(isPlatformBrowser(platformId)){
    return new BrowserStorage();
  }
  else if (isPlatformServer(platformId)){
    return new ServerStorage();
  }
  throw new Error('No implementation for this platform: ' + platformId);

}

export const storageServiceProvider: Provider = {
 provide: StorageService,
 useFactory: storageFactory,
 deps:[PLATFORM_ID]
}
export class BrowserStorage {
  localStorage = localStorage;

  setItem<T>(key: string, item: T): T {
    const str = typeof item === 'string' ? item : JSON.stringify(item);
    this.localStorage.setItem(key, str)
    return item;
  }

  getItem<T>(key: string): any {
    let value;
    const temp = this.localStorage.getItem(key);
    if (!temp) { return null; }
    try {
      value = JSON.parse(temp)
    } catch (error) {
      value = temp;
    }
    return value;
  }
}

const source: { [key: string]: any} = {};
export class ServerStorage {
  localStorage = {
    data: source,
    setItem<T>(key: string, item: T): void {
      this.data[key] = item;
    },
    getItem<T>(key: string): T {
      return this.data[key];
    } 
  }

  setItem<T>(key: string, item: T): T {
    this.localStorage.setItem(key, JSON.stringify(item));
    return item;
  }

  getItem<T>(key: string): any {
    let value;
    const temp = this.localStorage.getItem(key) as any;
    if (!temp) { return null }
    try {
      value = JSON.parse(temp);
    } catch (error) {
      value = temp
    }

    return value
  } 
}


