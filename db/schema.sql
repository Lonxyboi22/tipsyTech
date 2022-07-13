DROP DATABASE IF EXISTS tipsy_tech_db;

CREATE DATABASE tipsy_tech_db;


CREATE TABLE drinks (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  description TEXT
);

CREATE TABLE liquor (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  description TEXT
);

CREATE TABLE Beer (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  description TEXT
);

-- CREATE DB THEN CREATE TABLE RUN BELOW COMMAND INTO MYSQL TO POPULATE TABLE
-- -- ADD INSERT INTO parties (name, description)
-- -- VALUES ('Budwieser', 'Budlight', 'Coorslight', 'Miller lite', 'Rolling Rock' 'Royal Flush', 'Bloody Mary' )

-- THEN RUN IN MYSQL TO CHECK IF TABLE WAS POPULATED CORRECTLY
SELECT * FROM drinkType;
SELECT * FROM drinkType WHERE id = 1;
SELECT name, description FROM drinkType WHERE id = 3;