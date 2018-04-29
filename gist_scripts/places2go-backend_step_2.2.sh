#!/bin/bash

# 
# Gist del repo https://github.com/Pabloin/mean-stack-talk
#
# Step 2.2. MongoDB instalado en Linux local
#

lsb_release -a
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list

sudo apt-get update
sudo apt-get install -y mongodb-org

# Wait end of install to start service
/bin/sleep 5
sudo service mongod start

tail -f /var/log/mongodb/mongod.log 

