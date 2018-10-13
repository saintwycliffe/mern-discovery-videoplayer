#!/usr/bin/env bash
# A shell script to run the build
# build command.
# Written by: Corey Snodgrass
# Last updated on: 10/11/2018

echo "Mounting file system"
sudo mount -t ntfs /dev/sda1 /mnt/usb/

echo "Copying video file into directory"
sudo cp /mnt/usb/video.mp4 /home/pi/mern-discovery-videoplayer/client/src/components/video.mp4
sudo cp /mnt/usb/background.png /home/pi/mern-discovery-videoplayer/client/src/components/background.png

echo "Changing Directories"
cd /home/pi/mern-discovery-videoplayer/

sudo sh install.sh
