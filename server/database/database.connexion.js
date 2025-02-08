import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

async function db_connection (){
    const connexion = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,
    })
    return connexion
}
export default  db_connection;