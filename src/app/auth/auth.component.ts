import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Params } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  userId = '';
  password = '';
  list: Array<string>;
  
  djangoUrl = 'http://192.168.255.89:8000/accounts/jwt_login/';
  
    constructor(private http: HttpClient) { }

  ngOnInit() {
       
}

  login($event:MouseEvent){
    const options ={
      headers: {
        "Content-Type": "application/json",
    }
      
    }
    this.http.post<string[]>(this.djangoUrl, JSON.stringify({username: this.userId, password :this.password}),options).subscribe(
      list => 
      {
        this.list = list; 
        console.log(list);
      }
      );
  
  }



}
