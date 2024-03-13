import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RocketsService, RocketInterface } from './services/rockets.service';
import { SummaryComponent } from './components/summary/summary.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SummaryComponent,
    DashboardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Obtengo la información de la interfaz para cargarlo en la plantilla
  rockets: Array<RocketInterface> = [];
  constructor(service: RocketsService) {
    service.load().subscribe(rockets => {
      this.rockets = rockets;
    })
  }
}
