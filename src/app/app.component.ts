import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

const imports = [CommonModule, RouterOutlet, HomeComponent];

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
