import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { getItem } from 'src/app/utils/utils';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private auth: AuthenticationService) {
    this.registerForm = this.fb.group({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
      fName: new FormControl("", [Validators.required]),
      lName: new FormControl("", [Validators.required]),
      role: new FormControl(2)
    })
  }

  ngOnInit(): void {
  }
  registerData() {
    let userRole = getItem('auth')
    if (userRole && userRole.role == 1) {
      this.registerForm.value.role = 1
    }
    this.http.post("http://localhost:3000/register", this.registerForm.value).subscribe(res => {
      if (res) {
        this.registerForm.reset()
        this.router.navigate(['/login'])
      }
    })
  }
}
