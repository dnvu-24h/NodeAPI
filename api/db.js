import mysql from 'mysql';
const db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "1",
    database: process.env.DB_NAME || "shopping-list"
})
export default db;