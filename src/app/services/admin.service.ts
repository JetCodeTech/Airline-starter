import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Airline } from "../models/airline";
import { Schedule } from "../models/schedule";

@Injectable({providedIn: "root"})
export class AdminService {
    baseUrl:string = "http://localhost:7789"

    airlineForScheduling:Airline | undefined;

    constructor(private httpClient:HttpClient){}

    addAirline(name:string, contact:string) {
        let url = this.baseUrl + "/flight/airline/register";
        let airline:any = {name:name, contactNumber:contact, blocked: false};
        return this.httpClient.post(url, airline, {headers: {"Authorization": "Bearer "+localStorage.getItem("token")}});
    }

    getAirlines() {
        let url = this.baseUrl + "/flight/airline/list";
        return this.httpClient.get(url, {headers: {"Authorization": "Bearer "+localStorage.getItem("token")}});
    }

    addSchedule(schedule:Schedule) {
        let url = this.baseUrl + "/flight/airline/schedule/add";
        return this.httpClient.post(url, schedule, {headers: {"Authorization": "Bearer "+localStorage.getItem("token")}});
    }

    getSchedules() {
        let url = this.baseUrl + "/flight/airline/getschedules";
        return this.httpClient.get(url, {headers: {"Authorization": "Bearer "+localStorage.getItem("token")}});
    }
}