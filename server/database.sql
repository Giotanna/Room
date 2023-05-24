CREATE DATABASE roomies;

CREATE TABLE students(
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(225),
    email VARCHAR(225),
    phone_number VARCHAR(225),
    UNIQUE(email)
);