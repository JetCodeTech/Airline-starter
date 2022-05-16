import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BookingDetail } from "../models/bookingDetail";

@Injectable({providedIn: "root"})
export class UserService {
    baseUrl:string = "http://localhost:7789"

    bookingSource:string | undefined;
    bookingDestination:string | undefined;
    bookingScheduleId:number | undefined;
    bookingAirlineName: string | undefined;

    constructor(private httpClient:HttpClient){}



    bookTickets(bookingDetail:BookingDetail|undefined, bookingScheduleId:number|undefined) {
        let url = this.baseUrl + "/flight/booking/" + bookingScheduleId;
        return this.httpClient.post(url, bookingDetail, {headers: {"Authorization": "Bearer "+localStorage.getItem("token")}});
    }

    getTickets() {
        let url = this.baseUrl + "/flight/booking/history";
        return this.httpClient.get(url, {headers: {"Authorization": "Bearer "+localStorage.getItem("token")}});
    }
    
}