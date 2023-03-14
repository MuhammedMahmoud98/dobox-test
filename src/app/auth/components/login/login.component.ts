import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private readonly fb: NonNullableFormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.loginForm = this.fb.group(this.createFormControls())
    console.log(this.loginForm);
  }
  createFormControls(): { [key: string]: FormControl<string> } {
    return { email: this.fb.control('', [Validators.required, Validators.email, Validators.minLength(10)]), password: this.fb.control('', [Validators.required, Validators.minLength(6)]) }

  }
  get formControls() {
    return this.loginForm.controls;
  }

  onSubmit() {
    console.log(this.loginForm);
  }
}
