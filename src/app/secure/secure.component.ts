import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {

  user: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
  this.http.get('http://localhost:8000/api/auth', {headers: headers}).subscribe(
      (result: any) => {
        // console.log(result);
        this.user = result.user
      },

      error => {
        // console.log(error);
        localStorage.removeItem('token');
        this.router.navigate(['/login'])
      }
    )
  }

}
