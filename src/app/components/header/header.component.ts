import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navbarOpen = false;

  toggleNavbar() {
alert("test");
    this.navbarOpen = !this.navbarOpen;
  }

  constructor() { }

  ngOnInit() {
  }

}
