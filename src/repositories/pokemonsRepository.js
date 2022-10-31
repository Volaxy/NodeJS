const database = require("../database/connectionPostgres");

exports.getPokemons = function() {
    return database.query("select * from pokemons");
};

exports.getPokemon = function(id) {
    return database.oneOrNone("select * from pokemons where id = $1", [id]);
};

exports.insertPokemon = function(pokemon) {
    return database.one("insert into pokemons (name, atk, def) values ($1, $2, $3) returning *", [pokemon.name, pokemon.atk, pokemon.def]);
};

exports.updatePokemon = function(id, pokemon) {
    return database.none("update pokemons set name = $1, atk = $2, def = $3 where id = $4", [pokemon.name, pokemon.atk, pokemon.def, id]);
};

exports.deletePokemon = function(id) {
    return database.none("delete from pokemons where id = $1", [id]);
};