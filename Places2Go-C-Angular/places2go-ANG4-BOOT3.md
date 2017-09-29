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