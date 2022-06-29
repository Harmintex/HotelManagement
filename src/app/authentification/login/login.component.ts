import { LoginService } from './login.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logInForm!: FormGroup;
  rememberChecked : boolean = false;

  constructor(private router: Router, private http: HttpClient, private loginService: LoginService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(){
    this.logInForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  changeState() {
    this.rememberChecked = !this.rememberChecked;
  }

  logIn() {
    if(this.username?.value !== null && this.email?.value !== null && this.password?.value !== null){
      const user: User =
      {
        username: this.username?.value,
        email: this.email?.value,
        password: this.password?.value
      }
      this.loginService.postLoginUser(user).subscribe(
        (res: any) => {
          window.localStorage.setItem("rememberUserToken", this.rememberChecked.toString());
          this.router.navigateByUrl('');
          this.snackBar.open(res, "", {
            duration: 3000,
            panelClass: ['snackbar-success']});
        },
        (error) => {
          this.snackBar.open(error, "", {
            duration: 3000,
            panelClass: ['snackbar-error']});
        }
      );
    }
  }

  get username(){
    return this.logInForm.get("username");
  }

  get email(){
    return this.logInForm.get("email");
  }

  get password(){
    return this.logInForm.get("password");
  }
}
