const http = require("http");

const handler = (req, res) => {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Welcome to node app");
}

const server = http.createServer(handler);
server.listen(3000, () => {
    console.log("Server Started on port 3000");
});