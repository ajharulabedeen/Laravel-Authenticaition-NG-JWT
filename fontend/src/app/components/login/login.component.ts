import { Component, OnInit } from '@angular/core';
import { JaewisService } from '../../Services/jaewis.service';

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

  constructor( private Jarwis:JaewisService ) {

   }


  onSubmit() {
    this.Jarwis.login(this.form).subscribe(
      data=> console.log(data),
      error=> this.handleError(error)
    );

  }

  handleError(error){
    this.error = error.error.error;
  }  

  


}//class
