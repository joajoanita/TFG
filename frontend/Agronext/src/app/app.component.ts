import { Component, OnInit } from '@angular/core';
import { AuthStateService } from './services/Auth/auth-state.service';
import { Router } from '@angular/router';
import { TokenService } from './services/Auth/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Agronext';

  isSignedIn!: boolean;

  constructor(
    private auth: AuthStateService,
    public router: Router,
    public token: TokenService
  ){}

  ngOnInit() {
    this.auth.userAuthState.subscribe((val) => {
      this.isSignedIn = val;
    });
  }

  // Cierre de sesión
  signOut() {
    this.auth.setAuthState(false);
    this.token.removeToken();
    this.router.navigate(['login']);
  }
  
}
