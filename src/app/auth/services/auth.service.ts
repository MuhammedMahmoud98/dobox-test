import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user$!: BehaviorSubject<User>;
  constructor() {
    this.initUser();
  }
  initUser(): void {
    if (!this._user$) {
      this._user$ = new BehaviorSubject(this.createUser());
    } else {
      console.log('already created');
    }

  }
  private createUser(): User {
    return {
      id: 1,
      name: 'STC user'
    }
  }
  get user$(): BehaviorSubject<User> {
    return this._user$;
  }
}
