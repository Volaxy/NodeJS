const http = require("http");

const port = 8080;
const server = http.createServer((req, res) => {
    if(req.url === "/home") {
        // Assign the HTTP Code in the response
        // Specify the type of the file
        res.writeHead(200, { "Content-Type": "text/html" });

        // The content that will be returned after the request is requested
        res.end("<h1>Home Page</h1>");
    }
});

server.listen(port, () => console.log(`Listening in the port localhost:${port}`));