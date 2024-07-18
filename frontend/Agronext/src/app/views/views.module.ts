import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserViewModule } from './user-view/user-view.module';
import { AdminModule } from './admin/admin.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    UserViewModule,
    AdminModule
  ]
})
export class ViewsModule { }
