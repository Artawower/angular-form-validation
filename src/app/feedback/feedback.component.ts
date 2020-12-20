import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {
  public feedbackForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initFeedbackForm();
  }

  get controls(): { [k: string]: AbstractControl } {
    return this.feedbackForm.controls;
  }

  public submit(): void {
    if (this.feedbackForm.invalid) {
      return;
    }
    console.log('Submitted');
  }

  private initFeedbackForm(): void {
    this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
      message: ['', Validators.required],
    });
  }
}
