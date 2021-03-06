import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { getItem } from "../utils/utils";

@Injectable({ providedIn: "root" })
export class AuthenticationService {
    baseUrl: string = "http://localhost:7789"

    isLoggedIn = new BehaviorSubject<Boolean>(false);
    userRole = new BehaviorSubject<Number>(0);
    userId = new BehaviorSubject<Number>(0);

    constructor(private httpClient: HttpClient) {
        let userRole = getItem('auth');
        if (userRole && userRole.role && userRole.userValid) {
            this.userRole.next(Number(userRole.role))
            this.userId.next(Number(userRole.userId))
            this.isLoggedIn.next(true)
        }

    }

    register(email: string, password: string, firstName: string, lastName: string) {

        let url = this.baseUrl + "/api/v1.0/register";
        let registerObject = { email: email, password: password, role: "ROLE_USER", firstName: firstName, lastName: lastName }
        return this.httpClient.post(url, registerObject, { headers: {} });
    }

    login(email: string, password: string) {

        let url = this.baseUrl + "/api/v1.0/login";
        let loginObject = { email: email, password: password }
        return this.httpClient.post(url, loginObject, { headers: {} });
    }
}