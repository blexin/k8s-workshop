import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { WeatherForecast } from './app.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'K8s Workshop';
  weatherForecast: WeatherForecast[] = [];

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getWeatherForecast()
      .subscribe(
        data => this.weatherForecast = data,
        err => alert(JSON.stringify(err))
      );
  }
}
