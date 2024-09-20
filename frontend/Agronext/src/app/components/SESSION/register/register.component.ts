import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/Auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  errors: any = null;
  selectedFile: File | null = null;

  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService
  ) {
    this.registerForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      password_confirmation: [''],
      profile_img: [null]
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.authService.register(this.registerForm.value).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        this.errors = error.error;
        console.log('Ha dado error');
      },
      () => {
        this.registerForm.reset();
        this.router.navigate(['login']);
        console.log('Hechisimo');
      }
    );
  }
  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }
}
