import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  submitted = false;
  ngOnInit(): void {
    
  }

  signUpForm: FormGroup;
  constructor() {
    this.signUpForm = new FormGroup({
      email: new FormControl('test@gmail.com', [Validators.required, Validators.email]),
      password: new FormControl('12345', [Validators.required]),
      confirmPassword: new FormControl('12345', [Validators.required]),
      userName:  new FormControl('12345', [Validators.required]),
    });
  }

  onSubmit() {
    if(this.signUpForm.valid) {
      console.log(this.signUpForm.value);
    }
  }

  get f() { return this.signUpForm.controls; }

}
