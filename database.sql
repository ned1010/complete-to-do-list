CREATE DATABASE completetodo;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    task VARCHAR(255)
);