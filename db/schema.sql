DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

USE  burger_db;

CREATE TABLE burgers (
    id int  NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(20) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
);

