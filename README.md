# 2017-09-05 Code Labs sobre MEAN STACK: PARTE I


## 1. Introduction

### 1.1. Links y Resources

- https://github.com/Pabloin
- [Place2Go]
- [Place2Go Api]
- [Place2Go BD]
- https://hub.docker.com/u/pabloezequiel


### 1.2. Clonamos el repo de GitHub 

- En el escritorio creamos una carpeta "mean"
- Clonamos el repo **mean-stack-talk** de https://github.com/Pabloin

```sh
$ cd Escritorio
$ mkdir mean
$ cd mean
$ git clone https://github.com/Pabloin/mean-stack-talk.git
$ cd mean-stack-talk
$ ls -la
```

### 1.3. Software Visual Studio Code

- [Visual Studio Code](https://code.visualstudio.com) 

Abrimos la carpeta "mean/mean-stack-talk" en el Visual Studio Code (Si no está, instalamos el .deb)

### 1.4. Software Robomongo

- [Robomongo](https://robomongo.org)

```sh
$ cd ~/Descargas
$ tar -zxvf robo3t-1.1.1-linux-x86_64-c93c6b0.tar.gz 
$ cd robo3t-1.1.1-linux-x86_64-c93c6b0/ 
$ cd bin 
$ ./robo3t
```
Dejamos el robo3t abierto


## 2. MongoDB

### 2.1. MongoDB instalado en AWS

**Objetivos**:
- Utilizar MongoDB sin instalarla localmente aún
- Conectar Robomongo a MongoDB en AWS
- Query sobre elementos geo referenciados 
    - Base Restaurants
    - Base Place2Go (Torre BBVA)
- Insert sobre una base que no existe


### 2.1.1. Conexion Robomongo a MongoDB en AWS

Desde Robomongo **Create**:

| Attr | Val |
| ------ | ------ |
| Name | "Place2Go AWS" |
| Address | [IP AWS](#data) |
| Port | 27017 |


### 2.1.2. Query Simples desde Robomongo


```javascript
// Recupera todos los lugares de la colección
db.getCollection('places').find({})
```

por las dudas: antes de los ejercicios: backup de los datos de la base

```sh
$ cd /tmp
$ mkdir jsonDataPlaces2Go
$ cd jsonDataPlaces2Go
$ mongoexport -d places2go -c places -o places.json
$ ls -la
```

Ejercicios:

```javascript
// Recuperar todos los lugares de la colección con nombre "Torre"
// db.getCollection('places').find({})

// QUERY ----
// db.getCollection('places').find({ address :  "florida"})
// db.getCollection('places').find({ address :  "river plate"})
// db.getCollection('places').find({ address :  "river"})  
// db.getCollection('places').find({ address :       { $regex : "shopping"}    })  
// db.getCollection('places').findOne({ address :    { $regex : "shopping"}    })  
// db.getCollection('places').find({ address : { $regex : "torre"}  }) 
// db.getCollection('places').find({ address : { $regex : "torre"}  }).forEach(printjson)
// db.getCollection('places').find({ address : { $regex : "torre"}  },  {_id:false}).forEach(print)

/*
var torreBBVA = [ -58.3700828,  -34.597803  ];

db.places.find({
     loc:
       { $near : {
            $geometry: { type: "Point",  coordinates: torreBBVA },
            $maxDistance: 3500
          }
       }
   })
 */

// DELETE --- 
// db.getCollection('places').find({ address : { $regex : "panama" } })
// db.getCollection('places').deleteOne({ address : { $regex : "panama" } })
```

Insert sobre una base que no existe, archivo [02 Sin Equema](https://github.com/Pabloin/mean-stack-talk/blob/master/Places2Go-A-MongoDB/02%20Sin%20Equema.js)


### 2.1.3. Query Complejos desde Robomongo

Seguimos al [MongoDB Geospatial Tutorial](https://docs.mongodb.com/manual/tutorial/geospatial-tutorial/) que utiliza una base de datos de Restaurantes y Vecindarios para realizar consulta Geoespaciales 


**Demo**: Creamos y ejecutamos lo siguientes en la instancia EC2 y luego en cada linux

**Step 01:** Download json data

```sh
$ cd /tmp/
$ mkdir jsonGeodata
$ cd jsonGeodata

$ wget -O neighborhoods.json https://raw.githubusercontent.com/mongodb/docs-assets/geospatial/neighborhoods.json
$ wget -O restaurants.json  https://raw.githubusercontent.com/mongodb/docs-assets/geospatial/restaurants.json

$ ls -la
```


**Step 02:** Import data en MongoDB
```sh
$ mongoimport -d mongoExample -c restaurants --file restaurants.json
$ mongoimport -d mongoExample -c neighborhoods --file neighborhoods.json
```


**Step 03:** Create Geo Index
```sh
db.neighborhoods.createIndex( { geometry : '2dsphere' } );
db.restaurants.createIndex(   { location : '2dsphere'  } );
db.neighborhoods.findOne();
db.restaurants.findOne();
```


**Step 04:** Query Sorted with $nearSphere
```sh
db.restaurants.find({    
    location : {
        $nearSphere : {
            $geometry : {
                    type : "Point",
                    coordinates : [ -73.93414657, 40.82302903 ]
             },
             $maxDistance : 400
        }
    }   
}).count();
```

**Step 05:** Intersections: Restaurants in the Neighborhoods

```sh
var neighborhood = db.neighborhoods.findOne( { 
   geometry: { 
      $geoIntersects: { 
           $geometry: { 
            type: "Point", 
            coordinates: [ -73.93414657, 40.82302903 ]
            } 
      } 
 } 
} )
db.restaurants.find( { 
  location: 
   { $geoWithin:
     { $geometry: neighborhood.geometry } 
   } 
} ).count()
```


##### Links de la sección 2.1
- [MongoDB Geospatial Tutorial](https://docs.mongodb.com/manual/tutorial/geospatial-tutorial/)
- [MongoDB GeoJson Objects](https://docs.mongodb.com/manual/tutorial/query-a-2dsphere-index/#intersections-of-geojson-objects)
- [Búsquedas en MongoDB](http://www.notodocodigo.com/introduccion-a-mongodb/busquedas-en-mongodb)
  



### 2.2. MongoDB instalado en Linux local

Basado en el tuorial oficial [Install Mongo DB on ubuntu](https://docs.mongodb.com/master/tutorial/install-mongodb-on-ubuntu/)
Los linux son ubuntu 16

```sh
$ lsb_release -a
$ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
$ echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
$ sudo apt-get update
$ sudo apt-get install -y mongodb-org
$ sudo service mongod start
$ tail -f /var/log/mongodb/mongod.log 
```

otros comandos de mongod

```sh
$ sudo service mongod stop
$ sudo service mongod restart
$ cat /etc/mongod.conf

# Otra forma de levantar mongodb
# $ mongod --dbpath /usr/local/var/data/db
```

### 2.3. MongoDB instalado en Linux local desde un Docker

En las imágenes linux tenemos instalado docker, con lo cual una de las formas más sencillas de poder utilizar MongoDB es a través de la instalación de una imagen docker:

Podemos crearnos nuestra propia imagen y publicarla en una docker registry como [Docker Hub](https://hub.docker.com/)

En nuestro caso utilizaremos la imagen MongoDB de la charla de Mean Stack, que se encuentra [publicada en Docker hub](https://hub.docker.com/r/pabloezequiel/my_mongodb/) 


### 2.3.1 Un poco de Docker ... repaso

**Error**: Cannot connect to the Docker daemon. Is the docker daemon?

Docker esta instalado pero no running:

```sh
$ sudo usermod -aG docker $(whoami)
¢ sudo service docker stop
$ sudo nohup docker daemon -H tcp://0.0.0.0:2375 -H unix:///var/run/docker.sock &
$ sudo docker info
$ sudo usermod -aG docker ninja
```

tomado de [este link](https://www.upcloud.com/support/how-to-configure-docker-swarm)


**Comandos docker utiles:**

Bajo la imagen y la borro ... 

```sh
$ sudo docker pull pabloezequiel/my_mongodb:1.0.0
$ sudo docker images
¢ sudo docker rmi -f 7e2284a4b583
```

Bajo la imagen, la ejecuco, la paro, la ejecuto de nuevo... consulto los logs:

```sh
$ sudo docker pull pabloezequiel/my_mongodb:1.0.0
$ sudo docker run -p 27017:27017 -i -t pabloezequiel/my_mongodb:1.0.0 &
$ sudo docker ps -l
$ sudo docker ps -a
$ sudo docker rm ced9cd2512c2
$ sudo docker run -p 27017:27017 -i -t pabloezequiel/my_mongodb:1.0.0 &
$ sudo docker ps  -l
$ sudo docker logs 6b0ace04738b -f
```

##### Links de la sección 2.3
- [Docker Commands Resumen](https://medium.com/statuscode/dockercheatsheet-9730ce03630d)




## 3. Node.JS y Express

### 3.1. Instalar Node.JS y NPM

Si instanalmos NodeJS desde los repo, nos va a dar la version estable v4.2.6
NodeJS esta por su version 8.4.0 para instanalarla [Seguimos la Guía] (http://www.vozidea.com/como-instalar-node-js-en-ubuntu-o-debian)

Nota: la opción **-y** es para que la instalación no sea interactiva

```sh
$ sudo apt-get -y --purge remove node
$ sudo apt-get -y --purge remove nodejs
$ sudo apt-get -y install npm

$ curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
$ sudo apt-get -y install nodejs

$ sudo apt-get -y install build-essential
$ node --version
$ npm --version
```

### 3.2. Creamos un proyecto nodeJS from scratch

Con NodeJS y NPM instalado, creamos un proyecto from scratch con **npm init** que nos generara el **package.json**

```sh
$ cd ~/Escritorio/mean/mean-stack-talk/Places2Go-B-NodeJS
$ mkdir helloNodeJS
$ cd helloNodeJS
$ npm init
$ cat package.json
```

agergamos unas dependecias

```sh
$ npm install mongoose --save
$ npm install express --save
$ npm install body-parser --save --save-dev
$ ls -la
$ cat package.json
```

agergamos aplicación **hello**

en un archivo nuevo **app.js** copiamos:

```javascript
var express = require('express')
var app = express()

/**
* GET /hello
*/
app.get('/hello', function(req, res) {
    res.send("Hello World!")
})

app.listen(3500, function () {
    console.log('#001: Hello-NodeJS listening on port 3500!');
})
```

Ejecutamos la app con:

```sh
$ node app.js
```

Que escucha en (http://localhost:3500/hello)

### 3.3. Levantar el proyecto sin API de Google 



### 3.3. Levantar el proyecto con API de Google 

Se utilizara




## 4. Angular



### Data

- IP AWS 54.68.83.6






### Licence

MIT




[Visual Studio Code]: <https://code.visualstudio.com>
[Robomongo]: <https://robomongo.org>
[Place2Go]: <http://54.68.83.6:4200>
[Place2Go Api]: <http://54.68.83.6:3000>
[Place2Go BD]: <54.68.83.6:27017>
