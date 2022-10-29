const express = require("express");
const UserModel = require("../src/models/user.model");

const app = express();
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "src/views");

// Middleware allows a function to be executed before requests are made
app.use((req, res, next) => {
    console.log(`Request Type: ${req.method}`);
    console.log(`Content Type: ${req.headers["content-type"]}`);
    console.log(`Date: ${new Date}`);

    next();
});

// Simple Response
app.get("/home", (req, res) => {
    res.contentType("application/html");
    res.status(200).send("<h1>Hello world!</h1>");
});

// View Response
app.get("/views/users", async (req, res) => {
    res.render("index");
});

// GET
// ALL Users
app.get("/users", async (req, res) => {
    try {
        const users = await UserModel.find({});

        res.status(200).json(users);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

// User By Id
app.get("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const user = await UserModel.findById(id);

        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

// POST
// NEW User
app.post("/users", async (req, res) => {
    try {
        const user = await UserModel.create(req.body);

        res.status(201).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// PATCH
// Attribute User
app.patch("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });

        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// DELETE
// User By Id
app.delete("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findByIdAndRemove(id);

        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

const port = 8080;

app.listen(port, () => console.log(`Running with Express in the port http://localhost:${port}`));