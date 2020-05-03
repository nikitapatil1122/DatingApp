import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) {
    // this.getValues();

  }

  registerMode = false;

  Values: any;

  ngOnInit() {
  }

  cancelRegisterMode(registerMode: boolean)
  {
    this.registerMode = registerMode;
  }

  registerToggle()
  {
    this.registerMode = true;
  }

  // getValues()
  // {
  //   this.http.get('http://localhost:5000/api/values')
  //   .subscribe(response => {
  //     this.Values = response;
  //     console.log(this.Values);
  //   }, error => {
  //     console.log(error);
  //   });
  // }

}
