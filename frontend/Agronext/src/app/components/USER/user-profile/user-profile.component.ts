import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/Auth/auth.service'; 

import { User } from '../../../models/user';
import { Router } from '@angular/router';




@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{
  UserProfile = new User;

 

  
  constructor(public authService: AuthService, private router: Router){
  }

  ngOnInit() {
    this.authService.profileUser().subscribe(
      (data: any) => {
        console.log('Perfil del usuario:', data);
        this.UserProfile = data;
      },
      (error) => {
        console.error('Error al obtener el perfil del usuario', error);
      }
    );
  
  
  }

  
}
