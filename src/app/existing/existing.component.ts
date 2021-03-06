import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../data-service.service';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-existing',
  templateUrl: './existing.component.html',
  styleUrls: ['./existing.component.css']
})
export class ExistingComponent implements OnInit {
  in:string;
  ch:number;
  data:any;
  id:any;
  val:boolean=false;
  db_data:any;
  toggle:boolean=false;
  constructor(private D:DataServiceService,private route: ActivatedRoute,private http1:HttpClient) { }

  ngOnInit() {
     // if(this.val==true)
    //  {console.log("data already present")}
    //  else{
  // console.log("dsdsdsdsdsdsd");
   this.route.params.subscribe(params=>this.in=params.title);
   this.D.get_specific(this.in).subscribe((input)=>{
    //console.log(input)
    this.http1.post("https://movie-heroku-responsive.herokuapp.com/exist/",input).subscribe((resp)=>{
      // console.log(resp);
      this.val=false;
    },
    error => {
        console.log("Data already inserted",error);
        this.val=true;
    })
  }); 
// }

  }

  get_search()
  {
    this.D.getdb_data_ex().subscribe((input)=> {this.db_data=input
     this.toggle=!this.toggle;
  })};

}
