import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Definición de los parámetros necesarios para clasificar los cohetes y realizar la conexión con la API.
*/
let rockets: Array<string> = ['falcon1']; // Lista de modelos por el rocket_id.
let rocketsURL: string = 'https://api.spacexdata.com/v3/rockets'; // URL de la API.

export interface RocketInterface {
  rocket_id:string;
  cost_per_launch:number;
  rocket_name:string;
  height:number;
  image:string;
  company:string;
}

@Injectable({
  providedIn: 'root'
})
export class RocketsService {

  constructor(private http: HttpClient) { } //Inyección del protocolo http para la API
  /*
    Creación de los métodos de control para la información traída por la API.
  */
  get(){
    return rockets.slice();
  }
  add(rocket:string){
    rockets.push(rocket);
    return this.get();
  }
  remove(rocket:string){
    rockets.splice(rockets.indexOf(rocket),1);
    return this.get();
  }
  load(){
    return this.http.get<Array<RocketInterface>>(rocketsURL);
  }
}
