import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from './create-post/create-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailPostComponent } from './detail-post/detail-post.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../../app-routing.module';



@NgModule({
  declarations: [
    CreatePostComponent,
    EditPostComponent,
    DetailPostComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    CreatePostComponent,
    EditPostComponent
  ]
})
export class BLOGModule { }
