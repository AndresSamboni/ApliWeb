import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SumaryRocketsComponent } from './components/sumary.rockets/sumary.rockets.component';
import { RocketInterface, RocketsService } from './services/rockets.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SumaryRocketsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app_componentes';

  rockets: Array<RocketInterface> = [];
  constructor (service:RocketsService){
    service.load().subscribe(rockets => {
      this.rockets=rockets;
    });
  }
}
