const { error } = require("console");
const fs = require("fs");
const path = require("path");

// Create a folder
fs.mkdir(path.join(__dirname, "test"), (error) => {
    if (error) {
        return console.log("Error:", error);
    }

    console.log("Folder created successfully");
});

// Create a file
fs.writeFile(path.join(__dirname, "test", "test.txt"), "hello node!", (error) => {
    if (error) {
        return console.log("Error:", error);
    }

    console.log("File created successfully");



    // Add content to file
    fs.appendFile(path.join(__dirname, "/test", "test.txt"), "Hello World!", (error) => {
        if (error) {
            return console.log("Error:", error);
        }

        console.log("File modified successfully");
    })

    // Read the content file
    fs.readFile(path.join(__dirname, "/test", "test.txt"), "utf-8", (error, data) => {
        if (error) {
            return console.log("Error:", error);
        }

        console.log(data);
    })
});