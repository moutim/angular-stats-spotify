import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { TokenAuthService } from './token-auth.service';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    TokenAuthService
  ]
})
export class LoginModule { }
