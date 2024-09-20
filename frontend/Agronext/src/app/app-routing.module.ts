import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/user-view/home/home.component';
import { AdminHomeComponent } from './views/admin/admin-home/admin-home.component';

import { LoginComponent } from './components/SESSION/login/login.component';
import { RegisterComponent } from './components/SESSION/register/register.component';
import { UserProfileComponent } from './components/USER/user-profile/user-profile.component';
import { AdminGuard } from './guards/admin-guard.guard';
import { BlogComponent } from './views/user-view/blog/blog.component';
import { CreatePostComponent } from './components/BLOG/create-post/create-post.component';
import { EditPostComponent } from './components/BLOG/edit-post/edit-post.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: UserProfileComponent},
  { path: 'home', component: HomeComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'createBlog', component: CreatePostComponent},
  { path: 'editBlog/:blogId', component: EditPostComponent},
  { path: 'adminHome', component: AdminHomeComponent, canActivate: [AdminGuard]},
  { path: '**', redirectTo: '/home', pathMatch: 'full'}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
