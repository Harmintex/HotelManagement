import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Booking } from 'src/app/models/booking';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.scss']
})
export class AddBookingComponent implements OnInit {

  addBookingForm!: FormGroup;

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.addBookingForm = new FormGroup(
    {
      totalRoomCount: new FormControl(null, Validators.required),
      bookingStartDate: new FormControl(null, Validators.required),
      bookingEndDate: new FormControl(null, Validators.required)
    }
  )}

  addBooking(){
    const booking: Booking =
      {
        totalRoomCount: this.totalRoomCount?.value,
        bookingStartDate: this.bookingStartDate?.value,
        bookingEndDate: this.bookingEndDate?.value
      }
  }

  get totalRoomCount(){
    return this.addBookingForm.get("totalRoomCount");
  }

  get bookingStartDate(){
    return this.addBookingForm.get("bookingStartDate");
  }

  get bookingEndDate(){
    return this.addBookingForm.get("bookingEndDate");
  }

  close(){
    this.matDialog.closeAll();
  }
}
