import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../../services/backend-api.service';
import { Place } from '../../services/place.module';

@Component({
  selector: 'app-draw-queries',
  templateUrl: './draw-queries.component.html',
  styleUrls: ['./draw-queries.component.css']
})
export class DrawQueriesComponent implements OnInit {

  constructor(private backendApiService : BackendApiService) { }

  places : Place[] = [];

  address     : string = "Capital Federal";
  latitude    : number =  -34.6036844;
  longitude   : number =  -58.3815591;
  zoom        : number = 6;

  ngOnInit() {
  }

  getPlaces() {

    console.log("getPlaces() inicio .... ");
    this.backendApiService.getPlaces()
       .then(
         response => {

           this.places = response;
           console.log("getPlaces() respuesta ... " + JSON.stringify(response));

         }
       );

  }


}
