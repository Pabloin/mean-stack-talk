import { Injectable } from '@angular/core';
import { Place } from './place'

@Injectable()
export class BackendApiService {

  constructor() { }

  getPlacesHard() : Place[] {

    let places = [
      
            {
              _id          : 1,
              userName     : "Pablo API ",
              address      : "Theatrito Kolon",
              addressFmt   : "Teatro Colón",
              latitude     : 1.234445,
              longitude    : 2.444234,
            },
            {
              _id          : 2,
              userName     : "Pablo API",
              address      : "Casa de color rosa con el presi adentro",
              addressFmt   : "Casa Rosada",
              latitude     : 1.525423,
              longitude    : 2.22445,
            },
            {
              _id          : 3,
              userName     : "Pablo API",
              address      : "¿Como se hace Dependencia de Injeccciones?",
              addressFmt   : "Utilizando servicios @Injectable",
              latitude     : 1.525423,
              longitude    : 2.22445,
            }

          ]

      return places
  }
}
