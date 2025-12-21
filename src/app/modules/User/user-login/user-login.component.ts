import { Component, EventEmitter, Output, output } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';

import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { Message } from 'primeng/api';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [
    CalendarModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    MessagesModule,
    NgClass,
  ],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss',
})
export class UserLoginComponent {
  userRegistartionForm!: FormGroup;

  messages: Message[] = [
    {
      severity: 'info',
      closable: false,
      detail: 'Please fill all required fields',
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.loadUserForm();
  }

  loadUserForm() {
    this.userRegistartionForm = this.fb.group({
      firstName: [null, Validators.required],
      LastName: [null, Validators.required],
      dateOfBirth: [null, Validators.required],
      userName: [null, Validators.required],
      userPassword: [null, Validators.required],
      userConfirmPassword: [null, Validators.required],
    });
  }

  storeUserData() {
    console.log(this.userRegistartionForm.value.firstName);
  }

  resetUserForm() {
    if (this.userRegistartionForm.valid) {
      this.userRegistartionForm.reset();

      this.userRegistartionForm.markAsPristine();
      this.userRegistartionForm.markAsUntouched();
      this.userRegistartionForm.updateValueAndValidity();
    }
  }

  reset() {
    this.userRegistartionForm.markAsPristine();
    this.userRegistartionForm.markAsUntouched();
    this.userRegistartionForm.updateValueAndValidity();
  }

  ngOnDestroy() {}
}
