import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthService } from '../services/Auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.profileUser().pipe(
      map(user => {
        console.log('Privilege:', user.privilege);
        if (user && user.privilege === 'admin') {
          return true; 
        } else {
          this.router.navigate(['/home']); 
          return false;
        }
      }),
      catchError(err => {
        console.error('Error al recuperar el perfil del usuario', err);
        this.router.navigate(['/home']); 
        return of(false);
      })
    );
  }
}