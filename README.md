# PostgreSQL-lesson-1
PostgreSQL Lesson 1
```sql
CREAT DATABASE testdb

CREATE TABLE publisher
(
	publisher_id integer PRIMARY KEY,
	org_name varchar(130) NOT NULL,
	address text NOT NULL,
	
);

CREATE TABLE book
(
	book_id integer PRIMARY KEY,
	title text NOT NULL,
	isbn varchar(32) NOT NULL
)




SELECT pg_terminate_backend(pg_stat_activity.pid)
FROM pg_stat_activity
WHERE pg_stat_activity.datname = 'testdb'
  AND pid <> pg_backend_pid()


DROP DATABASE testdb

```


