#!/bin/bash

set -e

DOCKER_IMAGE=$1
CONTAINER_NAME="bio3"

# Check for arguments
if [[ $# -lt 1 ]] ; then
    echo '[ERROR] You must supply a Docker Image to pull'
    exit 1
fi

echo "Deploying $CONTAINER_NAME to Docker Container"

#Check for running container & stop it before starting a new one
if [ $(docker inspect -f '{{.State.Running}}' $CONTAINER_NAME) = "true" ]; then
    docker stop $CONTAINER_NAME
fi

echo "Starting $CONTAINER_NAME using Docker Image name: $DOCKER_IMAGE"

docker run -d --rm -p 80:80 --name $CONTAINER_NAME $DOCKER_IMAGE

docker ps -a