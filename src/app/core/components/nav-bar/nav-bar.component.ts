import { Component, OnInit } from '@angular/core';
import {InternationalizationService} from "../../services/internationalization.service";

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

  constructor(private readonly internationalizationService: InternationalizationService) { }

  ngOnInit(): void {
  }


  switchLanguage(): void {
    this.internationalizationService.switchLang();
  }

}
