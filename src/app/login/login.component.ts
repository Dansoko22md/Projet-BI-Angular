import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class LoginComponent {
  email = '';
  password = '';
  loading = false;
  error = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    this.loading = true;
    this.error = '';

    this.authService.login(this.email, this.password).subscribe({
      next: (success) => {
        if (success) {
          const user = this.authService.getCurrentUser();
          if (user) {
            this.router.navigate(['/dashboard', user.role]);
          }
        } else {
          this.error = 'Email ou mot de passe incorrect';
        }
        this.loading = false;
      },
      error: () => {
        this.error = 'Une erreur est survenue';
        this.loading = false;
      }
    });
  }
}