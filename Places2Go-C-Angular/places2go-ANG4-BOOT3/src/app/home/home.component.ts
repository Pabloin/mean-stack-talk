import { Component, OnInit } from '@angular/core';
import { Place } from '../services/place'
import { BackendApiService } from '../services/backend-api.service'

@Component({
  selector: 'app-home',
  providers: [ BackendApiService ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // constructor() { }
  constructor(private backendApiService : BackendApiService) { }

  places : Place[];

  ngOnInit() {
    this.getPlaces();
  }

  getPlaces() {

    // this.places = this.backendApiService.getPlacesHard()

    this.backendApiService.getPlaces()
       .then( response => { this.places = response } )
       .catch( reason => { console.log("ERROR PROMISER BY " + reason)}) ;

    /*
    this.places = [
      
            {
              _id          : 1,
              userName     : "Pablo",
              address      : "Theatrito Kolon",
              addressFmt   : "Teatro Colón",
              latitude     : 1.234445,
              longitude    : 2.444234,
            },
            {
              _id          : 1,
              userName     : "Pablo",
              address      : "Casa de color rosa con el presi adentro",
              addressFmt   : "Casa Rosada",
              latitude     : 1.525423,
              longitude    : 2.22445,
            }


          ]
          */
  }

  /**
   * Baja Ficticia para cuidar el set de datos
   */
  deletePlace(place : Place) {
    
      console.log("home::deletePlace "+JSON.stringify(place))

      var filtrados = this.places.filter( (item) => {
            if (item != place) {
                return item;
            }
      });

      this.backendApiService.deletePlace(place)
          .then( () => {  this.places = filtrados; }  )
          .catch( reason => { console.log("ERROR PROMISER BY " + reason)});
    }
    

}