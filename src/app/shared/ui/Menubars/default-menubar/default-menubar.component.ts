import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { UserLoginComponent } from '../../../../modules/User/user-login/user-login.component';

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
  ],
  templateUrl: './default-menubar.component.html',
  styleUrl: './default-menubar.component.scss',
})
export class DefaultMenubarComponent {
  faUser = faUser;
  loginDialog: boolean = false;

  position: any = 'center';

  showDialog(position: string) {
    this.loginDialog = true;
  }
}
