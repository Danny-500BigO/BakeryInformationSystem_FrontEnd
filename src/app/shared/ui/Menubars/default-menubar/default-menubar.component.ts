import { Component, ViewChild, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { UserLoginComponent } from '../../../../features/authentications/components/register/register.component';
import {  loginComponent } from '../../../../features/authentications/components/login/login.component';


@Component({
  selector: 'app-default-menubar',
  standalone: true,
  imports: [
    CommonModule,
    MenubarModule,
    FontAwesomeModule,
    DialogModule,
    ButtonModule,
    UserLoginComponent,
    loginComponent
  ],
  templateUrl: './default-menubar.component.html',
  styleUrl: './default-menubar.component.scss',
})
export class DefaultMenubarComponent {
  faUser = faUser;
  loginDialog: boolean = false;

  // @ViewChild(UserLoginComponent) userLogin !: UserLoginComponent;
  @ViewChild(loginComponent) userLogin !: loginComponent

  position: any = 'center';

  showDialog(position: string) {
    this.loginDialog = true;
  }

  resetForm(){

    // this.userLogin.resetUserForm();
    // this.userLogin.reset();

  }

  
}
