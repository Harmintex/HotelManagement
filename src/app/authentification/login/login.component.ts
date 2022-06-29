import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logInForm!: FormGroup;
  rememberChecked : boolean = false;
  succesfulLogin : boolean = true;
  currentUser : User = {email : '', username : '', password : ''};

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(){
    this.logInForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  changeState() {
    this.rememberChecked = !this.rememberChecked;
  }

  logIn() {
    if (this.succesfulLogin === true) {
      if(this.rememberChecked === true) {
  
      }
      else {

      }
      console.log(this.rememberChecked);
      this.router.navigate(['/dashboard/main-page'])
    }
    
  }

  get email(){
    return this.logInForm.get('email');
  }

  get password(){
    return this.logInForm.get('password');
  }

}
