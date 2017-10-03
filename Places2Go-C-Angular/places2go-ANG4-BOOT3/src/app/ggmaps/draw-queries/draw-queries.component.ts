import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-draw-queries',
  templateUrl: './draw-queries.component.html',
  styleUrls: ['./draw-queries.component.css']
})
export class DrawQueriesComponent implements OnInit {

  constructor() { }

  title: string = 'Mi primer Google Maps';
  lat: number = 51.678418;
  lng: number = 7.809007;

  ngOnInit() {
  }

}
