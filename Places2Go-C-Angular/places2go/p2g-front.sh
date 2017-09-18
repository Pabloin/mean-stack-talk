#
# script To be invoqued with $ nohup or init.d
#
#  nohup ./p2g-front.sh  & 

# npm start

NOW=$(date +"%Y-%m-%d %H:%M:%S")


P2G_FRONT_LOGS=/tmp/places2go_logs

#P2G_HOME=~
#P2G_HOME=~/mean
P2G_HOME=~/DevOps/github/Pabloin
P2G_FRONT_HOME=$P2G_HOME/mean-stack-talk/Places2Go-C-Angular/places2go/


echo "____________________________________________________________" >> $P2G_FRONT_LOGS/p2g_front.log
echo "$NOW Start places2go front - from init.d "                    >> $P2G_FRONT_LOGS/p2g_front.log

cd $P2G_FRONT_HOME

npm start 2>&1 >> $P2G_FRONT_LOGS/p2g_front.log    

cd -

