import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../../services/backend-api.service';
import { Place } from '../../services/place.module';


@Component({
  selector: 'app-search-places',
  templateUrl: './search-places.component.html',
  styleUrls: ['./search-places.component.css']
})
export class SearchPlacesComponent implements OnInit {

  constructor(private backendApiService : BackendApiService ) { }

  place2search : string;

  place : Place;

  ngOnInit() {
  }

  getGeocode() {

    this.backendApiService.getGeocode(this.place2search)
       .then( place => this.place = place );

  }

  savePlace() {

    this.backendApiService.savePlace(this.place)
       .then( () => { console.log("Place SAVED "); } );
  }

}
