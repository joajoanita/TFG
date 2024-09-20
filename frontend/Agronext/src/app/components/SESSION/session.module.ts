import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BASICSModule } from '../BASICS/basics.module';





@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BASICSModule
  ],
 
})
export class SESSIONModule { }
