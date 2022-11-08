CREATE DATABASE bankdb;
USE bankdb;
create table customer (
  id bigint not null,
  primary key (id)
) engine=InnoDB;
INSERT INTO customer(id)
values
    (1234),
    (4567),
    (9876),
    (6745),
    (1290);
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