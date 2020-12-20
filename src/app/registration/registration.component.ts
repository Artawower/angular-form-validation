import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  public registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.initRegistrationForm();
  }

  get controls(): { [key: string]: AbstractControl } {
    return this.registrationForm.controls;
  }

  public submit(): void {
    if (this.registrationForm.invalid) {
      // this.registrationForm.markAllAsTouched();
      // this.snackBar.open('User be careful', 'Warning', { duration: 2000 });
      return;
    }
    console.log('Submited');
  }

  private initRegistrationForm(): void {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
}
