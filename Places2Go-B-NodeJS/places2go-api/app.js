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


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/places2go');

var db = mongoose.connection;
mongoose.Promise = global.Promise;

// Models
var Place = require('./place.model.js');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

   console.log('Connected to MongoDB');


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

     var obj = new Place({
         address   : req.body.address,
         latitude  : req.body.latitude,
         longitude : req.body.longitude,
     });

     obj.save(function(err, obj) {
       if(err) return console.error(err);
       res.status(200).json(obj);
     });
   });


   /**
    * DELETE by id
    */
   app.delete('/places/:id', function(req, res) {

     Place.findOneAndRemove({_id: req.params.id}, function(err) {
       if(err) return console.error(err);
       res.sendStatus(200);
     });
   });



   app.listen(3000, function () {
     console.log('Places2go listening on port 3000!');
   });


});



module.exports = app
