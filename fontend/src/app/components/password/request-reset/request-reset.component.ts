import { Component, OnInit } from '@angular/core';
import { JaewisService } from '../../../Services/jaewis.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {
  public form = {
    email: null
  };


  constructor(
    private Jarvis: JaewisService,
    private notify: SnotifyService,
    private Notfiy: SnotifyService
  ) { }

  ngOnInit() {
  }


  onSubmit() {
    this.Notfiy.info('Wait...', { timeout: 5000 })
    this.Jarvis.sendPasswordResetLink(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.notify.error(error.error.error)
    );
  }//onSubmit

  handleResponse(res) {
    this.Notfiy.success(res.data, { timeout: 0 });
    this.form.email = null;
  }//handleResponse

}//class
