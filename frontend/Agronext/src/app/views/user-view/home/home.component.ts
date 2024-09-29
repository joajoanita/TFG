import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../services/Blog/blog.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit{

  blogPosts: any[] = [];

  constructor(
    private blogService: BlogService,
    private http: HttpClient
  ){

  }
  ngOnInit(): void {
      this.displayPosts();
      
    
  }

  displayPosts(){
    this.blogService.displayPosts().subscribe(
      data => {
        this.blogPosts = data;
      },
      error => {
        console.error('Error al cargar los blog posts', error);
      }
    );
  }
    
  getImageUrl(imagePath: string): string{
    return `http://127.0.0.1:8000/images/blogPost/${imagePath}`;
  }
}
