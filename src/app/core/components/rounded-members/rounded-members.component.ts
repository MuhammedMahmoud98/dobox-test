import { Component, OnInit } from '@angular/core';
import {InternationalizationService} from "../../services/internationalization.service";

@Component({
  selector: 'app-rounded-members',
  templateUrl: './rounded-members.component.html',
  styleUrls: ['./rounded-members.component.scss']
})
export class RoundedMembersComponent implements OnInit {
  currentLang?: string;
  constructor(private readonly internationalizationService: InternationalizationService) { }

  ngOnInit(): void {
    this.currentLang = this.internationalizationService.currentLang;
  }

}
