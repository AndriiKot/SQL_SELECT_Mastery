# PostgreSQL-lesson-1
PostgreSQL Lesson 1
```sql
CREAT DATABASE testdb



SELECT pg_terminate_backend(pg_stat_activity.pid)
FROM pg_stat_activity
WHERE pg_stat_activity.datname = 'testdb'
  AND pid <> pg_backend_pid()


DROP DATABASE testdb

```


