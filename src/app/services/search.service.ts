import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: "root"})
export class FlightSearchService {
    baseUrl:string = "http://localhost:7789"

    constructor(private httpClient:HttpClient){}

    searchFlights(source:string, destination:string, flightdate:string, returnDate:string) {

        let url = this.baseUrl
                    + "/flight/search/?"
                    + "fromPlace=" + source
                    + "&toPlace=" + destination
                    + "&flightDate=" + flightdate;
        url = (!!returnDate) ? url + "&returnDate=" + returnDate : url;

        return this.httpClient.get(url, {headers: {}});
    }
}