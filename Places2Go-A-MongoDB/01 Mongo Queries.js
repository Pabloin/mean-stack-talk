// db.getCollection('places').createIndex( { loc : "2dsphere" } )

db.getCollection('places').find({ address : { $regex : "Torre" }})

var torreBBVA = [ -58.3700828,  -34.597803  ];

db.places.find({
     loc:
       { $near : {
            $geometry: { type: "Point",  coordinates: torreBBVA },
            $maxDistance: 3500
          }
       }
   })
   
