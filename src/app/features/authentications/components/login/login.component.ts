import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Message } from 'primeng/api'
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    MessagesModule,
    NgClass,ButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class loginComponent {

  userLoginForm!:FormGroup;

  messages: Message[] = [
    {
      severity: 'info',
      closable: false,
      detail: 'Please fill all required fields',
    },
  ];

  constructor(private fb:FormBuilder){
    
  }

  ngOnInit(){
    this.loadLoginForm();
  }

  loadLoginForm()
  {
    this.userLoginForm = this.fb.group({
      userName: [null, Validators.required],
      uPassword: [null, Validators.required],
     
    });

  }



}
