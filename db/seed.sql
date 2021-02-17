drop table posts;
    
    create table posts (
    id serial primary  key,
    title varchar(200),
    content varchar(7000),
    img text
    )