import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private userService: UserService,
    private fb: FormBuilder) { }

  loginForm: FormGroup = this.fb.group({
    user: [null, Validators.required],
    password: [null, Validators.required]
  });
  notFound = false;

  ngOnInit(): void {
  }

  authenticate() {
    this.notFound = false;
    if (this.loginForm.valid) {
      this.userService.authenticate(this.loginForm.value).subscribe(
        (res) => {
          if (res.status === 200) {
            alert('Logged In Successfully');
          }
        }, (err) => {
          if (err['status'] === 404) {
            this.notFound = true;
          }
          console.log(`Error :::: ${err}`);
        }
      )
    }
  }

}
