<a id="title"></a>

## PostgreSQL Comments and Expressions

### Exercise

1. Write a **single-line comment** in PostgreSQL with the text `"Hello, PostgreSQL"`.
2. Write a **multi-line comment** in PostgreSQL with any sample text.
3. How can you test functions and expressions without querying a database table?
   For example: `10 / 5`, `POSITION('@' IN 'email@domain')`.

<details>
  <summary>

### Solution

  </summary>

1. Single-line comment:

```sql
-- Hello, PostgreSQL
````

2. Multi-line comment:

```sql
/*
  This is a multi-line comment
  in PostgreSQL.
  You can write multiple lines here.
*/
```

3. You can test functions and expressions using the `SELECT` statement without referencing any table:

```sql
SELECT 10 / 5;  -- Result: 2
SELECT POSITION('@' IN 'email@domain');  -- Result: 6
SELECT STRPOS('email@domain', '@') AS position_of_at; -- Result: 6
```

</details>

[Back to top](#title)
