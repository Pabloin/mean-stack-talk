#!/bin/bash

# First argument: the ID of the Github Gist to clone from

# Ejemplo:
#       Para bajar :https://gist.github.com/Pabloin/6e4206b6d2788678b04a03085a6a16a9
#       Ejecutamos: 
#                $ places2go-gist-script.sh  6e4206b6d2788678b04a03085a6a16a9
#       
#       Y en la carpeta tenemos el script a ejecutar (con nombre amigable.sh):
#                $ ~/Escritorio/mean/gist_scripts/places2go-backend_step_2.2.sh  
#   
GIST_ID=${1}
GIST_DIR=.

echo "cd ${GIST_DIR}"
cd ${GIST_DIR}

pwd
# git clone git@gist.github.com:/${GIST_ID}.git
git clone https://gist.github.com/${GIST_ID}.git

# symlink all scripts for global execution
for entry in ${GIST_DIR}/${GIST_ID}/*.sh
do
    SCRIPT_NAME=$entry    
    ln $SCRIPT_NAME
    chmod +x $SCRIPT_NAME
done