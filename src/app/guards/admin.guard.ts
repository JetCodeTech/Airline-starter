import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      console.log("Admin guard is working");
      if ( !!localStorage.getItem("userType") && localStorage.getItem("userType") === "admin") {
        return true;
      }
      return true;
  }
  
}
