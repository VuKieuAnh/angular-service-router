import {Component, OnDestroy, OnInit} from '@angular/core';
import {DictionaryService, IWord} from '../dictionary.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.scss']
})
export class DictionaryDetailComponent implements OnInit, OnDestroy {

  sub: Subscription;

  word: IWord;

  constructor(
    private activedRoute: ActivatedRoute,
    private dictionnaryService: DictionaryService
  ) { }

  ngOnInit() {
    const {snapshot} = this.activedRoute;
    const key = snapshot.paramMap.get('key');
    const meaning = this.dictionnaryService.search(key);
    this.word = {key: key, meaning: meaning};
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
