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
    productDisplay();
});

function productDisplay() {
    inquirer
        .prompt({
            name: "department",
            type: "input",
            message: "Following are the details of products that are available for you to buy."
        })
        .then(function (answer) {
            var query = "SELECT id_item, product_name, price FROM product WHERE ?";
            connection.query(query, {department: department.artist}, function (err, res) {
                for (var i = 0; i < res.length; i++) {
                    console.log("ID: " + res[i].id_item + " || name: " + res[i].product_name + " || price: " + res[i].price);
                }
                productToBuy();
            });
        });
}

function productToBuy() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What is the ID of the product they would like to buy?",
            choices: [
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "Quantity of the products":
                    quantityToBuy();
                    break;
            }
        });
}

function quantityToBuy() {
    inquirer
        .prompt({
            name: "action",
            type: "input",
            message: "What is the quantity of the product they would like to buy?"
        })
        .then(function (answer) {
            if (process.argv[0] < product_id.product_quantity) {
                console.log("Insufficient quantity!")
            } else {
                product_id.product_quantity =- product_id.quantity - input;
                console.log("total cost is" + process.argv[0]*product.id_product_price)
            }
        });
}

