import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  weatherForecasts: any[] = [];

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getWeatherForecasts().subscribe(data => {
      this.weatherForecasts = data;
    });
  }
}
