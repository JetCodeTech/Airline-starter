import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthadminGuard } from 'src/app/guards/authadmin.guard';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { setItem } from '../../utils/utils'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private auth: AuthenticationService) { }

  ngOnInit(): void {

    this.login = this.fb.group({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required])
    })

  }
  loginData() {

    this.http.get("http://localhost:3000/register").subscribe((res: any) => {
      let validUser = res.find((val: any) => val.email == this.login.value.email && val.password == this.login.value.password)
      if (validUser) {
        this.login.reset()
        this.auth.isLoggedIn.next(true)
        this.auth.userRole.next(validUser.role)
        this.auth.userId.next(validUser.id)
        setItem('auth', JSON.stringify({ userValid: true, role: validUser.role, userId: validUser.id }));
        if (validUser.role == 2) {
          this.router.navigate(['/user/search-flights'])
        } else {
          this.router.navigate(['/admin/schedule'])
        }

      } else {
        this.router.navigate(['/login'])
      }

    })




  }

}
