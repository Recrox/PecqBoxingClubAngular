import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { CommonModule } from '@angular/common'; // [WARNING] NG8103: The `*ngFor` directive was used in the template, but neither the `NgFor` directive nor the `CommonModule` was imported.
import { WeatherForecast } from '../../models/weatherForecast';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  weatherForecasts: WeatherForecast[] = [];

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getWeatherForecasts().subscribe(data => {
      this.weatherForecasts = data;
    });
  }
}
