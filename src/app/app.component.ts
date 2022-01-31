import { Component, OnInit } from '@angular/core';
import { LoggedInServiceService } from './services/logged-in-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private loggedInService: LoggedInServiceService) { }

  auth = false;

  ngOnInit(): void {
    this.auth = this.loggedInService.getState();
  }

  loggedIn(){
    return this.loggedInService.getState();
  }

  logout (){
    return this.loggedInService.logout();
  }
}
