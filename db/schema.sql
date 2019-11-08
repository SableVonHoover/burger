USE burgerDB;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT,
    burger_name VARCHAR(50) NOT NULL,
    eaten BOOLEAN NOT NULL DEFAULT false,
    PRIMARY KEY (id)
);