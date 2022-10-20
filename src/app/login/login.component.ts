import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { isEmpty } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public loginData : DataService , public route_to_home:Router) {   }

  ngOnInit(): void { }
  login_info:any={email:"",password:""};
 
  login(){
   var login_status=this.loginData.VerifyData(this.login_info);

console.log(this.loginData.Register);
  if(login_status == 200){
   console.log(login_status);
    this.route_to_home.navigate(['home']);
  }
  else{
    alert("login failed");
  }
  }
}
  