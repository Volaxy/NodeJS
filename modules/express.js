const express = require("express");
const UserModel = require("../src/models/user.model");

const app = express();
app.use(express.json());

// Simple Response
app.get("/home", (req, res) => {
    res.contentType("application/html");
    res.status(200).send("<h1>Hello world!</h1>");
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

const port = 8080;

app.listen(port, () => console.log(`Running with Express in the port http://localhost:${port}`));