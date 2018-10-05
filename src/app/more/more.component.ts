import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../data-service.service';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {to_js} from '../search/insert';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {
in:string;
res:any={
};
  constructor(private D:DataServiceService,private route: ActivatedRoute,private http1:HttpClient) { }

  ngOnInit() {
    console.log("asdfsdfsdsdfsdf");
   
    this.route.params.subscribe(params=>{this.in=params.title
      this.D.get_specific(this.in).subscribe((input1)=>{console.log(input1) 
        this.res=input1
       // console.log(this.res.original_title);
        })
    });
  }

}
