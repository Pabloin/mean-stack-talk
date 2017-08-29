import { Component, Input } from '@angular/core';
import { Place} from '../../services/place.module';

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


  // @Input() message = { body: '11', type: '22' };
  // @Input() place : Place;


  // setPlace(place : Place) {
  //   console.log("ViewPlaceComponent.setPlace("+JSON.stringify(place)+")");
  //
  //     this.texto = place.address;
  //
  // // this.place = place;
  //     this.setMessage1("aaa", "nnnn", 4000);
  //
  // }


  // setMessage1(body, type, time = 3000) {
  //
  //     console.log("setMessage1(body="+body+", type="+type+", time="+time+")");
  //
  //     this.message.body = body;
  //     this.message.type = type;
  //     setTimeout(() => { this.message.body = ''; }, time);
  //   }
}
