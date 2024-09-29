import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { BASICSModule } from '../../components/BASICS/basics.module';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../../app-routing.module';




@NgModule({
  declarations: [
    AdminHomeComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    BASICSModule,
    RouterModule,
    AppRoutingModule
  ],
  exports: [
    AdminHomeComponent,
    UserListComponent
  ]
})
export class AdminModule { }
