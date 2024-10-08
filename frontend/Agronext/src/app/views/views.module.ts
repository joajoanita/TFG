import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserViewModule } from './user-view/user-view.module';
import { AdminModule } from './admin/admin.module';
import { RouterModule } from '@angular/router';
import { BASICSModule } from '../components/BASICS/basics.module';
import { AppRoutingModule } from '../app-routing.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    BASICSModule,
    AppRoutingModule
  ],
  exports: [
    UserViewModule,
    AdminModule
  ]
})
export class ViewsModule { }
