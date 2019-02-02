import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  public form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null
  };

  public error = [];

  onSubmit() {
    this.http.post("http://localhost:8000/api/signup", this.form).subscribe(
      data=> console.log(data),
      error=> this.handleError(error)
    );
  }

  handleError(error) {
    this.error = error.error.errors;
  }


}//class
