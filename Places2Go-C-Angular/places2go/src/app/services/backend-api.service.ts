import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Place } from './place.module';

const API_REST_UB2 = 'http://54.68.83.6:3000';    // Ubuntu2
const API_REST_U16 = 'http://54.70.170.17:3000';  // Ubuntu 16
const API_REST_MAC = 'http://localhost:3000';     // PC local

const API_REST     = API_REST_UB2;     // PC local

@Injectable()
export class BackendApiService {

  constructor(private http : Http) { }

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
   * POST /places
   */
  savePlace(place : Place) : Promise<any> {

    // console.log("savePlace" + JSON.stringify(place));

    return this.http.post(API_REST+'/places', place)
       .toPromise()
       .then(response => console.log("respuesta" + response) )
       .catch(reason  => console.log(reason) );
  }


  /**
   * DELETE /places/:id
   */
  deletePlace(place) : Promise<any> {

    return this.http.delete(API_REST+"/places/"+place._id)
        .toPromise()
        .then()
        .catch(reason => console.log(reason) );
  }


  /**
   * GET /geocode/:addres
   * Api de Google Map
   */
  getGeocode(address : string) : Promise<Place> {

    return this.http.get(API_REST+'/geocode/'+address)
        .toPromise()
        .then(response => this.jsonGoogle2Place(address, response.json()) )
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

  private jsonGoogle2Place(address, jsonGoogle) : Place {

    let place = new Place();

    place.address     = address;
    place.addressFmt  = jsonGoogle.json.results[0].formatted_address;
    place.latitude    = jsonGoogle.json.results[0].geometry.location.lat;
    place.longitude   = jsonGoogle.json.results[0].geometry.location.lng;

    // console.log("jsonGoogle2Place("+jsonGoogle+") " + place.address);

    return place;
  }

}
