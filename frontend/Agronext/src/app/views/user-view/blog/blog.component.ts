import { Component } from '@angular/core';
import { BlogPost } from '../../../models/blog-post';
import { BlogService } from '../../../services/Blog/blog.service';
import { AuthService } from '../../../services/Auth/auth.service';
import { AuthStateService } from '../../../services/Auth/auth-state.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  blogPost = new BlogPost;
  post: any [] = [];
  isSignedIn!: boolean;
  userPrivilege: string | undefined;

  constructor(
    private blogService: BlogService,
    private authState: AuthStateService,
    private authService: AuthService,
  ){}

  ngOnInit(): void{
    this.displayPosts();
    this.authState.userAuthState.subscribe((val) => {
      this.isSignedIn = val;
    });

    this.authService.profileUser().subscribe((user) => {
      this.userPrivilege = user.privilege;
    });

  }

  displayPosts() {
    this.blogService.displayPosts().subscribe(
      data => {
        this.post = data;
      },
      error => {
        console.error('Error al cargar los posts', error);
      } 
    );
  }

  getImageUrl(imagePath: string): string {
    return `http://127.0.0.1:8000/images/blogPost/${imagePath}`;
  }

  deletePost(blogId: number): void {
    this.blogService.deletePost(blogId).subscribe(
      () => {
        this.displayPosts();
        console.log(`El blog con el ID ${blogId} ha sido eliminado`)
      },
      error => {
        console.error('Error al cargar los blog posts', error);
      }
    );
  }
}
