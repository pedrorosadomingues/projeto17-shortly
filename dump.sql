create database shortlydb;

CREATE TABLE users (
    id serial primary key,
    name varchar(50) NOT NULL,
    email varchar(20) NOT NULL unique,
    password TEXT NOT NULL,
    createdAt date NOT NULL default now()
);