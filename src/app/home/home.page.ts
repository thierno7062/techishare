import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  users: any = [];

  constructor(private http: HttpClient) {
    this.getUser();
  }

  getUser(){

    this.http.get('http://localhost/user.php').subscribe((response)=>{
      console.log(response);
      this.users= response;

    })
  }

}
