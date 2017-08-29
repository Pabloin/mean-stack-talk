import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GridPlacesComponent } from './grid-places/grid-places.component';
import { AboutComponent } from './about/about.component';

import { DrawQueriesComponent } from './ggmaps/draw-queries/draw-queries.component';
import { SearchPlacesComponent } from './ggmaps/search-places/search-places.component';
import { ViewPlaceComponent }   from './grid-places/view-place/view-place.component';


export const routing = RouterModule.forRoot(
  [
//    { path : '',              component :  HomeComponent },
    { path : '',              component :  GridPlacesComponent },
    { path : 'home',          component :  HomeComponent },
    { path : 'grid-places',   component :  GridPlacesComponent },
    { path : 'drawQueries',   component :  DrawQueriesComponent },
    { path : 'searchPlaces',  component :  SearchPlacesComponent },
    { path : 'about',         component :  AboutComponent }
  ]
);
