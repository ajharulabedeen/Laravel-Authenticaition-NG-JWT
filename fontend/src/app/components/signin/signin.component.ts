import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JaewisService } from '../../Services/jaewis.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor( private Jarwis:JaewisService ) {

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
      data=> console.log(data),
      error=> this.handleError(error)
    );
  }

  handleError(error) {
    console.log(error);
    this.error = error.error.errors;
  }


}//class
