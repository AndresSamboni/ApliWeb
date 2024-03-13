import { Component, Input } from '@angular/core';
import { RocketInterface } from '../../services/rockets.service';

@Component({
  selector: 'summary',
  standalone: true,
  imports: [],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {
  // Recibo la información de la interfaz. Es necesario inicializar la información
  @Input()
  rocket: RocketInterface = {
    rocket_id: '',
    cost_per_lunch: 0,
    rocket_name: '',
    height: {meters: 0},
    flickr_images: [''],
    company: ''
  };
}
