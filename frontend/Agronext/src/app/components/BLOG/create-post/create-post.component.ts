import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from '../../../services/Blog/blog.service';
import { AuthStateService } from '../../../services/Auth/auth-state.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent {
  blogForm: FormGroup;
  errors: any = null;
  isSignedIn!: Boolean;
  posts: any [] = [];
  selectedFile: File | undefined;

  constructor(
    public router: Router,
    public fb: FormBuilder,
    public blogService: BlogService,
    public authState: AuthStateService,
  ){
    this.blogForm = this.fb.group({
      title: [],
      description: [],
      blogImage: [],
      blogTag: [],
    });
  }

  ngOnInit(){
    this.authState.userAuthState.subscribe((val) => {
      this.isSignedIn = val;
    });

    this.loadPost();
  }

  onSubmit(){
    if (this.blogForm.valid && this.selectedFile) {
      const formData = new FormData();
      formData.append('title', this.blogForm.get('title')!.value);
      formData.append('description', this.blogForm.get('description')!.value);
      formData.append('blogTag', this.blogForm.get('blogTag')!.value);
      formData.append('blogImage', this.selectedFile, this.selectedFile.name);

      this.blogService.createPost(formData).subscribe(
        response => {
          console.log('Blog post added successfully!', response);
          this.blogForm.reset();
          this.router.navigate(['blog']);
        },
        error => {
          console.error('Error adding blog post', error);
        }
      );
    } else {
      console.error('Formulario no válido o archivo no seleccionado');
    }
  }

  loadPost(){
    this.blogService.displayPosts().subscribe(
      data => {
        this.posts = data;
      },
      errors => {
        console.error('Error al cargar el blog', errors);
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
