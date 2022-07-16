DROP DATABASE IF EXISTS tipsy_tech_db;

CREATE DATABASE tipsy_tech_db;

DROP TABLE IF EXISTS drinks


CREATE TABLE Ingredients (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  ingredient1 VARCHAR(30), 
  ingredient2 VARCHAR(30),
  ingredient3 VARCHAR(30),
  ingredient4 VARCHAR(30), 
  ingredient5 VARCHAR(30), 
  ingredient6 VARCHAR(30),
  ingredient7 VARCHAR(30)
);

CREATE TABLE Drinks (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  ingredientsID INTEGER,
  garnish TEXT,
  FOREIGN KEY (ingredientsID) REFERENCES Ingredients(id)
);





-- CREATE DB THEN CREATE TABLE RUN BELOW COMMAND INTO MYSQL TO POPULATE TABLE
-- -- ADD INSERT INTO parties (name, description)
-- -- VALUES ('Budwieser', 'Budlight', 'Coorslight', 'Miller lite', 'Rolling Rock' 'Royal Flush', 'Bloody Mary' )

-- -- THEN RUN IN MYSQL TO CHECK IF TABLE WAS POPULATED CORRECTLY
-- SELECT * FROM drinkType;
-- SELECT * FROM drinkType WHERE id = 1;
-- SELECT name, description FROM drinkType WHERE id = 3;