import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';


import { AgmCoreModule } from 'angular2-google-maps/core';
import { BackendApiService } from './services/backend-api.service';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';
//import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GridPlacesComponent } from './grid-places/grid-places.component';
import { AboutComponent } from './about/about.component';
import { DrawQueriesComponent } from './ggmaps/draw-queries/draw-queries.component';
import { SearchPlacesComponent } from './ggmaps/search-places/search-places.component';
import { ViewPlaceComponent }   from './grid-places/view-place/view-place.component';


export const routing = RouterModule.forRoot(
  [
//    { path : '',              component :  HomeComponent },
    { path : '',              component :  HomeComponent },
    { path : 'home',          component :  HomeComponent },
    { path : 'grid-places',   component :  GridPlacesComponent },
    { path : 'drawQueries',   component :  DrawQueriesComponent },
    { path : 'searchPlaces',  component :  SearchPlacesComponent },
    { path : 'about',         component :  AboutComponent }
  ]
);



const googleMapsCore = AgmCoreModule.forRoot({
  apiKey : 'AIzaSyA77V7bNjGDIIFvTWghwl1BhQro1I2zv_w',
});



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GridPlacesComponent,
    AboutComponent,
    DrawQueriesComponent,
    SearchPlacesComponent,
    ViewPlaceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    googleMapsCore
  ],
  providers: [
    BackendApiService
    // ,
    // {provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
