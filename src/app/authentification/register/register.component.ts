import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthentificationValidators } from '../authentification-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  validationErrorMessages = "";

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(){
    this.registerForm = new FormGroup({
      email: new FormControl(null, [Validators.required, AuthentificationValidators.emailValidator]),
      password: new FormControl(null, [Validators.required, AuthentificationValidators.passwordValidator])
    });
  }

  register(){
    this.validationErrorMessages = "";
    this.validationErrorMessages += this.email?.errors?.['validationErrorMessage'];
    this.validationErrorMessages += this.password?.errors?.['validationErrorMessage'];
  }

  get email(){
    return this.registerForm.get('email');
  }

  get password(){
    return this.registerForm.get('password')
  }
}
