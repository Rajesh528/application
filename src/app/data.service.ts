import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
   Register:any=[];
  constructor() { }
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
}
