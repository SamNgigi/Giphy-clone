import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TrendRequestService {

  // Seemingly has to be on top of constructor
  trendingGifs(){
    return this.http.get("http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC").map(result => result);
  }
  constructor(private http:HttpClient) {}



}
