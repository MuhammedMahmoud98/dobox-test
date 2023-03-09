import {Component, Input, OnInit} from '@angular/core';
import {Platform} from "../../models/platforms.model";

@Component({
  selector: 'app-platforms-list',
  templateUrl: './platforms-list.component.html',
  styleUrls: ['./platforms-list.component.scss']
})
export class PlatformsListComponent implements OnInit {
  @Input() platforms: Platform[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
