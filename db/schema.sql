-- Drops the database if exists --
DROP DATABASE IF EXISTS farmerandstore_db;
-- Creates the database --
CREATE DATABASE farmerandstore_db;

USE farmerandstore_db;

CREATE TABLE Users(
 user_id INT NOT NULL AUTO_INCREMENT,
 userName VARCHAR(45) NOT NULL,
 Password VARCHAR(25) NOT NULL,
 userType VARCHAR(20) NOT NULL,
 city VARCHAR(40) NOT NULL,
 zipcode INT(10) NOT NULL,
 email VARCHAR(30) NOT NULL,
 address VARCHAR(30) NOT NULL,
 phone INT(10) NOT NULL,
 PRIMARY KEY(user_id)
);

CREATE TABLE Produces(
Prod_id Int(11) AUTO_INCREMENT NOT NULL,   
prod_Name VARCHAR(40) NOT NULL,
PRIMARY KEY(Prod_id)
);


CREATE TABLE Inventories(
 inven_id INT NOT NULL AUTO_INCREMENT,   
 prod_Name VARCHAR(20) NOT NULL,
 price INT NOT NULL,
 stock_remain INT NOT NULL,
 threshold INT NOT NULL,
 PRIMARY KEY(inven_id)
);

CREATE TABLE User_Inventories(
    user_id INT NOT NULL AUTO_INCREMENT,
    prod_Name VARCHAR(20) NOT NULL,
    stock_remain INT NOT NULL,
    PRIMARY KEY(user_id)
);

CREATE TABLE User_Produces(
    user_id INT NOT NULL AUTO_INCREMENT,
    prod_Name VARCHAR(20) NOT NULL,
    PRIMARY KEY(user_id)
);

