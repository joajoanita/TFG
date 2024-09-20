import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { BASICSModule } from '../../components/BASICS/basics.module';




@NgModule({
  declarations: [
    AdminHomeComponent
  ],
  imports: [
    CommonModule,
    BASICSModule
  ],
  exports: [
    AdminHomeComponent
  ]
})
export class AdminModule { }
