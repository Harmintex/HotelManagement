import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router, private http: HttpClient) { }

  readonly baseURL = "https://localhost:44372/api/user/"

  postLoginUser(user: User){
    return this.http.post(this.baseURL + "login", user);
  }
}
