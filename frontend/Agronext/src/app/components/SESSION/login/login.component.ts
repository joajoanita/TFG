import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from '../../../services/Auth/token.service';
import { AuthService } from '../../../services/Auth/auth.service';
import { AuthStateService } from '../../../services/Auth/auth-state.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  errors:any = null;
  UserProfile = new User;

  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService,
    private token: TokenService,
    private authState: AuthStateService
  ) {
    this.loginForm = this.fb.group({
      email: [],
      password: [],
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.authService.login(this.loginForm.value).subscribe(
      (result) => {
        this.responseHandler(result);
      },
      (error) => {
        this.errors = error.error;
      },
      () => {
        this.authState.setAuthState(true);
        this.loginForm.reset();
        this.router.navigate(['/adminHome']);
      }
    );
  }
  // Handle response
  responseHandler(data:any) {
    this.token.handleData(data.access_token);
  }
}

