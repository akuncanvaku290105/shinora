import mysql from "mysql2/promise";

const pool = mysql.createPool({

  host: "sql312.infinityfree.com",

  user: "if0_42054303",

  password: "shinora290105",

  database: "if0_42054303_shinora_db",

});

export default pool;