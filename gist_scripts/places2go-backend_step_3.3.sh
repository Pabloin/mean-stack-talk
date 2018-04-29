#!/bin/bash

# 
# Gist del repo https://github.com/Pabloin/mean-stack-talk
#
# Step 3.3. Creamos un proyecto nodeJS con LoopBack
#

cd ~/Escritorio/mean/mean-stack-talk/Places2Go-B-NodeJS
mkdir demoLoopBack
cd demoLoopBack
sudo npm install -g strongloop
slc loopback todo

cd misPlaces
slc loopback:model
