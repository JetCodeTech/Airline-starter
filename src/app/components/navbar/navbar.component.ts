import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }
  logout() {
    this.auth.isLoggedIn.next(false)
    localStorage.clear()
    this.router.navigate(['/login'])
  }

}
