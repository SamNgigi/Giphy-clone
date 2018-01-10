import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { GiphyComponent } from './giphy/giphy.component';
import { SearchComponent } from './search/search.component';
import { TrendingComponent } from './trending/trending.component';


@NgModule({
  declarations: [
    AppComponent,
    GiphyComponent,
    SearchComponent,
    TrendingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
