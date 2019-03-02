USE testdb;
CREATE TABLE userLog(
    id INTEGER AUTO_INCREMENT NOT NULL,
    user_name VARCHAR (100) NOT NULL, 
    email  VARCHAR (150) NOT NULL, 
    PRIMARY KEY (id)
);

INSERT INTO userLog (user_name, email) VALUES ("john smith", "johnsmith@gmail.com");
INSERT INTO userLog (user_name, email) VALUES ("shawna brown", "shawnabrown@gmail.com");
INSERT INTO userLog (user_name, email) VALUES ("jackie rockerfeller", "jackierockerfeller@gmail.com");