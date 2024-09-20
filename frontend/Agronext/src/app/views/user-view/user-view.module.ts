import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BASICSModule } from '../../components/BASICS/basics.module';
import { BlogComponent } from './blog/blog.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    HomeComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    BASICSModule,
    RouterModule
  ]
})
export class UserViewModule { }
