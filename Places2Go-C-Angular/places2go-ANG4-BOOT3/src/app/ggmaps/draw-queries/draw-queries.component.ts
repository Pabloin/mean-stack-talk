import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../../services/backend-api.service'
import { Place } from '../../services/place'


@Component({
  selector: 'app-draw-queries',
  providers: [ BackendApiService ],
  templateUrl: './draw-queries.component.html',
  styleUrls: ['./draw-queries.component.css']
})
export class DrawQueriesComponent implements OnInit {

  constructor(private backendApiService:BackendApiService) { }

  places : Place[] = [];

  title: string = 'Mi primer Google Maps';
  lat: number = -34.5979391;
  lng: number = -58.3700249;
  
  zoom : number = 6;

  ngOnInit() {
  }

  getPlaces() {
    console.log("getPlaces() inicio .... ");
    this.backendApiService.getPlaces()
        .then(response => { this.places = response;
                            console.log("getPlaces() respuesta ... " + JSON.stringify(response));  
                          });
  }

}
