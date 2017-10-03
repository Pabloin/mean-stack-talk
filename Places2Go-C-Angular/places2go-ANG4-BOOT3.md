# 2017-09-29 Code Labs sobre MEAN STACK: PARTE I

## Step 01: Install angular cli


```sh
$ sudo npm install -g @angular/cli

$ ng new places2go-ANG4-BOOT3
$ # ng new place2go-v1 --style scss

$ cd places2go-ANG4-BOOT3

$ ng serve --open
```

**nota:**   si lo ejecutamos de una instancia EC2 se usa "ng serve --host 0.0.0.0 --port 4200 "


## Step 02: Angular Power: Two Way Binging [()] - Interpolation {{}} - events()

**Tipos de binging**
- One-way from data source  to view target  (Interpolacion {{}} y Property Atributos [target]="expression" )
- One-way from view target  to data source  Eventos (target)="statement"
- Two-way binding: Esta muy bueno: en ambos sentidos  [(target)]="expression"

**Importante**: Para activarlo, hay que importar Forms, sino da el error "Can't bind to 'ngModel' since it isn't a known property of 'input'. "

Agregamos: **import { FormsModule } from '@angular/forms';**  y import de **FormsModule** en **app.module.ts**

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Luego, en el HTML ya podemos hacer:

```html
    <input [(ngModel)]="title"  (click)="doLogTitle()" (keyup.enter)="doLogTitle()">
    <br>
    Welcome to {{title}}!
```

Que genera el Two way binding

[Commit asociado a los distintos tipos de binding]( ...)

**Resources**

- [Video Two Way Binding](https://www.youtube.com/watch?v=WjcL09xgo3o)
- [Binding en Tutorial Oficial ](https://angular.io/guide/template-syntax#binding-syntax-an-overview)


#### Step 03: Bootstrap install

Instalar boostrap en angular se puede hacer de tres formas principales, que están bien explicadas en post de medium [Using Bootstrap with Angular](https://medium.com/codingthesmartway-com-blog/using-bootstrap-with-angular-c83c3cee3f4a)

Las tres alternativas son:
- a) Por CDN, o sea se utiliza bootstrap y jquery desde Internet sin instalarlo en nuestro proyecto. 
- b) Desde NPM, o sea, se descarga como dependencia y se agrega
- c) A través de una librería wrapper (Para Bootstrap4)

#### Opcion A: Bootstrap v3.3.7 desde CDN

Bootstrap3 es la versión estable, se puede instalar por CDN o por NPM. Link de [un buen post](https://medium.com/codingthesmartway-com-blog/using-bootstrap-with-angular-c83c3cee3f4a) sobre esta instalación de boostrap

Simplemente agregamos en el **index.html** las referencias de **bootstrap** y **jquery** por CDN, aca es bootsrap4 pero tambien es igual para bootstrap3 **IMPORTANTE** el jQuey tiene que esta primero... sino no funciona... 

```html
<!-- https code.jquery.com -->
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>

<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
```


#### Opcion B: Bootstrap v3.3.7 desde NPM (y font-awesome )

(Si se hizo el paso anterior.... revertirlo borrando el CDN del index.html)

Rrequiere editar el **.angular-cli.json** para incluir los componentes estáticos en el empaquetado

```sh
npm install bootstrap@3 jquery --save
npm install font-awesome --save
```

Agregamos los estilos: Hay dos maneras, podemos editar el **styles.css**

```css
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "~font-awesome/css/font-awesome.css";
```

Podemos edtar el  **.angular-cli.json** no olvidader que jQuery debe estar primero en el orden:

```javascript
  "styles": [
    "../node_modules/bootstrap/dist/css/bootstrap.min.css"
    "../node_modules/font-awesome/css/font-awesome.min.css",
    "styles.css",
  ],
  "scripts": [
    "../node_modules/jquery/dist/jquery.min.js",
    "../node_modules/bootstrap/dist/js/bootstrap.min.js"
  ],
```

## Step 04: NavBar de Bootstrap3 con Jquery, y Generacion de componentes con angular-cli

Generamos un  la NavBAR con

```sh
 ng generate component nav
```

la incluimos en el **app.component.html** en la primera linea

```html
<app-nav></app-nav>
```

Tomamos una NavBar de [https://getbootstrap.com/docs/3.3/components/#navbar] y lo copiamos dentro de **nav.component.html**

```html
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Brand</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
        <li><a href="#">Link</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">One more separated link</a></li>
          </ul>
        </li>
      </ul>
      <form class="navbar-form navbar-left">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">Link</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
```

Observamos que además del estilo bootstrap de la NavBar, también están activo los dropdown, lo cual significa que jQuery fue correctamente integrado a Angular4


---
# PART II: Place2Go Start the development!

## Step 05: Ponemos la NavBar de Places2Go


TBD .... Asumo que serán ruteadores home y about ...

Reemplazamos en **nav.component.html** la NavBar por la de Places2Go que tiene a su vez la navegación interna

```html
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">::Places2Go::</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a href="/home">Home <span class="sr-only">(current)</span></a></li>
  <!--  <li class="active"><a [routerLink]="['/home']">Home <span class="sr-only">(current)</span></a></li>  -->     
		
		<li><a href="/grid-places">All Places</a></li>
   <!-- <li><a [routerLink]="['/grid-places']">All Places</a></li> -->
			
        <li class="dropdown">
          <a href="#" class="dropdown-toggle"
		              data-toggle="dropdown"
					  role="button" 
					  aria-haspopup="true" 
					  aria-expanded="false">Maps <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="/searchPlaces">Search Places</a></li>
            <li><a href="/drawQueries" >Draw queries</a></li>
            <li role="separator" class="divider"></li>
	
            <li><a href="/grid-places">All Places   </a></li>
       <!-- <li><a [routerLink]="['/grid-places']">All Places</a></li> -->

          </ul>
        </li>
 
         <li><a href="/about">About</a></li>
    <!-- <li><a [routerLink]="['/about']">About</a></li> -->
		 
      </ul>
  

    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
```

## Step 06: ROUTERS (i): Generamos los componentes Home y About 

Generamos los compoentes **home** y **about** con **ng angular-cli**. Observar que usamos también la versión resumida

```sh
 ng generate component home
 ng g c about
```

Luego: contenido de **home.component.html**

```html
<div class="container">

  <p>
    Where would you like to go?
  </p>

</div>

<!---
<app-search-places></app-search-places>
-->
```

contenido de **about.component.html**

```html
<div class="container">

<h3>Place2Go</h3>

<p>Angular 4 Full Stack Demo </p>

<ul>
  <li>El proyecto aplica el <b>Mean Stack</b></li>
  <li>Front-end generado con <b>Angular CLI</b></li>
  <li><a href="http://localhost:3000/">Places2Go API REST</a>: Api del proyrcto</li>
</ul>

<p>Tecnologias aplicadas en el <b>Front-end</b></p>

<ul>
  <li><b>Angular 4:</b> Frontend framework </li>
  <li><b>Bootstrap 3:</b> Estilos y Layout</li>
  <li><b>Font Awesome:</b> Iconos</li>
  <li><b>Angular2 Google Maps:</b> Mapas en el frontend</li>
</ul>

<p>Tecnologias aplicadas en el <b>Backend-end</b></p>

<ul>
  <li><b>Express.js:</b> Backend</li>
  <li><b>Node.js:</b> Backend</li>
  <li><b>Mongoose.js:</b> Acceso a la base MongoDB</li>
  <li><b>MongoDB:</b> database</li>
  <li><b>@google/maps:</b> Acceso a la api de Google desde NodeJS</li>
</ul>
</div>

```


y en **app.component.html** modificamos para que sea la **Home de la app Places2Go**

```html
    <app-nav></app-nav>
    <br/>
    <app-home></app-home> 
```


## Step 06: ROUTERS (ii): Generamos el Router para los componentes Home y About 

Agergamos la definicion del **router** en **app.moduler.ts**

```javascript

import { RouterModule } from '@angular/router';

export const routing = RouterModule.forRoot(
  [
    { path : '',              component :  HomeComponent },
    { path : 'home',          component :  HomeComponent  },
    { path : 'about',         component :  AboutComponent }
  ]
);


/*
Agregar  "routing" en "imports":

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
*/
```

y en **app.component.html** agregamos el tag para habilitar el ruteo

```html
<!-- 
    <app-home></app-home> 
-->

<router-outlet></router-outlet>
```


## Step 07: DATOS - Listado de places - Mock (i) HTML y Modelo

Agregamos una **clase** y un **servicio** para mostrar datos en un listado

```sh
ng generate class services/place
```

Le agregamos código de mock de datos

```javascript
export class Place {

  _id          : any;
  userName     : string;
  address      : string;
  addressFmt   : string;
  latitude     : number;
  longitude    : number;

}
```

Modifiamos **home.component.ts** para tener una **places** poblada con una coleccion de datos 

```javascript
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
```

En la **home.component.html** agregamos el HTML que tiene código que levanta la colección

```html
<!-- inicio container -->
<div class="container">
  
  
    <br/>
  
    <div class="card">
  
      <div class="card-header">
        Featured
      </div>
  
      <div class="card-block">
  
          <!--  TABLE INICIO -->
          <table class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Address</th>
                <th>Address Fountd</th>
                <th>latitude</th>
                <th>longitude</th>
              </tr>
            </thead>
            <tbody>
              
              
                  <tr *ngFor="let place of places">
                      <th scope="row">1</th>
                      <td>{{place.address}}</td>
                      <td>{{place.addressFmt}}</td>
                      <td>{{place.latitude}}</td>
                      <td>{{place.longitude}}</td>
                  </tr>
              
  
              <!-- <tr>
                <th scope="row">1</th>
                <td>theatro kolon</td>
                <td>Teatro Colón</td>
                <td>22,432423</td>
                <td>33,543441</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Caminito</td>
                <td>caminito</td>
                <td>22,112423</td>
                <td>33,245521</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Entre Rios</td>
                <td>Entre Rios</td>
                <td>322,22233</td>
                <td>322,32215</td>
              </tr> -->
              
            </tbody>
            </table>
  
          <!-- TABLE FIN -->
  
      </div>
  
    </div>
  
  
  </div>
```

## Step 07: DATOS - Listado de places - Mock (ii) Servicios, Inyeccion de Dependencias

Generamos una clase de servicio

```sh
ng generate service services/backend-api
```

La clase de servicio le agregamos el metodo que retorna datos **getPlacesHard()**. Observar que el servicio es @Injectable()

```javascript
import { Injectable } from '@angular/core';
import { Place } from './place'

@Injectable()
export class BackendApiService {

  constructor() { }

  getPlacesHard() : Place[] {

    let places = [
      
            {
              _id          : 1,
              userName     : "Pablo API ",
              address      : "Theatrito Kolon",
              addressFmt   : "Teatro Colón",
              latitude     : 1.234445,
              longitude    : 2.444234,
            },
            {
              _id          : 2,
              userName     : "Pablo API",
              address      : "Casa de color rosa con el presi adentro",
              addressFmt   : "Casa Rosada",
              latitude     : 1.525423,
              longitude    : 2.22445,
            },
            {
              _id          : 3,
              userName     : "Pablo API",
              address      : "¿Como se hace Dependencia de Injeccciones?",
              addressFmt   : "Utilizando servicios @Injectable",
              latitude     : 1.525423,
              longitude    : 2.22445,
            }

          ]

      return places
  }
}
```

Para agregar la dependecia de injecciones, debemos **@Injectable()** en **home.component.ts** debemos agregar:


```javascript
  
  import { BackendApiService } from '../services/backend-api.service'

  // constructor...
  providers: [BackendApiService],
  
  // constructor...
  constructor(private backendApiService : BackendApiService) { }
  
  
  this.places = this.backendApiService.getPlacesHard()
```

o sea, nos queda:

```javascript
import { Component, OnInit } from '@angular/core';
import { Place } from '../services/place'
import { BackendApiService } from '../services/backend-api.service'

@Component({
  selector: 'app-home',
  providers: [ BackendApiService ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // constructor() { }
  constructor(private backendApiService : BackendApiService) { }

  places : Place[];

  ngOnInit() {

    this.places = this.backendApiService.getPlacesHard()

    /*
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
          */
  }

}
```


Y se puede observar que los datos ahora son recuperados del mocke que está dentro del servicio y fué inyectado.
El próximo paso es recuperar los datos desde la API REST.

## Step 08: SERVICIOS REST - Consumo de Servicios REST y PROMISES

Primero verificamos que el servicio de API REST que vamos a consumir está levantado:

http://54.68.83.6:3000/places

Segunda: agregamos: **backend-api.service.js**  y en **app.module.ts**

```javascript
// Se agrega en app.module.ts el provider Http
import { HttpModule } from '@angular/http';

  imports: [
    ...
    HttpModule
    ...
  ],

```

Y en **backend-api.service.js** el **Http** core para consumir servicios:

```javascript
import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Place } from './place'

const API_REST_UB4 = 'http://54.68.83.6:3000';    // Ubuntu4
const API_REST_MAC = 'http://localhost:3000';     // PC local
const API_REST     = API_REST_UB4;     // PC local

@Injectable()
export class BackendApiService {

  // constructor() { }
  constructor(private http : Http) { }

  getPlacesHard() : Place[] {

    let places = [
      
            {
              _id          : 1,
              userName     : "Pablo API ",
              address      : "Theatrito Kolon",
              addressFmt   : "Teatro Colón",
              latitude     : 1.234445,
              longitude    : 2.444234,
            },
            {
              _id          : 2,
              userName     : "Pablo API",
              address      : "Casa de color rosa con el presi adentro",
              addressFmt   : "Casa Rosada",
              latitude     : 1.525423,
              longitude    : 2.22445,
            },
            {
              _id          : 3,
              userName     : "Pablo API",
              address      : "¿Como se hace Dependencia de Injeccciones?",
              addressFmt   : "Utilizando servicios @Injectable",
              latitude     : 1.525423,
              longitude    : 2.22445,
            }

          ]

      return places
  }

  /**
   * GET /places
   */
  getPlaces() : Promise<Place[]> {
    
        return this.http.get(API_REST+'/places')
           .toPromise()
           .then(response => response.json().map(this.jsonMongo2Place) )
           .catch(reason  => console.log(reason) );
      }


  /**
   * Adaptacion de los JSON segun su origen
   */
  private jsonMongo2Place(item, index) : Place {
    
          let place = new Place();
    
          place._id         = item._id;
          place.address     = item.address;
          place.addressFmt  = item.addressFmt;
          place.longitude   = item.loc.coordinates[0];
          place.latitude    = item.loc.coordinates[1];
    
          // console.log("jsonMongo2Place("+index+") " + place.address);
    
          return place
      }

}
```

Finalmente reemplazamos el metodo que se invoca en **home.component.ts** 

```javascript
    // this.places = this.backendApiService.getPlacesHard()

    this.backendApiService.getPlaces()
       .then( response => { this.places = response } )
       .catch( reason => { console.log("ERROR PROMISER BY " + reason)}) ;
```

La siguiente imagen muestra los datos recuperados desde AWS:

![Places2Go datos de AWS](https://raw.githubusercontent.com/Pabloin/Places2Go/master/Step08.png)

Con esto, tenemos los resultados del JSON publicado desde AWS en el front, y demostramos como es el consumo de una API rest con GET


## Step 09: SERVICIOS REST - Implementar toda la API de servicios :: POST y DELETE 

En **backend-api.service.js** agregamos un POST y DELETE


```javascript

  /**
   * POST /places
   */
  savePlace(place : Place) : Promise<any> {

    // console.log("savePlace" + JSON.stringify(place));

    return this.http.post(API_REST+'/places', place)
       .toPromise()
       .then(response => console.log("respuesta" + response) )
       .catch(reason  => console.log(reason) );
  }


  /**
   * DELETE /places/:id
   */
  deletePlace(place) : Promise<any> {

    return this.http.delete(API_REST+"/places/"+place._id)
        .toPromise()
        .then()
        .catch(reason => console.log(reason) );
  }

```


En **home.component.js** agregamos un POST y DELETE


```javascript


  /**
   * Baja Ficticia para cuidar el set de datos
   */
  deletePlace(place : Place) {
    
      console.log("home::deletePlace "+JSON.stringify(place))

      var filtrados = this.places.filter( (item) => {
            if (item != place) {
                return item;
            }
      });

      this.backendApiService.deletePlace(place)
          .then( () => {  this.places = filtrados; }  )
          .catch( reason => { console.log("ERROR PROMISER BY " + reason)});
  }


```

En el front html, agregamos el boton de borrar **home.component.html**. Observar que agregamos un **poco de Bootstrap** responsive para mostrar como se borran columnas cuando se achican las pantallas... 

```javascript

    <thead>
      <tr>
        <th>#</th>
        <th>Address</th>
        <th class="hidden-xs">Address Fountd</th>
        <th class="hidden-xs hidden-sm hidden-md">[ Lat, Lng ]</th>
        <th>Del</th>
      </tr>
    </thead>
    <tbody>

      
      <tr *ngFor="let place of places">
        <th scope="row">1</th>
        <td>{{place.address}}</td>
        <td class="hidden-xs">{{place.addressFmt}}</td>
        <td class="hidden-xs hidden-sm hidden-md"> <small>[ {{place.latitude}} , {{place.longitude}} ] </small></td>

        <td><button type="button" class="btn btn-link" 
                  (click)="deletePlace(place)"><span class="fa fa-trash-o fa-lg"></span> delete</button></td>
      </tr>
```

---
# PART III: Place2Go with Google MAPS

Agregamos la capacidad de Google Maps en el front end. Para eso utilizaremos la librerìa [Angular Google Maps (AGM)](https://angular-maps.com/). 


Realizaremos dos páginas:
- **drawQueries**: Que nos mostrará en un mapa, todos los lugares de la base de datos mongo
- **search-places**: Que ingresamos el nombre de un lugar, consulta en Google Maps la geo referenciación y lo muestra en el mapa

Comencemos 

```sh
ng g c ggmaps/draw-queries
ng g c ggmaps/search-places
```

que nos crea: (observar que también nos modifica **update src/app/app.module.ts** lo cual es bueno)

```sh
.
... 
├── app.module.ts   (...updated...)
│
├── ggmaps
├── draw-queries
│   ├── draw-queries.component.css
│   ├── draw-queries.component.html
│   ├── draw-queries.component.spec.ts
│   └── draw-queries.component.ts
└── search-places
    ├── search-places.component.css
    ├── search-places.component.html
    ├── search-places.component.spec.ts
    └── search-places.component.ts
```

Y hacemos primerlo el **draw-queries**

## Step 10: GOOGLE MAPS: Draw queries

Basado en [Doc oficial Angular Google Maps(AGM)](https://angular-maps.com/guides/getting-started/).

Instalamos Angular Google Maps

```sh
npm install @agm/core --save
```

Setup @NgModule en **src/app/app.module.ts** e importamos el **AgmCoreModule**. Ademas tenemos que agergar nuestra [API KEY de GOOGLE MAPS](https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key) que tenemos que generarnos

Entondes, agegamos en el **import** y en el **router** las nuevas pagingas

```javascript
import { AgmCoreModule } from '@agm/core';

export const routing = RouterModule.forRoot(
  [
    { path : '',              component :  HomeComponent },
    { path : 'home',          component :  HomeComponent  },
    { path : 'about',         component :  AboutComponent },
    { path : 'searchPlaces',  component :  SearchPlacesComponent },
    { path : 'drawQueries',   component :  DrawQueriesComponent }
  ]
);

....

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey : 'API_KEY',
    })  
  ],
```

En este punto nodes debería funcionar la navegacion desde el menu las páginas creadas **http://localhost:4300/searchPlaces** y **http://localhost:4300/drawQueries**


Ahora agergamos el codigo En **draw-queries.component.ts** 

```javascript
  title: string = 'Mi primer Google Maps';
  lat: number = 51.678418;
  lng: number = 7.809007;
```

En **draw-queries.component.css**:
```css
agm-map {
    height: 300px;
  }
```

En  **draw-queries.component.html**:

```html
<h1>{{ title }}</h1>

<!-- this creates a google map on the page with the given lat/lng from -->
<!-- the component as the initial center of the map: -->
<agm-map [latitude]="lat" [longitude]="lng">
  <agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>
</agm-map>
```

El resultado es:

![Places2Go primer mapa](https://raw.githubusercontent.com/Pabloin/Places2Go/master/Step10.png)


A continuación, mostramos los datos que existen en nuestra base de datos....

Modificamos **draw-queries.component.ts** para que utilize el servicio que recupera datos de la base: 

```javascript

```

y para que recupere el  **draw-queries.component.html** 

```html
<div class="container">
    
    <button type="button"
         (click)="getPlaces()"><span class="fa fa-map-marker"></span> Show Places
    </button>
    
    Length: {{places.length}}
    <br><br>



    <agm-map [latitude]="lat" 
            [longitude]="lng" 
                 [zoom]="zoom">

                 
        <agm-marker 
              *ngFor="let place of places"
              [latitude]="place.latitude"
              [longitude]="place.longitude"
              [title]="places.address"
              [markerDraggable]="draggable"
              >
            
              <agm-info-window>
                  <p>{{place.address}}</p>
                  <small> [ {{place.latitude}}, {{place.longitude}} ]</small>
                </agm-info-window>
  
        </agm-marker>

    </agm-map>


    <!-- 
    <agm-map [latitude]="lat" [longitude]="lng">
      <agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>
    </agm-map> 
    -->

</div>
```

Y el resultado queda como: 

![Places2Go Ubicaciones de la Base](https://raw.githubusercontent.com/Pabloin/Places2Go/master/Step12.png)


## Step 11: GOOGLE MAPS: Search Places con Acceso a la API GEO CODE DE Google

Agregamos los Google Maps, vemos que se modifico: (API, Modelo, Front)

```sh
$ git status
        modified:   search-places/search-places.component.css
        modified:   search-places/search-places.component.html
        modified:   search-places/search-places.component.ts
        modified:   ../services/backend-api.service.ts
```

Primermo en el backend de servicios: **services/backend-api.service.ts** que hable con GEO code

```javascript
  /**
   * GET /geocode/:addres
   * Api de Google Map
   */
  getGeocode(address : string) : Promise<any> {
    
      return this.http.get(API_REST+'/geocode/'+address)
          .toPromise()
          .then(response => this.jsonGoogle2Place(address, response.json()) )
          .catch(reason  => console.log(reason) );
  }

  private jsonGoogle2Place(address, jsonGoogle) : Place {

      let place = new Place();

      place.address     = address;
      place.addressFmt  = jsonGoogle.json.results[0].formatted_address;
      place.latitude    = jsonGoogle.json.results[0].geometry.location.lat;
      place.longitude   = jsonGoogle.json.results[0].geometry.location.lng;

      // console.log("jsonGoogle2Place("+jsonGoogle+") " + place.address);

      return place;
  }   
```

Segundo, el comoponente **search-places/search-places.component.ts** tiene que tomar los datos, de la API REST, para eso se le injecta el servicio de **BackendApiService**

```javascript
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


```

Tercero, queda modificar el front

CSS **search-places/search-places.component.css** 

```css
agm-map {
    height: 300px;
  }

```

Y el HTML **search-places/search-places.component.html**

```html
<div class="container">
    
    Place : <input type="text" [(ngModel)]="place2search" autocomplete="off" spellcheck="false" (keyup.enter)="getGeocode()">
    
    <button type="button"
      [disabled]="!place2search"
         (click)="getGeocode()"><span class="fa fa-search-plus"></span> Search
    </button>
    
    <button type="button"
         (click)="savePlace()"
           *ngIf="place"><span class="fa fa-floppy-o"></span> Save
    </button>          
    
    <br>Lugar a buscar : {{place2search}}
    
    <span *ngIf="place">
    
      <br>address input:    {{place.address}} <span class="text-primary" *ngIf="msgSave &&  place2search === place.address">{{msgSave}}</span>
      <br>address formated: {{place.addressFmt}} 
      <br>lat, lng: [ {{place.latitude}}, {{place.longitude}} ]
    
      <agm-map
           [latitude]="place.latitude"
          [longitude]="place.longitude"
               [zoom]="11">

          <agm-marker
              [latitude]="place.latitude"
              [longitude]="place.longitude"
              [markerDraggable]="draggable">

              <agm-info-window>
                <p>{{place.address}}</p>
                <small> [ {{place.latitude}}, {{place.longitude}} ]</small>
              </agm-info-window>

          </agm-marker>
      </agm-map>
    
    </span>
    
</div>
```

Vemos el buscador de lugar, que no solamente recupera  

![Places2Go Ubicaciones de la Base](https://raw.githubusercontent.com/Pabloin/Places2Go/master/Step14.png)







