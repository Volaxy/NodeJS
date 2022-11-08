const dotenv = require("dotenv");
const pgp = require("pg-promise")();

dotenv.config();

const db = pgp({
    user: process.env.USERNAME_DB,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.PORT,
    database: process.env.DATABASE
});

module.exports = db;