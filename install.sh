#!/usr/bin/env bash
# A shell script to copy a new video file into the project and run the
# build command.
# Written by: Corey Snodgrass
# Last updated on: 10/10/2018

while [ -n "$1" ]; 
if [ -e /dev/stdin ]; then
  echo "Copying video file into directory"
  sudo cp /dev/stdin /home/pi/mern-discovery-videoplayer/client/src/components/
  echo "Changing Directories"
  cd /home/pi/mern-discovery-videoplayer/
  sudo npm run build
else
  echo "File does not exist"
fi
