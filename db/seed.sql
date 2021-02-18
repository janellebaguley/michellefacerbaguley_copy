drop table posts;
    
    create table posts (
    id serial primary  key,
    title varchar(200),
    content varchar(7000),
    img text
    )

drop table if exists users;

create table users
(
  id serial primary  key,
  is_admin BOOLEAN default false,
  username varchar(120),
  hash text
);