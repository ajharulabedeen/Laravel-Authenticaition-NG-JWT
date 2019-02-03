import { Component, OnInit } from '@angular/core';
import { JaewisService } from '../../Services/jaewis.service';
import { TokenService } from '../../Services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit() {
  }


  public form = {
    email:null,
    password:null
    
  };

  public error = null;

  constructor( 
    private Jarwis:JaewisService,
    private Token: TokenService ) {

   }


  onSubmit() {
    this.Jarwis.login(this.form).subscribe(
      data => this.handleResponse(data),
      error=> this.handleError(error)
    );

  }

  handleResponse(data) {
    this.Token.handle(data.access_token);
  }


  handleError(error){
    this.error = error.error.error;
  }  

  


}//class
