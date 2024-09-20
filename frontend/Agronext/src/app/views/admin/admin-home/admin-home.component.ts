import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent {
  blogPosts: any[] = [];

  constructor(
    //private blogService: BlogServiceService,
    private http: HttpClient
  ){

  }
  ngOnInit(): void {
     // this.cargarBlogPost();
      
    
  }
/*
  cargarBlogPost(){
    this.blogService.getBlogPosts().subscribe(
      data => {
        this.blogPosts = data;
      },
      error => {
        console.error('Error al cargar los blog posts', error);
      }
    );
  }
    */
  getImageUrl(imagePath: string): string{
    return `http://127.0.0.1:8000/images/blogPost/${imagePath}`;
  }
}
