import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { filter, map } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
export interface Domain {
  name: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  domains!: Domain[];
  filteredDomains$!: Observable<Domain[]>
  constructor(
    private readonly fb: NonNullableFormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router) { }

  ngOnInit(): void {
    this.domains = this.getDomains();
    this.initForm();
  }
  initForm() {
    this.loginForm = this.fb.group(this.createFormControls());
    console.log(this.loginForm);
    this.filteredDomains$ = this.listenToEmail();
  }
  createFormControls(): { [key: string]: FormControl<string> } {
    return { email: this.fb.control('', [Validators.required, Validators.email, Validators.minLength(10)]), password: this.fb.control('', [Validators.required, Validators.minLength(6)]) }
  }
  get formControls() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.createToken(this.loginForm.value).subscribe((loginResponse) => {
        console.log('Login Response', loginResponse);
        if (loginResponse.hasOwnProperty('user-id')) {
          this.authService.setUser(loginResponse);
          this.authService.setCookies(loginResponse);
          this.router.navigateByUrl('/platform');
        }
      });
    }
  }
  displayFn(domain: Domain): string {
    return domain?.name || '';
  }
  getDomains(): Domain[] {
    return [{ name: 'stc.com.sa' }, { name: 'stcs.com.sa' }, {
      name: 'mail-r.com'
    }].slice();
  }
  listenToEmail() {
    return this.formControls['email'].valueChanges.pipe(filter(txt => txt.endsWith('@')),
      map((txt: string) => {
        return this._filter(txt);
      }))
  }
  private _filter(name: string): Domain[] {
    if (name.includes('@')) {
      const lowerCaseDomainName = name.toLowerCase().split('@')[1];
      if (lowerCaseDomainName == '') {
        console.log('True');
        return this.domains.slice();
      }
      return this.domains.filter(option =>
        option.name.toLowerCase().includes(lowerCaseDomainName)
      );
    }
    return [];
  }
  onOptionSelected(ev: MatAutocompleteSelectedEvent) {
    this.loginForm.controls['email'].setValue(`ahmed-hossam@${ev.option.value}`);
    this.loginForm.controls['email'].updateValueAndValidity();
  }
}
