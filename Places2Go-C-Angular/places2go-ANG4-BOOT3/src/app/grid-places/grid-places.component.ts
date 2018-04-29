import { Component, OnInit } from '@angular/core';
import { Place } from '../services/place'
import { ViewPlaceComponent } from './view-place/view-place.component';
import { BackendApiService } from '../services/backend-api.service'

@Component({
  selector: 'app-grid-places',
  providers: [ BackendApiService, ViewPlaceComponent ],
  templateUrl: './grid-places.component.html',
  styleUrls:  ['./grid-places.component.css']
})
export class GridPlacesComponent implements OnInit {

  constructor(private backendApiService : BackendApiService,
              public detailView : ViewPlaceComponent) { }

  places : Place[] = [];

    ngOnInit() {
      this.getPlaces();
    }

    getPlaces() {

      this.backendApiService.getPlaces()
          .then( response => { this.places = response } )
          .catch( reason => { console.log("ERROR PROMISER BY " + reason)}) ;
      
          // this.places = this.backendApiService.getPlacesHard()

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
        

  viewPlace(place : Place) {
      this.detailView.setPlace(place);
  }
}
