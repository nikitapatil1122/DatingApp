import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { error } from 'protractor';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};
  // @Input() registerValues: any;
  @Output() cancelRegister = new EventEmitter();

  constructor(private authService: AuthService, private alertifyService: AlertifyService) { }

  ngOnInit() {
  }

  register()
  {
    this.authService.register(this.model).subscribe(() => {
      this.alertifyService.success('registration successfull');
    }, err => {
      this.alertifyService.error(err);
      console.log(err);
    });
  }

  cancel()
  {
    this.alertifyService.message('Registration Cancelled');
    this.cancelRegister.emit(false);
  }

}
