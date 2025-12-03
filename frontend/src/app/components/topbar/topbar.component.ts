import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-topbar',
  standalone: true,
  templateUrl: './topbar.component.html',
  imports: [
    NgIf,
    RouterOutlet,
    RouterLink
  ]
})
export class TopbarComponent {
  constructor(public auth: AuthService) {}
  logout() { this.auth.logout(); }
}
