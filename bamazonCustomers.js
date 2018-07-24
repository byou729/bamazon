var mysql = require("mysql");
var inquirer = require("inquirer");
var fs = require("fs");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    connection.query("SELECT * FROM products", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        productToBuy();
    });
});

function productToBuy() {
    inquirer
        .prompt({
            name: "action",
            type: "input",
            message: "What is the ID of the product they would like to buy?",
        })
        .then(function (answer) {
            console.log(answer.item_id);
            connection.query("SELECT * FROM products WHERE ?", { item_id: answer.item_id }, function (err, res) {

                quantityToBuy();

            });
        });

    }

        function quantityToBuy() {
            inquirer
              .prompt({
                name: "quantity",
                type: "input",
                message: "What is the quantity of the product they would like to buy?"
              })
              .then(function(answer) {
                connection.query("SELECT * FROM products WHERE ?", { song: answer.stock_quantity }, function(err, res) {
                  if (process.argv[0] > answer.stock_quantity) {
                      console.log("Insufficient quantity!")
                  } else {
                      answer.stock_quantity =- answer.stockquantity - process.argv[0];
                      console.log(process.argv[0]);
                  }
                  productToBuy();
              });
          });
        }