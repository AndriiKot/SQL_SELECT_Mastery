<a id="title"></a>

## Get the columns:

- ### Get the columns by column name

- ### Get the columns by *

#### Exercise

1. Retrieve all columns from the 'actor' table using the column names.
2. Retrieve all columns from the 'actor' table without using the column names.
3. Is the following query valid?

```sql
SELECT
    actor_id,
    first_name,
    last_name,
    last_update,
    *
FROM
    actor;
```
4. Can you output a column multiple times in the same query?

#### Solution

1. Retrieve all columns from the 'actor' table using the column names.
```sql
SELECT
    actor_id,
    first_name,
    last_name,
    last_update
FROM
    actor;
```

2. Retrieve all columns from the 'actor' table without using the column names.
```sql
SELECT
    *
FROM
    actor;
```

3. The following query is valid.
```sql
SELECT
    actor_id,
    first_name,
    last_name,
    last_update,
    *
FROM
    actor;
```
  Yes, you can output a column multiple times in the same query.

[back to top](#title)


