import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../services/Blog/blog.service';
import { BlogPost } from '../../../models/blog-post';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css'
})
export class EditPostComponent implements OnInit{
  error: any;
  blogId: any;
  postData: any;
  blogPost = new BlogPost;
  selectedFile: File | undefined;
  
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    public router: Router,
  ) {}

  ngOnInit() { 
    console.log(this.route.snapshot.params['blogId']);
    this.blogId = this.route.snapshot.params['blogId'];
    this.onDisplayPostById();
  }
  
  onDisplayPostById(){
    this.blogService.displayPostById(this.blogId).subscribe( val => {
      this.postData = val;
      this.blogPost = this.postData;
    });
  }

  onUpdatePost(): void {
    this.blogService.updatePost(this.blogId, this.blogPost).subscribe(
      () => {
        console.log('Post actualizado correctamente');
        this.router.navigate(['/blog']);
      },
      error => {
        if (error.status === 422) {
          // Manejar errores de validación específicos
          this.error = error.error.message; // o ajustar según la estructura de tu respuesta de error
        } else {
          console.error('Error al actualizar el post:', error);
        }
      }
    );
  }

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFile = inputElement.files[0]; // Guarda el archivo seleccionado
    } else {
      console.error('No se seleccionó ningún archivo o files es undefined');
    }
  }
}
