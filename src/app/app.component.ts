import { CommonModule }     from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
//    FormsModule,
    CommonModule,
    RouterModule,
    HttpClientModule
  ]
})
export class AppComponent {
  protected readonly title = 'Loja Virtual';
}