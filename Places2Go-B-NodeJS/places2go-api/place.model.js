var mongoose = require('mongoose');

var placeSchema = mongoose.Schema({

  userName   : {type: String},
  address    : {type: String, required: true},
  addressFmt : {type: String},

  loc: {
    type: { type: String, default: "Point" },
    coordinates: []
  },

  date: {type: Date, required: true, default: Date.now}

});


// Alias
placeSchema.virtual('longitude').
  get(function()  { return this.loc.coordinates[0]; }).
  set(function(v) { this.loc.coordinates[0] = v     });

placeSchema.virtual('latitude').
  get(function()  { return this.loc.coordinates[1]; }).
  set(function(v) { this.loc.coordinates[1] = v     });


// Indice
placeSchema.index({ loc: '2dsphere' });


var Place = mongoose.model('Place', placeSchema);
module.exports = Place;
