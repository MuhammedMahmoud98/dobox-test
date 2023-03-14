import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { InternationalizationService } from "../../services/internationalization.service";

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

  constructor(private readonly internationalizationService: InternationalizationService, private readonly authService: AuthService) { }

  ngOnInit(): void {
  }


  switchLanguage(): void {
    this.internationalizationService.switchLang();
  }
  logout(): void {
    this.authService.resetUser();
  }

}
