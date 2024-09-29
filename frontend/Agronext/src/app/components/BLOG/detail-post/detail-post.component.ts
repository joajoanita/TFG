import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../../services/Blog/blog.service';
import { BlogPost } from '../../../models/blog-post';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrl: './detail-post.component.css'
})
export class DetailPostComponent {
  blogId: any;
  blog: any; // Objeto para almacenar los detalles del post
  blogPost = new BlogPost;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.blogId = +params['blogId']; // Obtiene el ID del parámetro de la ruta
      this.onDisplayPostById(this.blogId); // Carga los detalles del post
    });
  }

  onDisplayPostById(blogId: any) {
    this.blogService.displayPostById(this.blogId).subscribe(
      data => {
        this.blog = data; // Asigna los detalles del post obtenidos del servicio
      },
      error => {
        console.error('Error al cargar los detalles del post', error);
      }
    );
  }

  getImageUrl(imagePath: string): string {
    return `http://127.0.0.1:8000/images/blogPost/${imagePath}`;
  }
}
