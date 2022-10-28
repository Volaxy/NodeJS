const http = require("http");

const port = 8080;
const server = http.createServer((req, res) => {
    // If the URL is "http://localhost:8080/home" ==> Return a single h1 title
    if(req.url === "/home") {
        // Assign the HTTP Code in the response (1st Parameter)
        // Specify the type of the file (2st Parameter)
        res.writeHead(200, { "Content-Type": "text/html" });
        
        // The content that will be returned after the request is requested
        res.end("<h1>Home Page</h1>");
    }
    
    // If the URL is "http://localhost:8080/users" ===> Return the users object in JSON format
    if(req.url === "/users") {
        const users = [
            {
                name: "John Doe",
                email: "john@doe.com"
            },
            {
                name: "Jane Doe",
                email: "jane@doe.com"
            }
        ]

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(users));
    }
});

server.listen(port, () => console.log(`Listening in the port localhost:${port}`));