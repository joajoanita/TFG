import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // Mostrar la lista de usuarios 
  displayUsers(): Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/user/displayUsers');
  }
  // Editar los usuarios
  updateUsers(userId: any, postData:any) : Observable<any>{
    return this.http.put(`http://127.0.0.1:8000/api/user/editUsers/`+userId, postData);
  }
  // Borrar los usuarios
  deleteUsers(userId: number): Observable<any>{
    return this.http.delete(`http://127.0.0.1:8000/api/user/deleteUsers/`+userId);
  }
}
