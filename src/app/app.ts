import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/*@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('loja-virtual');
}*/


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true
})
export class App {
  protected readonly title = 'Loja Virtual';
}