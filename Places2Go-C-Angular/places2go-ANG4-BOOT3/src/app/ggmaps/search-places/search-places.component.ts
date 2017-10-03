import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../../services/backend-api.service'
import { Place } from '../../services/place'

@Component({
  selector: 'app-search-places',
  providers: [ BackendApiService ],
  templateUrl: './search-places.component.html',
  styleUrls: ['./search-places.component.css']
})
export class SearchPlacesComponent implements OnInit {

  constructor(private backendApiService:BackendApiService) { }

  place2search : string;
  place : Place;
  msgSave : string;
  ngOnInit() {
  }

  getGeocode() {
    this.backendApiService.getGeocode(this.place2search)
      .then( place => {
        this.place = place;
        this.msgSave = "";
      });
  }
    
  savePlace() {
    this.backendApiService.savePlace(this.place)
        .then( () => { 
            this.msgSave = " => '"+this.place2search+"' fué grabado en la base."
            console.log("Place SAVED "); 
        } );
  }

}
