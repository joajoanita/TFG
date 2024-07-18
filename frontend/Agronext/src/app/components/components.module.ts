import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { USERModule } from './USER/user.module';
import { BLOGModule } from './BLOG/blog.module';
import { SESSIONModule } from './SESSION/session.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:  [
    USERModule,
    BLOGModule,
    SESSIONModule
  ]
})
export class ComponentsModule { }
