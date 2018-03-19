var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get('/', (req, res) => {
    // res.send('<h1>Hello world</h1>')
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    // console.log('a user connected');
    // socket.broadcast.emit('hi');
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
        // io.emit('some event', {for: 'everyone'});
    });
});



http.listen(process.env.PORT, () => {
   console.log('Listening to port on *:3000'); 
});