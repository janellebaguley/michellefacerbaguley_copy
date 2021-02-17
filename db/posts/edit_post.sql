update posts set title = $1, 
content = $2, img = $3 where 
id = $4;

select * from posts order by id asc;