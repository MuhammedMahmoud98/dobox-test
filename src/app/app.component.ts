import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {InternationalizationService} from "./core/services/internationalization.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private readonly translate: TranslateService,
    private readonly internationalizationService: InternationalizationService,
  ) {}

  ngOnInit(): void {
    this.internationalizationService.setCurrentLangAndDirection();
  }
}
