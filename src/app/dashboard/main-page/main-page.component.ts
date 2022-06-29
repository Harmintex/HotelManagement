import { Component, OnInit, ViewChild} from '@angular/core';
import { Booking } from 'src/app/models/booking';

const bookingData: Booking[] = [
  {email: 'test@yahoo.com', phoneNumber: '1234567890', roomType: 'Single', periodTime: 4},
  {email: 'mda@yahoo.com', phoneNumber: '2010307090', roomType: 'Double', periodTime: 10}
];

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent implements OnInit {

  dataSource = bookingData;
  displayedColumns: string[] = ['email', 'phoneNumber', 'roomType', 'periodTime'];
  
  constructor() { } 

  ngOnInit(): void {  
  }

}

//de implementat o functie pentru stergere

