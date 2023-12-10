
const express = require("express");
const app = express();

const http = require("http").createServer(app);

const PORT = process.env.PORT || 6020;

http.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

//Route

app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});


//socket

const io=require('socket.io')(http)

io.on('connection',(socket)=>{
    console.log('connected...')
    socket.on('message',(msg)=>{
      // console.log(msg);
        socket.broadcast.emit('message',msg);
    }) 
})