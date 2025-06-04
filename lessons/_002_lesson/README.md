<a id="title"></a>

## Field Naming and Aliases:

A field is a column in a database table that stores a specific piece of information. The field name is the name assigned to that column, which is used to reference the data within the field. Aliases are alternative names given to fields or tables in a SQL query, which can make the query more readable and easier to understand.

#### Exercise

1. What will the field name be in the following query, and why?

```sql
SELECT
    actor_id actorID
FROM
    actor;
```

2. What will the field name be in the following query?

```sql
    first_name as firstName,
    last_name as lastName
FROM
    actor;
```

3. How can you set the field names with spaces? For example, for `first_name` and `last_name` to 'First Name' and 'Last Name' respectively?

4. How can you set the field name to a keyword like 'select' or 'SELECT'?

5. How can you set the field name to a Unicode character or emoji?

<details>
  <summary>

### Solution

  </summary>

1. The field name will be `actorid` in lowercase, because in PostgreSQL, column names are converted to lowercase if they are not enclosed in double quotes. So, `actorID` will become `actorid`.

##### For example:

```sql
SELECT
    actor_id actorID,
    actor_id ACTORID,
    actor_id ActorID
FROM
    actor;
```

<em>The field names in all cases will be</em>: `actorid`

#### Answer: actorid


2. The field names will be in lowercase even with the use of the keyword 'as'.

##### For example:

```sql
    first_name as firstName,
    last_name as lastName
FROM
    actor;
```

`firstName` will be converted to the field name `first_name` in lowercase.
`lastName` will be converted to the field name `last_name` in lowercase.

#### Answer: firstname and lastname


3. To set the field names for `first_name` and `last_name` to 'First Name' and 'Last Name' respectively, you need to enclose the field names in double quotes.

##### For example:

```sql
   first_name as "First Name",
   last_name as "Last Name"
FROM
    actor;
```

#### Answer: "First Name" and "Last Name"


4. To set the field name to a keyword like 'select' or 'SELECT', you need to enclose the field name in double quotes.

##### For example:

```sql
    first_name as "select",
    last_name as "SELECT"
FROM
    actor;
```

#### Answer: "select" and "SELECT"


5. To set the field name to a Unicode character or emoji, you need to enclose the field name in double quotes.

##### For example:

```sql
    first_name as "👨",
    last_name as "👩"
FROM
    actor;
```

In this case, the field names will be "👨" and "👩" respectively. and "👩" respectively.

#### Answer: "👨" and "👩"

</details>

[back to top](#title)
