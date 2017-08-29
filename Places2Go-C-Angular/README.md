Front en Angular, construido con Angular-cli

Aplicación de 0 a Estado 100:
- La aplicación no existe, la creo con Agnular cli
- Magia:
   - Le agrego bootstrap y jquery ...


$ ng new places2go

------
Edito en package.json
     Si quiero live relod:
    "start": "ng serve --port 4200 –live-reload-port 49153 --open ",


-----
Si quiero bootstrap:  

$ npm install --save bootstrap@4.0.0-alpha.6  jquery tether  font-awesome



"styles": [
  "../node_modules/bootstrap/dist/css/bootstrap.css",
  "../node_modules/font-awesome/css/font-awesome.css",
  "styles.css"
],
"scripts": [
  "../node_modules/jquery/dist/jquery.js",
  "../node_modules/tether/dist/js/tether.js",
  "../node_modules/bootstrap/dist/js/bootstrap.js"
],

---------------------

Crear un nuevo Servicio y publicarlo ...
ng g service services/testService --module=app.module
