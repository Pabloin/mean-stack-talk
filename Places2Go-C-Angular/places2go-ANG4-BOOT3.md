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


# Step 02: Angular Power: Two Way Binging [()] - Interpolation {{}} - events()

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


### Step 03: Bootstrap install

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


