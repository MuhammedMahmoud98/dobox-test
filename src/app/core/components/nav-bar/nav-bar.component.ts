import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  navItems: string[] = [
    'search',
    'notifications',
    'person_outline',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
