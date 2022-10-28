const path = require("path");

// Basename
console.log(path.basename(__filename));

// File Path
console.log(path.dirname(__dirname));

// File Extension
console.log(path.extname(__filename));

// Build a Path object
console.log(path.parse(__filename));

// Union the Path Files
console.log(path.join(__dirname, 'test', 'test.html'));