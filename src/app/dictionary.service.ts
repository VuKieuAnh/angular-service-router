import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class DictionaryService {

  constructor() { }

  private words: IWord[] = [
    {key: 'service', meaning: 'dịch vụ'},
    {key: 'service provider', meaning: 'nhà cung cấp dịch vụ'},
    {key: 'provide', meaning: 'cung cấp'},
    {key: 'efficient', meaning: 'hiệu quả'},
    {key: 'snow', meaning: 'tuyết'},
    {key: 'hello', meaning: 'xin chao'}
  ];

  search(word: string): string {
    if (!word) {
      return '';
    }
    const w = this.words.find(item => item.key === word.toLowerCase());
    if (w) {
      return w.meaning;
    }
    return 'Not found';
  }

  searchVi(key: string): string {
    if (!key) {
      return'';
    }
    const k = this.words.find(item => item.meaning === key.toLowerCase());
    if (k) {
      return k.key;
    }
    return 'not found';
  }
}
export interface IWord {
  key: string;
  meaning: string;
}

