import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    // NavbarComponent
  ],
  imports: [
    CommonModule,
    NavbarComponent,
    AppRoutingModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
