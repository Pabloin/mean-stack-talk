import { Component, OnInit } from '@angular/core';
import { Place } from '../services/place'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  places : Place[];

  ngOnInit() {

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
  }

}


