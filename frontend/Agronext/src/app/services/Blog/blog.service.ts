import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) { }

  //Crear un post (CREATE)
  createPost(postData: any): Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/blog/blogStore', postData);
  }

  //Mostrar los posts añadidos (READ)
  displayPosts(): Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/blog/blogIndex');
  }

  //Mostrar los posts mediante ID 
  displayPostById(blogId:any): Observable<any>{
    return this.http.get(`http://127.0.0.1:8000/api/blog/displayPost/${blogId}`);
  }

  //Borrar los posts (DELETE)
  deletePost(blogId: number): Observable<any>{
    return this.http.delete(`http://127.0.0.1:8000/api/blog/deletePost/`+blogId);
  }

  // Editar los blog post (UPDATE)
  updatePost(blogId: any, postData:any) : Observable<any>{
    return this.http.put(`http://127.0.0.1:8000/api/blog/editBlog/`+blogId, postData);
  }
}
