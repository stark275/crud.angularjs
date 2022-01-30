import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {

  user: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
  this.http.get('http://localhost:8000/api/auth', {headers: headers}).subscribe(
      (result: any) => {
        // console.log('Success');
        // console.log(result);
        this.user = result.user
      },

      error => {
        console.log('Error');
        console.log(error);

      }
    )
  }

}
