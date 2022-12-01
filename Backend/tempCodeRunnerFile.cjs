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


app.post('/getCustomerNames', (req, res) => {
    con.query("select concat(customer.lname, ' ', customer.fname) as label from customer", function(err, data) {
        if (err) throw err;
        res.send(data); 
    })
})

app.post('/getcustomerOrders', (req, res) => {
    let customerName = Object.values(req.body)[0];
    const query = "select `bolt`.order_id, `bolt`.id as bolt_id, `bolt`.category_id as category, `bolt`.category_color, `bolt`.length, `order`.price from `order`join `bolt` on `order`.id = `bolt`.order_id join `customer` on `order`.customer_id = `customer`.id where concat(customer.lname, ' ', customer.fname) = ?"
    con.query(query, `${customerName}`, function(err, data) {
        if (err) throw err;
        res.send(data);
    })
})

app.post('/getMaterialInfo', (req, res) => {
    let category_id;
    switch (Object.values(req.body)[0]) {
        case 'silk':
            category_id = '1';
            break;
        case 'khaki':
            category_id = '2';
            break;
        case 'crewel':
            category_id = '3';
            break;
        case 'jacquard':
            category_id = '4';
            break;
        case 'faux silk':
            category_id = '5';
            break;
        case 'damask':
            category_id = '6';
            break;
    
        default:
            break;
    }
    const query = "select supplement.category_color, category.supplier_id, category_prices.selling_price, category_prices.quantity , max(supplement.`date`) as 'supplied_date' from supplement join category_prices on supplement.category_id = category_prices.category_id join category on category_prices.category_id = category.id where supplement.category_id = ? group by supplement.category_id, supplement.category_color"
    con.query(query, `${parseInt(category_id)}`, function(err, data) {
        if (err) throw err;
        res.send(data);
    })


})


app.listen(port, () => console.log(`Your project is running at http://localhost:${port}`))