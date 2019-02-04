import { Component, OnInit } from '@angular/core';
import { JaewisService } from '../../Services/jaewis.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/Services/token.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor( 
    private Jarwis:JaewisService,
    private Token: TokenService,
    private router: Router ) {

  }

  ngOnInit() {
  }

  public form = {
    name: null,
    email: null,
    password: null,
    password_confirmation: null
  };

  public error = [];

  onSubmit() {
    console.log(this.form);
    this.Jarwis.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error=> this.handleError(error)
    );
  }

  handleError(error) {
    console.log(error);
    this.error = error.error.errors;
  }

  handleResponse(data) {
    this.Token.handle(data.access_token);
    this.router.navigateByUrl('/profile');
  }


}//class
