const express = require("express");
const app = express();

const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost",
    user: "tuan",
    password: "123456",
    database: "test2",
});

app.get("/", (req, res) => {
    /*
    const sqlInsert =
        "INSERT INTO auth (id, username, password) VALUES ('3', 'tuan2', '1232');";
    db.query(sqlInsert, (err, result) => {
        if (err) throw err;
        console.log("The solution is: ");
        res.send("hello world lol");
    });
    */
});

app.listen(3001, () => {
    console.log("running on port 3001");
});
