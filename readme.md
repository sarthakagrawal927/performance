# Performace

## Backend

Run nodeClient on devices you want to connect with the main performance monitor. Its sole function is to get the pc information and send it to main server.

Run server on the device you want to see the performance , it gets data from the different nodeClients and then it sends it to client via socket.

Tech Stack : NodeJS, SocketIO with redis-adaptor which helps running multiple instances of socketIO for each nodeClient to connect and forward the data to client.

## Front End

ReactJS

## Purpose

To build a cool performance monitor, will probably improve upon the UI and use when I have multiple machines to take care of. Also it helped strengthening my understanding of socketIO.
