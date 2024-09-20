import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { RouterModule } from '@angular/router';






@NgModule({
  declarations: [
    NavbarComponent,
    SliderComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule
   
  ],
  exports: [
    NavbarComponent,
    SliderComponent,
    
  ]
})
export class BASICSModule { }
