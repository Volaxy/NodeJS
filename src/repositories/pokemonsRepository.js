const database = require("../database/connectionPostgres");

exports.getPokemons = function() {
    return database.query("select * from pokemon");
};

exports.insertPokemon = function(pokemon) {
    return database.one("insert into pokemon (name, atk, def) values ($1, $2, $3) returning *", [pokemon.name, pokemon.atk, pokemon.def]);
};

exports.deletePokemon = function(id) {
    return database.none("delete from pokemons where id = $1", [id]);
}