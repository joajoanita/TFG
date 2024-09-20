import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from './create-post/create-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreatePostComponent,
    EditPostComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    CreatePostComponent,
    EditPostComponent
  ]
})
export class BLOGModule { }
