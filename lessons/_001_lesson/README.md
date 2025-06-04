<a id="title"></a>

## Get the columns:

- ### Get the columns by column name

- ### Get the columns by \*

#### Exercise

1. Get all columns from the 'actor' table using the column names.
2. Get all columns from the 'actor' table without using the column names.
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

<details>
  <summary>

### Solution

  </summary>

1. Get all columns from the 'actor' table using the column names.

```sql
SELECT
    actor_id,
    first_name,
    last_name,
    last_update
FROM
    actor;
```

2. Get all columns from the 'actor' table without using the column names.

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

4. Yes, you can output a column multiple times in the same query.

##### For example:

```sql
SELECT
    actor_id,
    first_name,
    last_name,
    last_update,
    actor_id,
    last_name,
    last_name
FROM
    actor;
```
</details>

[back to top](#title)
