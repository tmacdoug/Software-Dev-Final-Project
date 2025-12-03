import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  template: `
    <h2>Login</h2>

    <form (submit)="onSubmit($event)">
      <div>
        <label>
          Username:
          <input name="username" [(ngModel)]="username">
        </label>
      </div>

      <div>
        <label>
          Password:
          <input name="password" type="password" [(ngModel)]="password">
        </label>
      </div>

      <button type="submit">Login</button>
    </form>

    <div *ngIf="error" style="color:red">
      {{ error }}
    </div>
  `
})
export class LoginComponent {
  username = '';
  password = '';
  error: string | null = null;

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit(e: Event) {
    e.preventDefault();
    this.auth.login(this.username, this.password).subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: (err) => this.error = err.error?.message || 'Login failed'
    });
  }
}
