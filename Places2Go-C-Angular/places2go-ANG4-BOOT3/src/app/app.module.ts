import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

import { RouterModule } from '@angular/router';
import { DrawQueriesComponent } from './ggmaps/draw-queries/draw-queries.component';
import { SearchPlacesComponent } from './ggmaps/search-places/search-places.component';


import { AgmCoreModule } from '@agm/core';
import { GridPlacesComponent } from './grid-places/grid-places.component';
import { ViewPlaceComponent } from './grid-places/view-place/view-place.component';

export const routing = RouterModule.forRoot(
  [
    { path : '',              component :  HomeComponent },
    { path : 'home',          component :  HomeComponent  },
    { path : 'about',         component :  AboutComponent },
    { path : 'grid-places',   component :  GridPlacesComponent },
    { path : 'searchPlaces',  component :  SearchPlacesComponent },
    { path : 'drawQueries',   component :  DrawQueriesComponent }
  ]
);

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    HomeComponent,
    DrawQueriesComponent,
    SearchPlacesComponent,
    GridPlacesComponent,
    ViewPlaceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey : 'AIzaSyA77V7bNjGDIIFvTWghwl1BhQro1I2zv_w',
    })  
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
