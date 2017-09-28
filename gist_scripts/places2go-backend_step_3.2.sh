
#!/bin/bash

# 
# Gist del repo https://github.com/Pabloin/mean-stack-talk
#
# Step 3.2. Creamos un proyecto nodeJS from scratch
#


# Step 01: CREATE 

cd ~/Escritorio/mean/mean-stack-talk/Places2Go-B-NodeJS
mkdir helloNodeJS
cd helloNodeJS
npm init
cat package.json

npm install mongoose --save
npm install express --save
npm install body-parser --save --save-dev

ls -la
cat package.json

# Step 02: CODE ... en un archivo nuevo **index.js** copiamos:

echo "
var express = require('express')
var app = express()

/**
* GET /hello
*/
app.get('/hello', function(req, res) {
    res.send('Hello World!')
})

app.listen(3500, function () {
    console.log('#001: Hello-NodeJS listening on port 3500!');
})
" > index.js

# Step 03: RUN 

node index.js & 

echo "browse app in http://localhost:3500/hello"



