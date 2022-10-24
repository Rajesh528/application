import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userInfo:any = [];

  constructor(public dataSrvc:DataService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.dataSrvc.getUserData().subscribe(res=>{
      console.log(res);
      this.userInfo = res;
    });
  }

  edit(i:number){
    console.log(i);

  }


  delete(i:number){
    console.log(i);

  }

}
