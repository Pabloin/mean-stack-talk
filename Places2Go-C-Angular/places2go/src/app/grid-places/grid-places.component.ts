import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';
import { Place } from '../services/place.module';

import { ViewPlaceComponent } from './view-place/view-place.component';

@Component({
  selector: 'app-grid-places',
  templateUrl: './grid-places.component.html',
  styleUrls: ['./grid-places.component.css'],
  providers: [ViewPlaceComponent]
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
  }

  /**
   * Baja Ficticia para cuidar el set de datos
   */
   deletePlace(place : Place) {

    var filtrados = this.places.filter( (item) => {
          if (item != place) {
              return item;
          }
    });

    this.backendApiService.deletePlace(place)
       .then( () => {  this.places = filtrados; }  )
       .catch( reason => { console.log("ERROR PROMISER BY " + reason)}) ;
  }


  viewPlace(place : Place) {
      this.detailView.setPlace(place);
  }



}
