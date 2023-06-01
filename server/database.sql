CREATE DATABASE roomies;

CREATE TABLE students(
    student_id SERIAL PRIMARY KEY,
    first_name VARCHAR(225) NOT NULL,
    last_name VARCHAR(225) NOT NULL,
    email VARCHAR(225) NOT NULL,
    password VARCHAR(255) NOT NULL,
    UNIQUE(email)
);