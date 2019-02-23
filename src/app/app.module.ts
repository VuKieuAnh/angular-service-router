import { BrowserModule } from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { DictionarayViComponent } from './dictionaray-vi/dictionaray-vi.component';
import { DictionaryPageComponent } from './dictionary-page/dictionary-page.component';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';

// @Injectable()
// export class DictionaryService {
// }

@NgModule({
  declarations: [
    AppComponent,
    DictionaryComponent,
    DictionarayViComponent,
    DictionaryPageComponent,
    DictionaryDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
