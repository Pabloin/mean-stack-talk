# Import / Export data to a MongoDB database 



mongoimport -d places2go -c places --file places.json 


mongoexport -d places2go -c places -o places.json


**Nota:** Si utilizamos host y port se puede hacer sobre bases de datos remotas, no solo locales.   


mongoimport -d places2goTest -c places --file places.json --host 127.0.0.1 --port 27017

