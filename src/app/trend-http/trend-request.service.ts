import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TrendRequestService {

  // Seemingly has to be on top of constructor
  trendingGifs(){
    return this.http.get("http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&limit=12").map(result => result);
  }
  constructor(private http:HttpClient) {}



}

// let link:string  = "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&limit=;
// let limit:string = 6;
// =>
// let current:number = 6
// this.current =+ 10;
// this.limit = this.current.toString
// let currentImgs = link + this.limit;
//
// let moreImgs = currentImgs + 10;
