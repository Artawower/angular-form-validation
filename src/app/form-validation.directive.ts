import { Directive, HostListener, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Directive({
  selector: 'form[formGroup]',
})
export class FormValidationDirective {
  @Input() formGroup: FormGroup;

  @HostListener('submit', ['$event'])
  formSubmit(): void {
    if (this.formGroup.valid) {
      return;
    }
    this.formGroup.markAllAsTouched();
    this.showErrorPopup();
  }

  private showErrorPopup(): void {
    this.snackBar.open('User be careful', 'Warning', { duration: 3000 });
  }

  constructor(private snackBar: MatSnackBar) {}
}
