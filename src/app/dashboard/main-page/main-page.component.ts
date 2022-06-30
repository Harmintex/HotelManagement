import { TableService } from './table.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit, ViewChild} from '@angular/core';
import { Booking } from 'src/app/models/booking';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Router } from '@angular/router';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent implements OnInit, AfterViewInit {
  bookingData!: Booking[];
  userId!: string;
  dataSource = new MatTableDataSource<Booking>(this.bookingData);
  displayedColumns: string[] = ['totalPrice', 'totalRoomCount', 'bookingStartDate', 'bookingEndDate', 'bookingStatus', 'actions'];

  constructor(private router: Router, private http: HttpClient, private _liveAnnouncer : LiveAnnouncer, private snackBar: MatSnackBar, private tableService: TableService) { }

  @ViewChild(MatSort) sort! : MatSort

  ngOnInit(): void {
    if(window.localStorage.getItem("rememberUserToken") === "false"){
      window.localStorage.removeItem("rememberUserToken");
    }
    this.tableService.getBookingsByUserId().subscribe(
      (res: Booking[]) => {
        this.dataSource.data = res;
      },
      (error) => {
        this.snackBar.open(error.error, "", {
          duration: 3000,
          panelClass: ['snackbar-error']});
        console.error(error);
      }
    );

  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
  }

  logOut(){
    window.localStorage.removeItem("rememberUserToken");
    window.localStorage.removeItem("userId");
    this.router.navigateByUrl('/authentification');
    this.snackBar.open('Log Out Successfully!', '', {
      duration: 3000,
    });
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

  deleteEntry(item : Booking){
    let idItem = this.dataSource.data.indexOf(item);
    this.dataSource.data.splice(idItem, 1);
    this.dataSource._updateChangeSubscription();
    this.tableService.deleteBooking(item.idBooking!).subscribe(
    () =>{},
    (error) =>{
      console.error(error);
      });
  }
}


