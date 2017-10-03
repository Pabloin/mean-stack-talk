import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Place } from './place'

const API_REST_UB4 = 'http://54.68.83.6:3000';    // Ubuntu4
const API_REST_MAC = 'http://localhost:3000';     // PC local
const API_REST     = API_REST_UB4;     // PC local

@Injectable()
export class BackendApiService {

  // constructor() { }
  constructor(private http : Http) { }

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

  /**
   * GET /places
   */
  getPlaces() : Promise<Place[]> {
    
        return this.http.get(API_REST+'/places')
           .toPromise()
           .then(response => response.json().map(this.jsonMongo2Place) )
           .catch(reason  => console.log(reason) );
      }


  /**
   * Adaptacion de los JSON segun su origen
   */
  private jsonMongo2Place(item, index) : Place {
    
          let place = new Place();
    
          place._id         = item._id;
          place.address     = item.address;
          place.addressFmt  = item.addressFmt;
          place.longitude   = item.loc.coordinates[0];
          place.latitude    = item.loc.coordinates[1];
    
          // console.log("jsonMongo2Place("+index+") " + place.address);
    
          return place
      }

}
