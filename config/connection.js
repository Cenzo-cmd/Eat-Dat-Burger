const mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "burger_db"
    });
};



connection.connect((err) => {
    if (err) {
        console.log(`Error connecting to DB: ${err.stack}`);
        return;
    }
    console.log(`Connected to DB with ID ${connection.threadId}`);
});

module.exports = connection;