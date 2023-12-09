import { Component } from '@angular/core';
import { WeatherComponent } from '../weather/weather.component';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WeatherComponent,MainComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

