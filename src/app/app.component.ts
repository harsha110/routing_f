import { Component,OnInit,Input } from '@angular/core';
import { HttpClient} from '@angular/common/http';
// import { Response } from 'selenium-webdriver/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private url:HttpClient){

  }
  ngOnInit(){
 
            }
 }
