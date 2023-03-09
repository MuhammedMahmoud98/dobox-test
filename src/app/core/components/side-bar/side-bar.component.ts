import { Component, OnInit } from '@angular/core';
import {Platform} from "../../models/platforms.model";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  platforms: Platform[] = [
    {id: 1,name: 'chat'},
    {id: 2,name: 'inbox'},
    {id: 3,name: 'HUB road map'},
    {id: 4,name: 'dobox'},
    {id: 5,name: 'stc profile'},
    {id: 6,name: 'meeting'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
