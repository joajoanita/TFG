import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { USERModule } from './USER/user.module';
import { BLOGModule } from './BLOG/blog.module';
import { SESSIONModule } from './SESSION/session.module';
import { BASICSModule } from './BASICS/basics.module';
import { RouterModule } from '@angular/router';
import {ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports:  [
    USERModule,
    BLOGModule,
    SESSIONModule,
    BASICSModule,
  ]
})
export class ComponentsModule { }
