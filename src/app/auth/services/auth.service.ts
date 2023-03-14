import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { LoginPayload } from 'src/app/core/models/login-payload.model';
import { User } from 'src/app/core/models/user.model';
import { environment } from 'src/environments/environment';
import { APIs } from 'src/app/core/constants/apis';
import { CookieService } from 'ngx-cookie-service';
import { LoginCredentails } from 'src/app/core/models/login-credentials.model';
import { Router } from '@angular/router';
const JsEncryptModule = require("jsencrypt");

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  constructor(private readonly http: HttpClient, private readonly cookieService: CookieService,
    private readonly router: Router) {
    this.initUser();
  }
  public hasToken(): boolean {
    return !!this.cookieService.get('token');
  }
  public resetUser() {
    this._user$.next(null);
    this.clearUserCookies();
    this.router.navigateByUrl('auth/login');
  }
  private initUser() {
    if (this.hasToken()) {
      this._user$.next(this.getUserFromCookies());
    }
  }
  get user$(): BehaviorSubject<User | null> {
    return this._user$;
  }
  setUser(loginCredentails: LoginCredentails): void {
    this._user$.next({
      userId: loginCredentails['user-id'],
      refreshToken: loginCredentails['refresh-token'],
      token: loginCredentails['access-token'],
      username: loginCredentails.email
    });
  }
  createToken(login: any): Observable<any> {
    const encrypt = new JsEncryptModule.JSEncrypt({
      default_key_size: 2048,
    });
    encrypt.setPublicKey(environment.ENCRYPTION_PUBLIC_KEY);
    const loginCredentails: LoginPayload = {
      username: login.email,
      password: encrypt.encrypt(login.password),
      "organization-domain": "blink.stcs.com.sa",
      "is-duo": true,
    };
    return this.login(loginCredentails);
  }
  login(loginCredentails: LoginPayload): Observable<any> {
    return this.http.post(APIs.LOGIN, JSON.stringify(loginCredentails));
  }
  setCookies(loginCredentails: LoginCredentails): void {
    this.cookieService.set("username", loginCredentails.email, undefined, "/");
    this.cookieService.set("token", loginCredentails["access-token"], undefined, "/");
    this.cookieService.set("userId", JSON.stringify(loginCredentails["user-id"]), undefined, "/");
    this.cookieService.set("refreshToken", loginCredentails["refresh-token"], undefined, "/");
    if (window.navigator.userAgent.includes("desktop")) {
      localStorage.setItem("token", loginCredentails["access-token"]);
      localStorage.setItem("userId", JSON.stringify(loginCredentails["user-id"]));
      localStorage.setItem("refreshToken", loginCredentails["refresh-token"]);
    }
  }
  getUserFromCookies(): User {
    return {
      token: this.cookieService.get('token'),
      refreshToken: this.cookieService.get('refreshToken'),
      userId: JSON.parse(this.cookieService.get('userId')),
      username: this.cookieService.get('username'),
    }
  }
  clearUserCookies(): void {
    this.cookieService.deleteAll('/');
  }
}
