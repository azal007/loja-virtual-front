import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from './core/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ]
})
export class AppComponent {
  protected readonly title = 'Loja Virtual';

  constructor(public authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }
}