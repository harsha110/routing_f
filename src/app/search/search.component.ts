import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../data-service.service';
import {Router} from '@angular/router';
import {to_js} from './insert';
import { Headers, RequestOptions } from '@angular/http';
// import { Observable } from 'rxjs';
// import { map} from 'rxjs/operators';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  the_movie:string="PK";
  response:any;
  toggle:boolean=false;
  route:Router;
  full:string="all_details";
  movie:to_js = new to_js();
  constructor(private D:DataServiceService) { }

  ngOnInit() {
  }

  get_search()
  {
    this.D.getall(this.the_movie).subscribe(res => {
      this.response = res.results.map(e => {
       e.poster_path = "https://image.tmdb.org/t/p/w300/"+e.poster_path 
       return e 
      }); 
      console.log(this.response)
    })
  }



  // get_specs(a:number)
  // {
  //   let obs  =this.D.get_specific(a);
  //   obs.subscribe((input) => {
  //   console.log(input)
  //   this.response=input
  //   });
  //   this.toggle=!this.toggle;
  // }

}
