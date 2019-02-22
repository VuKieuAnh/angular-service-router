import { Component, OnInit } from '@angular/core';
import {DictionaryService, IWord} from '../dictionary.service';

@Component({
  selector: 'app-dictionaray-vi',
  templateUrl: './dictionaray-vi.component.html',
  styleUrls: ['./dictionaray-vi.component.scss']
})
export class DictionarayViComponent implements OnInit {

  word: IWord;

  constructor(private dictionaryVi: DictionaryService) {
  }
  search(meaning: string) {
    const key = this.dictionaryVi.searchVi(meaning);
    this.word = {
      key: key, meaning: meaning
    };
  }

  ngOnInit() {
  }

}
