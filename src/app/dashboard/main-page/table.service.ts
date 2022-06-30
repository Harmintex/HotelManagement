import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/models/booking';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private router: Router, private http: HttpClient) { }

  readonly baseURL = "https://localhost:44372/api/booking/"

  getBookingsByUserId(): Observable<Booking[]>{
    return this.http.get(this.baseURL + "bookings/" + Number(window.localStorage.getItem("userId"))) as Observable<Booking[]>;
  }

  deleteBooking(bookingId: Number){
    return this.http.delete(this.baseURL + "delete/" + bookingId);
  }
}
