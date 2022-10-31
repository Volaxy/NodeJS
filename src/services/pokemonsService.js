const pokemonsRepository = require("../repositories/pokemonsRepository");

exports.getPokemons = function () {
    return pokemonsRepository.getPokemons();
};

exports.getPokemon = function (id) {
    return pokemonsRepository.getPokemon(id);
};

exports.insertPokemon = function(pokemon) {
    return pokemonsRepository.insertPokemon(pokemon);
};

exports.updatePokemon = function(id, pokemon) {
    return pokemonsRepository.updatePokemon(id, pokemon);
};

exports.deletePokemon = function(id) {
    return pokemonsRepository.deletePokemon(id);
};