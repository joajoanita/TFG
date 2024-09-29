import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditUserComponent } from './edit-user/edit-user.component';



@NgModule({
  declarations: [
    UserProfileComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserProfileComponent
  ]
})
export class USERModule { }
