import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  UsersInfo = [
    {email:"test@gmail.com", password:"12345" , confirmPassword:"", userName : "test"},
    {email:"test@gmail.com", password:"12345" , confirmPassword:"", userName : "test"},
    {email:"test@gmail.com", password:"12345" , confirmPassword:"", userName : "test"},
    {email:"test@gmail.com", password:"12345" , confirmPassword:"", userName : "test"},
    {email:"test@gmail.com", password:"12345" , confirmPassword:"", userName : "test"},
    {email:"test@gmail.com", password:"12345" , confirmPassword:"", userName : "test"}
];
   Register:any=[];
  constructor(public http: HttpClient) { }
  VerifyData(register:any){
    for(var b of this.Register){
      if(b.email==register.email && b.password==register.password)
         {
          console.log("success");
          return 200;
         }
    }
    return 400;

  }
  signUp(obj:any){
   this.Register.push(obj);
   console.log(obj);
  }
  getUserData(){
    var url = "http://localhost:8080/userDetails";
    return this.http.get(url);
  }
}
