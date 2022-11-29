const express = require('express')
var cors = require('cors')
const app = express()
var mysql = require('mysql');
const port = 5000;

app.use(express.json(), cors())

var con = mysql.createConnection({
    host: "bhrmhkdj50mn30jmbwcr-mysql.services.clever-cloud.com",
    user: "uki1mqfkopnus4w7",
    password: "702eic9ofUokluyYgmKm",
    database: "bhrmhkdj50mn30jmbwcr"
  });

con.connect(function(err) {
    if (err) throw err;
});



app.post('/', (req, res) => {
    con.query("SELECT * FROM supplier", function(err, data){
        if (err) throw err;
        res.send(data)
    })
})

app.post('/customer', (req, res) => {
    con.query("SELECT customer.fname as label FROM customer", function(err, data) {
        if (err) throw err;
        res.send(data); 
    })
})

app.post('/customer/:customerID', (req, res) => {
    const {customerID} = req.params; 
    con.query("select * from `order` join `bolt` on `order`.id = `bolt`.order_id where customer_id = ?", `${customerID}`, function(err, data) {
        if (err) throw err;
        res.send(data);
    })
})


app.listen(port, () => console.log(`Your project is running at http://localhost:${port}`))