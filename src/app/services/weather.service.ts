import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from './base/base.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService extends BaseService {
  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  getWeatherForecasts(): Observable<any[]> {
    return this.get<any[]>('weatherforecast');
  }
}


