import { Component, OnInit ,Input} from '@angular/core';
import { getBootstrapListener } from '@angular/router/src/router_module';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  latest:string = "Latest_movies";
  collapse=false;
  search_page:string="search_page";
  constructor() { }
  
  ngOnInit() {

  }

  func(){
    this.collapse=!this.collapse;
  }

}
