var express=require('express');
var app =express();
var server=require('http').Server(app);
var io=require('socket.io')(server);

app.use(express.static('Cliente'));

app.get('/holaMundo',function(req,res){//por ruta http://localhost:6677/HolaMundo
    res.status(200).send('hola  mundo');
});
app.get('/MitchAguilar',function(req,res){
    res.status(200).send('<h1 style="color:red;">Not more</h1>');
});
var messages=[{
    id:1,
    text:'bienvendo al chat online de mitch aguilar',
    nickname:'Bot Mitch Aguilar'
}];



io.on('connection',function(socket){
    console.log('El nodo de ip: '+socket.handshake.address+" se vinculó...");
    socket.emit('messages',messages);

    socket.on('add-message',function(data){
        messages.push(data);

        io.sockets.emit('messages',messages);
    });

});


server.listen(6677, function(){//lev el server en el 8080 ojo!
    console.log('Servidor está funcionando en http//localhost:6677');
});