import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  isConnected: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  logOut() {
  }

}
