import { Injectable } from '@angular/core';
// import 'rxjs/Rx';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { concat } from 'rxjs';
import {to_js} from './search/insert';
import {  RequestOptions } from '@angular/http';
import { Observable,throwError,of } from 'rxjs';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/toPromise';
// import { map} from 'rxjs/operators';
 import { catchError,map,tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
response:Object;
max:string;
id:string;
global_value:any;
movie:to_js=new to_js();
str1:String = new String( "https://api.themoviedb.org/3/search/movie?api_key=d4500fb80e0a591b21bba15359eb97dd&query=" ); 
  constructor(private http1:HttpClient) { }
    getall(movie:string){
      this.max=this.str1.concat(movie);
       return this.http1.get(this.max);
    }

    get_latest_movies(){
      return this.http1.get("http://api.themoviedb.org/3/movie/upcoming?api_key=d4500fb80e0a591b21bba15359eb97dd");
    }

    getdb_data(){
      return this.http1.get("https://movie-heroku-responsive.herokuapp.com/movies");
    }
    
    getdb_data_ex(){
      return this.http1.get("https://movie-heroku-responsive.herokuapp.com/exist");
    }


    get_specific(a:string){
     // this.id= a.toString();
      this.global_value ="https://api.themoviedb.org/3/movie/";
      this.global_value = this.global_value.concat(a);
      this.global_value=this.global_value.concat("?api_key=d4500fb80e0a591b21bba15359eb97dd")

      return this.http1.get(this.global_value);
    }

    delete(a:string){
      this.id="https://movie-heroku-responsive.herokuapp.com/movies"
      this.id=this.id.concat(a);
      return this.http1.delete(this.id);
    }
    delete_ex(a:string){
      this.id="https://movie-heroku-responsive.herokuapp.com/exist"
      this.id=this.id.concat(a);
      return this.http1.delete(this.id);
    }

  }
