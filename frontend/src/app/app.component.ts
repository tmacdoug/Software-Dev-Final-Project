import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { TopbarComponent } from './components/topbar/topbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TopbarComponent,
    RouterLink,
    CommonModule
  ],
  template: `
    <!-- Topbar only if not on login page -->
    <nav *ngIf="!isLoginRoute()" style="background:#ddd; padding: 10px;">
      <a routerLink="/dashboard">Dashboard</a> |
      <a routerLink="/summary">Summary</a> |
      <a routerLink="/reports">Reports</a> |
      <button (click)="logout()">Logout</button>
    </nav>

    <!-- This is where pages appear -->
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  constructor(private router: Router) {}

  isLoginRoute(): boolean {
    return this.router.url === '/login' || this.router.url === '/';
  }

  logout() {
    localStorage.removeItem('spa_token');
    this.router.navigate(['/login']);
  }
}
