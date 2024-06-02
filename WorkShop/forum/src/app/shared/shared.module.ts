import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from '../auth/auth-routing.module';



@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule,  
  ], 
  exports: [
    WelcomeComponent
  ]
})
export class SharedModule { }
