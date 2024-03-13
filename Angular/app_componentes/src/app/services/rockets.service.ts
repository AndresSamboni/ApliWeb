import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Parámetros para conectar con la API
let rockets: Array<string> = ['falcon1'];
let serviceUrl: string = 'https://api.spacexdata.com/v3/rockets/';

// Interfaz para recibir los parámetros deseados
export interface RocketInterface {
  rocket_id: string;
  cost_per_lunch: number;
  rocket_name: string;
  height: {meters: number};
  flickr_images: [''];
  company: string;
}

@Injectable({
  providedIn: 'root'
})
export class RocketsService {
  // Utilización del protocolo HttpClient para conectar con la API
  constructor(private http: HttpClient) {}
  // Métodos para interactuar con la API
  get() {
    return rockets.slice();
  }
  add(rocket: string) {
    rockets.push(rocket);
    return this.get();
  }
  remove(rocket: string) {
    rockets.splice(rockets.indexOf(rocket), 1);
    return this.get();
  }
  load() {
    return this.http.get<Array<RocketInterface>>(serviceUrl);
  }
}
