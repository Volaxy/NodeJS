const pokemonsRepository = require("../repositories/pokemonsRepository");

exports.getPokemons = function () {
    return pokemonsRepository.getPokemons();
};

exports.insertPokemon = function(pokemon) {
    return pokemonsRepository.insertPokemon(pokemon);
};



exports.deletePokemon = function(id) {
    return pokemonsRepository.deletePokemon(id);
};