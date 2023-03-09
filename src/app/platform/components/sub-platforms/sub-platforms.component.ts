import { Component, OnInit } from '@angular/core';
import {SubPlatform} from "../../../core/models/platforms.model";
import {tap} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-sub-platforms',
  templateUrl: './sub-platforms.component.html',
  styleUrls: ['./sub-platforms.component.scss']
})
export class SubPlatformsComponent implements OnInit {
  id?: string;

  subPlatforms: SubPlatform[] = [
    {id: 1, name: 'kanban'},
    {id: 2, name: 'main-table'},
    {id: 3, name: 'dashboard'},
  ];

  constructor(private readonly activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.updatePlatformId();
  }
  updatePlatformId(): void {
    this.activatedRouter.params.pipe(
      tap((params: {id?: string}) => this.id = params?.id)
    ).subscribe()
  }
}
