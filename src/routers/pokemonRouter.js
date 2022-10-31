const express = require("express");
const router = express.Router();

const pokemonsService = require("../services/pokemonsService");

router.get("/pokemons", async (req, res) => {
    const pokemons = await pokemonsService.getPokemons();

    res.json(pokemons);
});

router.get("/pokemons/:id", async (req, res) => {
    
});

router.post("/pokemons", async (req, res) => {
    
});

router.put("/pokemons/:id", async (req, res) => {
    
});

router.delete("/pokemons/:id", async (req, res) => {
    
});

// Exporta o roteamento
module.exports = router;