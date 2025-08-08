import { Component, signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';
import { Counter } from '../components/counter/counter';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Greeting, Counter],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  homeMessage = signal('Hello World! Good Day');
  keyUpHandler(e: KeyboardEvent) {
    console.log(e.key);
  }
}
