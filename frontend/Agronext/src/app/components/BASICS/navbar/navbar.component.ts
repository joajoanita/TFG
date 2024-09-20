import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStateService } from '../../../services/Auth/auth-state.service'; 
import { TokenService } from '../../../services/Auth/token.service';
import { User } from '../../../models/user';
import { AuthService } from '../../../services/Auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isSignedIn!: boolean;
  userPrivilege: string | undefined;
  UserProfile = new User;
  
  constructor(
    private auth: AuthStateService,
    public router: Router,
    public token: TokenService,
    public authService: AuthService
  ){}

  ngOnInit() {
    this.auth.userAuthState.subscribe((val) => {
      this.isSignedIn = val;
    });

    this.authService.profileUser().subscribe((user) => {
      this.userPrivilege = user.privilege;
    });
    
  }


  signOut() {
    this.auth.setAuthState(false);
    this.token.removeToken();
    this.router.navigate(['login']);
  }


}
