#!/bin/bash

# 
# Gist del repo https://github.com/Pabloin/mean-stack-talk
#
# Step 3.1. Instalar Node.JS y NPM  (and nodemon)
#

sudo apt-get -y --purge remove node
sudo apt-get -y --purge remove nodejs
sudo apt-get -y install npm

curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get -y install nodejs

sudo apt-get -y install build-essential

# install nodemon
sudo npm install -g nodemon

# Wait end of install to run command 
/bin/sleep 3
node --version
npm --version

