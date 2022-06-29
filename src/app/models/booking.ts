import { DatePipe } from "@angular/common";

export interface Booking{
    roomType : string;
    noOfRooms : number;
    checkIn : Date;
    checkOut : Date;
    state : string;
}