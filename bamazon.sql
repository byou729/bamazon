DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR (100),
department_name VARCHAR (100),
price DEC (10, 2) NULL,
stock_quantity INT NULL,
PRIMARY KEY (item_id)

);

SELECT*FROM products