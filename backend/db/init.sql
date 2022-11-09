CREATE DATABASE bankdb;
USE bankdb;
create table customer (
  customerNo varchar(255) not null,
  name varchar(255)
  primary key (customerNo)
) engine=InnoDB;
INSERT INTO customer(customerNo, name)
values
    ("1","Prameet"),
    ("2","Sai"),
    ("3","Rahul");
    
create table admin (
                       username varchar(255) not null,
                       password varchar(255),
                       primary key (username)
) engine=InnoDB;
INSERT INTO admin(username, password)
values
    ("admin1", "admin1"),
    ("admin2", "admin2"),
    ("admin3", "admin3");