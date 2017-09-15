/**
 * app_step_003.js
 * El servidor web con una API REST mas simple
 *    Agrega la conección a la base de datos.
 *
 * $ node app_step_003.js
 * http://localhost:3000/places
 *
 * see:
 *   - EL server se connect despues de la base de datos
 *   - Para probarlo hay que utilizar el "postman"
 *   - Me falta probar el POST
 *   - Utilizar otra base de datos (v03)
 */
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use('/', express.static(__dirname + '/public'));

// Add headers for CORS: si los datos no pertenecer al mismo dominio
app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,charset,content-type');
	  res.setHeader('Content-Type', 'application/json; charset=utf-8');

    next();
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/places2go');
//mongoose.connect('mongodb://54.68.83.6:27017/places2go');

var db = mongoose.connection;
mongoose.Promise = global.Promise;

// Google Maps API Client
var googleMapsClient = require('@google/maps').createClient({
    key : process.env.GOOGLE_MAPS_API_KEY
});


// Models
var Place = require('./place.model.js');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

   console.log('#001: Connected to MongoDB');


   /**
    * GET /places
    */
   app.get('/places', function(req, res) {

     Place.find({}, function(err, docs) {
       if(err) return console.error(err);
       res.json(docs);
     });
   });


   /**
    * POST /places
    */
   app.post('/places', function(req, res) {

     console.log("POST /places " + JSON.stringify(req.body));

     var obj = new Place({
         address    : req.body.address,
         addressFmt : req.body.addressFmt,
         latitude   : req.body.latitude,
         longitude  : req.body.longitude,
     });

     console.log("POST lat, long:: ["+obj.latitude +","+obj.longitude+"]");

     obj.save(function(err, obj) {
       if(err) return console.error(err);
       res.status(200).json(obj);
     });
   });


   /**
    * DELETE by id
    */
   app.delete('/places/:id', function(req, res) {

     var _id = req.params._id;

     /*
     Place.findOneAndRemove({_id: req.params.id}, function(err) {
       if(err) return console.error(err);
       res.sendStatus(200);
     });
     */

     Place.findOne({_id: req.params.id}, function(err, doc) {
       if(err) return console.error(err);

       console.log("DELETE /places/:id" + " borrado logico " + JSON.stringify(doc) )

       res.sendStatus(200);
     });


   });



   /**
    * GOOGLE MAPS API Geocode
    */
   app.get('/geocode/:address', function (req, res) {

     console.log("GET /geocode/:address ", req)
     var address = req.params.address;

     googleMapsClient.geocode({
         address: address
       }, (err, response) => {

         if (!err) {
            res.send(response);
         }
       });
   });



   app.listen(3000, function () {
     console.log('#002: Places2go listening on port 3000!');
   });


});


console.log("#000: Places2go: Contexto ", process.env.GOOGLE_MAPS_API_KEY);
console.log("#003: Places2go: Iniciando la API REST ....");
console.log("Look it at http://localhost:3000/places ..... | other AWS Version probably in http://54.68.83.6:3000/places ....");




module.exports = app
