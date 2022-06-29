import { MatSnackBar } from '@angular/material/snack-bar';
import { RegisterService } from './register.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthentificationValidators } from '../authentification-validators';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  validationErrorMessages = "";

  constructor(private router: Router, private http: HttpClient, private registerService: RegisterService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(){
    this.registerForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, AuthentificationValidators.emailValidator]),
      password: new FormControl(null, [Validators.required, AuthentificationValidators.passwordValidator])
    });
  }

  register(){
    this.validationErrorMessages = "";
    if(this.email?.errors?.['validationErrorMessage']){
      this.validationErrorMessages += this.email?.errors?.['validationErrorMessage'];
    }
    if(this.password?.errors?.['validationErrorMessage']){
      this.validationErrorMessages += this.password?.errors?.['validationErrorMessage'];
    }
    if(this.validationErrorMessages === "" && this.username?.value !== null)
    {
      const user: User =
      {
        username: this.username?.value,
        email: this.email?.value,
        password: this.password?.value
      }

      this.registerService.postRegisterUser(user).subscribe(
        (res: any) => {
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

  get username()
  {
    return this.registerForm.get('username');
  }

  get email(){
    return this.registerForm.get('email');
  }

  get password(){
    return this.registerForm.get('password')
  }
}
