const database = require("../database/connectionPostgres");

exports.getPokemons = function() {
    return database.query("select * from pokemon");
};