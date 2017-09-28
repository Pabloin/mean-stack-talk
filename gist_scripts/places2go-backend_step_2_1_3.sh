#!/bin/bash

# 
# Gist del repo https://github.com/Pabloin/mean-stack-talk
#
# Step 2.1.3. Query Complejos desde Robomongo
#

cd /tmp/
mkdir jsonGeodata
cd jsonGeodata

wget -O neighborhoods.json https://raw.githubusercontent.com/mongodb/docs-assets/geospatial/neighborhoods.json
wget -O restaurants.json   https://raw.githubusercontent.com/mongodb/docs-assets/geospatial/restaurants.json

ls -la

mongoimport -d mongoExample -c restaurants   --file restaurants.json
mongoimport -d mongoExample -c neighborhoods --file neighborhoods.json

# Remote Access exapmles (WIP: It is not working for me... )

# mongo --host 54.68.83.6
# mongo --host 54.68.83.6:27017

# mongoimport -d mongoExample -c restaurants   --file restaurants.json   --host 54.68.83.6
# mongoimport -d mongoExample -c neighborhoods --file neighborhoods.json --host 54.68.83.6





