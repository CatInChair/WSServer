const app = require("express")();
const server = require("http").createServer(app);
const Server = require("ws").Server;
const wsServer = new Server({ server });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/site/index.html");
});

wsServer.on("connection", (soc) => {
  console.log("New websocket connection");
  soc.send(JSON.stringify({message:"Hello, User"}))
});

server.listen(3000);
