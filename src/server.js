const express = require("express");
const app = express();

app.use("/", require("./routers/pokemonRouter"));

const port = 8080;
app.listen(port, () => console.log(`Running with Express in the port http://localhost:${port}`));