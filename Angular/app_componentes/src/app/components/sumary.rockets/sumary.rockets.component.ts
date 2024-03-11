import { Component, Input } from '@angular/core';
import { RocketInterface, RocketsService } from '../../services/rockets.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sumary-rockets',
  standalone: true,
  imports: [],
  providers: [],
  templateUrl: './sumary.rockets.component.html',
  styleUrl: './sumary.rockets.component.css'
})
export class SumaryRocketsComponent {
  @Input() rocket:RocketInterface = { // Obtengo los datos desde la interfaz.
    rocket_id:'falcon1', // En Angular 17 es obligatorio inicializar los campos.
    cost_per_launch:6700000,
    rocket_name:'Falcon 1',
    height:22.25,
    image:'https://imgur.com/DaCfMsj.jpg',
    company:'SpaceX'
  };
}
