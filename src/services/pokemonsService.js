const pokemonsRepository = require("../repositories/pokemonsRepository");

exports.getPokemons = function () {
    return pokemonsRepository.getPokemons();
};