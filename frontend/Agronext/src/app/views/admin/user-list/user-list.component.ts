import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{
  users = new User;
  user: any [] = [];


  constructor (private userService: UserService,){}

  ngOnInit(): void {
      this.onDdisplayUsers();
  }

  onDdisplayUsers() {
    this.userService.displayUsers().subscribe(
      data => {
        this.user = data;
      },
      error => {
        console.error('Error al cargar los usuarios', error);
      } 
    );
  }

  onDeleteUsers(userId: number): void {
    this.userService.deleteUsers(userId).subscribe(
      () => {
        this.onDdisplayUsers();
        console.log(`El usuario con el ID ${userId} ha sido eliminado`)
      },
      error => {
        console.error('Error al cargar los usuarios', error);
      }
    );
  }
}
