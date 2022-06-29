import { Component, OnInit, ViewChild} from '@angular/core';
import { Booking } from 'src/app/models/booking';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AfterViewInit } from '@angular/core';

let bookingData: Booking[] = [
  {roomType : 'Single', noOfRooms : 2, checkIn : new Date('2020-12-20'), checkOut : new Date('2020-12-29'),state : 'Not paid'},
  {roomType : 'Double', noOfRooms : 3, checkIn : new Date('2020-12-26'), checkOut : new Date('2021-01-15'), state : 'Paid'}
];

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent implements OnInit, AfterViewInit {

  dataSource = new MatTableDataSource(bookingData);
  displayedColumns: string[] = ['roomType', 'noOfRooms', 'checkIn', 'checkOut', 'state'];
  
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

//de implementat o functie pentru stergere

