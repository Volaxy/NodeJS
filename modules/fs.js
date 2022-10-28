const fs = require("fs");
const path = require("path");

// Create a folder
fs.mkdir(path.join(__dirname, "test"), (error) => {
    if(error) {
        return console.log("Error:", error);
    }

    console.log("Folder created succesful");
});