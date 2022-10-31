const express = require("express");
const router = express.Router();

const pokemonsService = require("../services/pokemonsService");

router.get("/pokemons", async (req, res) => {
    const pokemons = await pokemonsService.getPokemons();

    res.json(pokemons);
});

router.get("/pokemons/:id", async (req, res) => {
    const pokemon = await pokemonsService.getPokemon(req.params.id);

    res.json(pokemon);
});

router.post("/pokemons", async (req, res) => {
    const pokemon = req.body;
    const newPokemon = pokemonsService.insertPokemon(pokemon);

    res.json(newPokemon);
});

router.put("/pokemons/:id", async (req, res) => {
    const pokemon = req.body;
    await pokemonsService.updatePokemon(req.params.id, pokemon);

    res.end();
});

router.delete("/pokemons/:id", async (req, res) => {
    await pokemonsService.deletePokemon(req.params.id);

    res.end();
});

// Exporta o roteamento
module.exports = router;