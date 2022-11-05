const express = require("express");
const router = express.Router();

const pokemonsService = require("../services/pokemonsService");
const Pokemon = require("../models/pokemon.model");

// GET
// ALL Pokemons
router.get("/pokemons", async (req, res) => {
    try {
        const pokemons = await pokemonsService.getPokemons();
    
        res.json(pokemons);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

// Pokemon by Id
router.get("/pokemons/:id", async (req, res) => {
    try {
        const pokemon = await pokemonsService.getPokemon(req.params.id);

        if(!pokemon) {
            let newPokemon = new Pokemon();
            
            newPokemon = await pokemonsService.insertPokemon(newPokemon);
            
            res.json(newPokemon);
        }

        res.json(pokemon);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

// POST
// INSERT Pokemon
router.post("/pokemons", async (req, res) => {
    try {
        const pokemon = req.body;
        const newPokemon = pokemonsService.insertPokemon(pokemon);

        res.json(newPokemon);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

// PUT
// ALTER Pokemon by Id
router.put("/pokemons/:id", async (req, res) => {
    try {
        const pokemon = req.body;
        await pokemonsService.updatePokemon(req.params.id, pokemon);

        res.end();
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

// DELETE
// DELETE Pokemon by Id
router.delete("/pokemons/:id", async (req, res) => {
    try {
        await pokemonsService.deletePokemon(req.params.id);

        res.end();
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

// Exporta o roteamento
module.exports = router;