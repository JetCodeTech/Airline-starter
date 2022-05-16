import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { getItem } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class AuthadminGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let status = false;
    let res = getItem('auth');
    console.log(res, 'res')
    if (res && res.userValid && res.role == 1) {
      status = true
    } else {
      status = false
      this.router.navigate(['/login'])
    }

    return status;
  }

}
