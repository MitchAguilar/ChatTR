var express=require('express');
var app =express();
var server=require('http').Server(app);
var io=require('socket.io')(server);

app.get('/holaMundo',function(req,res){//por ruta
    res.status(200).send('hola  mundo');
});

server.listen(6677, function(){//lev el server en el 8080 ojo!
    console.log('Servidor está funcionando en http//localhost:6677');
});