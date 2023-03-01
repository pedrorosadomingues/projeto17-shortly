create database shortlydb;

CREATE TABLE users (
    id serial primary key,
    name varchar(50) NOT NULL,
    email varchar(20) NOT NULL unique,
    password TEXT NOT NULL,
    "createdAt" date NOT NULL default now()
);

CREATE TABLE urls (
    id serial primary key,
    url TEXT NOT NULL unique,
    "shortUrl" TEXT NOT NULL unique,
    "userId" integer NOT NULL REFERENCES users(id),
    "createdAt" date NOT NULL default now(),
    "totalClicks" integer NOT NULL default 0
);
