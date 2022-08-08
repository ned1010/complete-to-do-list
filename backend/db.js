const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres", 
    password: "Messidorji@98",
    host:"localhost",
    port: 5432,
    database: "completetodo"

})

module.exports = pool;

