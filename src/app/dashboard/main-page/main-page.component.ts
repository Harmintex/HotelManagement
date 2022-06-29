import { Component, OnInit, ViewChild} from '@angular/core';
import { Booking } from 'src/app/models/booking';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AfterViewInit } from '@angular/core';


const bookingData: Booking[] = [
  {email: 'test@yahoo.com', phoneNumber: '1234567890', roomType: 'Single', periodTime: 4},
  {email: 'mda@yahoo.com', phoneNumber: '2010307090', roomType: 'Double', periodTime: 10}
];

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent implements OnInit, AfterViewInit {

  dataSource = new MatTableDataSource(bookingData);
  displayedColumns: string[] = ['email', 'phoneNumber', 'roomType', 'periodTime'];
  
  constructor(private router: Router, private http: HttpClient, private _liveAnnouncer : LiveAnnouncer) { }

  @ViewChild(MatSort) sort! : MatSort

  ngOnInit(): void {
    if(window.localStorage.getItem("rememberUserToken") === "false"){
      window.localStorage.removeItem("rememberUserToken");
    }
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
  }


  logOut(){
    window.localStorage.removeItem("rememberUserToken");
    this.router.navigateByUrl('/authentification');
    // this._snackBar.open('Log Out Successfully!', '', {
    //   duration: 2000,
    // });
  }

  announceSortChange(sortState: Sort){
    if (sortState.direction) {
      this._liveAnnouncer.announce('Sorted ${sortState.direction}ending');
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}

//de implementat o functie pentru stergere

