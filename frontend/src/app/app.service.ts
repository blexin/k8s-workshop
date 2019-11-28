import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { WeatherForecast } from './app.models';

@Injectable({providedIn: 'root'})
export class AppService {
  constructor(private httpClient: HttpClient) { }

  getWeatherForecast() {
    return this.httpClient.get<WeatherForecast[]>(environment.apiUrl);
  }

}
