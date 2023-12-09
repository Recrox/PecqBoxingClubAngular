import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from './base/base.service';
import { WeatherForecast } from '../models/weatherForecast';

@Injectable({
  providedIn: 'root'
})
export class WeatherService extends BaseService {
  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  getWeatherForecasts(): Observable<WeatherForecast[]> {
    return this.get<WeatherForecast[]>('weatherforecast');
  }
}


