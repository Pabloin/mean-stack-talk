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


#### Opcion B: Bootstrap v3.3.7 desde NPM

(Si se hizo el paso anterior.... revertirlo borrando el CDN del index.html)

Rrequiere editar el **.angular-cli.json** para incluir los componentes estáticos en el empaquetado

```sh
npm install bootstrap@3 jquery --save
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
//  { path : '',              component :  HomeComponent },
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

