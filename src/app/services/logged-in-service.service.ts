import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedInServiceService implements OnInit{

  constructor() { }

  ngOnInit(): void {

  }

  getState(){
    return (localStorage.getItem('token') !== null);
  }

  logout() {
    localStorage.removeItem('token');
  }
}
