import { Component, Input } from '@angular/core';
import { Place} from '../../services/place';

@Component({
  selector: 'app-view-place',
  templateUrl: './view-place.component.html',
  styleUrls: ['./view-place.component.css']
})
export class ViewPlaceComponent {

  @Input()  place : Place;

  constructor() { }

   setPlace(nuevoPlace : Place) {
  // console.log("ViewPlaceComponent.setPlace("+JSON.stringify(nuevoPlace)+")");
     this.place = nuevoPlace;
   }

  close() {
    console.log("ViewPlaceComponent.close()");
  }

}
