import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
   gifs:string;


  constructor(private http:HttpClient) { }


  searchGifs(){
    return   this.http.get("http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC").subscribe(
      data=> console.log(data),
      error=> console.log(error),
      ()=> console.log("Request complete")
        //  this.gifs = data["images.original.url"];
      )
  }

  ngOnInit() {

    interface ApiResponse{
      gifs:string;


  }


  }


}
