import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-bar',
  templateUrl: './mini-bar.component.html',
  styleUrls: ['./mini-bar.component.scss']
})
export class MiniBarComponent implements OnInit {
  iconPaths: string[] = [
    'home.png',
    'chat.png',
    'dobox.png',
    'meeting.png',
    'inbox.png',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
