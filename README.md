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
- Insert sobre una base que no existe
- Query sobre elementos geo referenciados 
    - Base Restaurants
    - Base Place2Go (Torre BBVA)


### 2.1.1. Conexion Robomongo a MongoDB en AWS

Desde Robomongo **Create**:

| Attr | Val |
| ------ | ------ |
| Name | "Place2Go AWS" |
| Address | [IP AWS](#data) |
| Port | 27017 |

Desde Robomongo **Query Simples**:


```javascript
// Recupera todos los lugares de la colección
db.getCollection('places').find({})
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
```

###### Links de la sección
- [MongoDB Geospatial Tutorial](https://docs.mongodb.com/manual/tutorial/geospatial-tutorial/)
- [MongoDB GeoJson Objects](https://docs.mongodb.com/manual/tutorial/query-a-2dsphere-index/#intersections-of-geojson-objects)
- [Búsquedas en MongoDB](http://www.notodocodigo.com/introduccion-a-mongodb/busquedas-en-mongodb)
[Búsquedas en MongoDB](http://www.notodocodigo.com/introduccion-a-mongodb/busquedas-en-mongodb)



### 2.2. MongoDB instalado en Linux local


### 2.3. MongoDB instalado en Linux local desde un Docker



### Data

- IP AWS 54.68.83.6






### Licence

MIT




[Visual Studio Code]: <https://code.visualstudio.com>
[Robomongo]: <https://robomongo.org>
[Place2Go]: <http://54.68.83.6:4200>
[Place2Go Api]: <http://54.68.83.6:3000>
[Place2Go BD]: <54.68.83.6:27017>
