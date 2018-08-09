import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  userId = '';
  password = '';
  list: Array<string>;
  csrfToken = '';
  djangoUrl = 'http://192.168.255.89:8000/accounts/login/';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<string[]>(this.djangoUrl, { responseType:'html'}).subscribe(html => {
      //console.log(html)
      const parser=new DOMParser();//古い IE では実装されていないので注意
      const django_doc = parser.parseFromString(html, "text/html");
      this.csrfToken = django_doc.getElementsByName("csrfmiddlewaretoken")[0].value
    }
    );

  }

  login($event:MouseEvent){    
    console.log(`hello world ${this.userId} ${this.password}`);

    const options ={
      params :{
        'csrfmiddlewaretoken': this.csrfToken,
        'username': this.userId,
        'password': this.password,
      },
      headers:{ 'Content-Type':'application/json' }
    }
    this.http.post<string[]>(this.djangoUrl, options).subscribe(
      list => 
      {
        this.list = list; 
        console.log(list);
      }
      );
    


    
    

  }



}
