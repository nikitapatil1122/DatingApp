import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { error } from 'protractor';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};
  // @Input() registerValues: any;
  @Output() cancelRegister = new EventEmitter();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register()
  {
    this.authService.register(this.model).subscribe(() => {
      console.log('registration successfull');
    }, err => {
      console.log(err);
    });
  }

  cancel()
  {
    console.log('cancelled');
    this.cancelRegister.emit(false);
  }

}
