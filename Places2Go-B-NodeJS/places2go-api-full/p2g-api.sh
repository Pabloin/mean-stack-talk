#
# script To be invoqued with $ nohup or init.d
#
# $ nohup ./p2g-api.sh   
#
# [ubuntu_2@~ ] $ ls -la /etc/init.d/p2g*
# -rwxr-xr-x 1 root root 503 Mar 21 23:52 /etc/init.d/p2g-api.sh
# -rwxr-xr-x 1 root root 422 Mar 21 23:54 /etc/init.d/p2g-front.sh

# NOTA: Necesito que exista el /tmp/places2go_logs con permisos de escritura


# node app.js
# nodemon app.js


NOW=$(date +"%Y-%m-%d %H:%M:%S")


P2G_API_LOGS=/tmp/places2go_logs

#P2G_HOME=~
#P2G_HOME=~/mean
P2G_HOME=~/DevOps/github/Pabloin
P2G_API_HOME=$P2G_HOME/mean-stack-talk/Places2Go-B-NodeJS/places2go-api-full


echo "____________________________________________________" >> $P2G_API_LOGS/p2g_api.log
echo "$NOW Start places2g api from init.d                 " >> $P2G_API_LOGS/p2g_api.log


nodemon $P2G_API_HOME/app.js  2>&1                          >> $P2G_API_LOGS/p2g_api.log  &



