import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { AuthService } from './auth/services/auth.service';
import { InternationalizationService } from "./core/services/internationalization.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isLoggedIn: boolean;
  constructor(
    private readonly translate: TranslateService,
    private readonly internationalizationService: InternationalizationService,
    private readonly authService: AuthService
  ) {
    this.isLoggedIn = false;
  }

  ngOnInit(): void {
    this.internationalizationService.setCurrentLangAndDirection();
    this.authService.user$.subscribe((user) => {
      if (user) {
        console.log(user);
        return;
        this.isLoggedIn = false;
      }
    });
  }
}
