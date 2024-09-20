import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AuthService {
User = new User;

private userRoleSubject = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient) { }

  //Registro de usuarios
  register(User: User): Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/auth/register', User);
  }

  //Inicio de sesión de usuario
  login(User:User): Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/auth/login', User);
  }

  //Acceso al perfil del usuario
  profileUser(): Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/auth/user-profile');
  }

}
