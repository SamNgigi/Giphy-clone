import { Component, OnInit } from '@angular/core';
import { TrendRequestService } from '../trend-http/trend-request.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {


  constructor(private requestService:TrendRequestService) { }



  ngOnInit() {

   this.requestService.trendingGifs().subscribe(res =>{
     console.log(res);

     let gifs = res["data"].map(res => res.images.original.url);
     console.log(gifs);
   })
  }


}
