import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { ViewsModule } from './views/views.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptorService } from './services/Auth/auth-interceptor.service';

import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    ViewsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
