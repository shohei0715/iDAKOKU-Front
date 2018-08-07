import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  id = '';
  password = '';

  constructor() { }

  ngOnInit() {
  }

  hoge(){
    console.log(`hello world ${this.id} ${this.password}`)
  }


}
