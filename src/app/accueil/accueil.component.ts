import { Component } from '@angular/core';
import { WeatherComponent } from '../weather/weather.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [WeatherComponent, FooterComponent, HeaderComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {

}

