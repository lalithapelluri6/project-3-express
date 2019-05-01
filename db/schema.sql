-- Drops the database if exists --
DROP DATABASE IF EXISTS farmerandstore_db;
-- Creates the database --
CREATE DATABASE farmerandstore_db;

USE farmerandstore_db;

CREATE TABLE Users(
 id INT NOT NULL AUTO_INCREMENT,
 userName VARCHAR(45) NOT NULL,
 Password VARCHAR(25) NOT NULL,
 UserType VARCHAR(20) NOT NULL,
 PRIMARY KEY(id)
);

CREATE TABLE Farmers(
Farm_id Int(11) AUTO_INCREMENT NOT NULL,   
Name VARCHAR(40) NOT NULL,
Address VARCHAR(40) NOT NULL,
City VARCHAR(40) NOT NULL,
Zipcode INT(10) NOT NULL,
Email_address VARCHAR(50) NOT NULL,
Phonenumber INT(20) NOT NULL,
PRIMARY KEY (Farm_id)
);

CREATE TABLE Stores(
Store_id Int(11) AUTO_INCREMENT NOT NULL,   
Name VARCHAR(40) NOT NULL,
Address VARCHAR(40) NOT NULL,
City VARCHAR(40) NOT NULL,
Zipcode INT(10) NOT NULL,
Email_address VARCHAR(50) NOT NULL,
Phonenumber INT(20) NOT NULL,
PRIMARY KEY (Store_id)
);

CREATE TABLE Category(
Prod_id Int(11) AUTO_INCREMENT NOT NULL,   
prod_Name VARCHAR(40) NOT NULL,
primary key(Prod_id)
);


CREATE TABLE FarmAndStore(
Farm_id Int(11)  NOT NULL,   
Store_id Int(11) NOT NULL, 
Prod_id Int(11) NOT NULL 
);

