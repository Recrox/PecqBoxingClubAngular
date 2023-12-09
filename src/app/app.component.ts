import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { AccueilComponent } from './accueil/accueil.component';

const imports = [CommonModule, RouterOutlet, AccueilComponent];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: imports,
})
export class AppComponent {
  title = 'TestAppAngular';
}
