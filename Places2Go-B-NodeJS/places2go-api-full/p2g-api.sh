#
# script To be invoqued with $ nohup or init.d
#
# $ nohup ./p2g-api.sh   
#
# NOTA: Necesito que exista el /tmp/places2go_logs con permisos de escritura


# node app.js
# nodemon app.js


NOW=$(date +"%Y-%m-%d %H:%M:%S")


P2G_API_LOGS=/tmp/places2go_logs

P2G_API_HOME=~/mean-stack-talk/Places2Go-B-NodeJS/places2go-api-full


echo "____________________________________________________" >> $P2G_API_LOGS/p2g_api.log
echo "$NOW Start places2g api from init.d                 " >> $P2G_API_LOGS/p2g_api.log


nodemon $P2G_API_HOME/app.js  2>&1                          >> $P2G_API_LOGS/p2g_api.log  &



