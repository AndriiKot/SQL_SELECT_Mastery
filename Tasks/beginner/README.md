<a id="title"></a>

## Beginner Tasks

1. From the staff table, how can you extract the first part of the email field (everything before the @ symbol)?

2. From the film table, get the title and description columns, and if the description column starts with 'A ', then remove it.

3. From the film table, get the first word from the title column.

<details>

<summary>

### Solutions

</summary>

1. You can use the substring (or split_part) function together with position (or strpos) to extract the part before the @ symbol:

```sql

SELECT
    email,
    substring(email FROM '^[^@]+') AS username
FROM
    staff;

SELECT
    email,
    split_part(email, '@', 1) AS username
FROM
    staff;


SELECT
    email,
    substring(email, 1, strpos(email,'@') - 1) AS username
FROM
    staff;

SELECT
    email,
    substring(email FROM 1 FOR position('@' IN email) - 1) AS username
FROM
    staff;
```

2. You can use the REGEXP_REPLACE(LTRIM or CASE, TRIM) function to remove the 'A ' from the description column:

```sql

SELECT
	title,
	LTRIM(f.description, 'A ') AS "With LTRIM",
	TRIM(leading f.description, 'A ' ) AS "With TRIM"
FROM
	film f;

SELECT
    TITLE,
    REGEXP_REPLACE(DESCRIPTION, '^A ', '', 1) AS DESCRIPTION
FROM
    FILM;


SELECT
    TITLE,
    CASE
        WHEN DESCRIPTION LIKE 'A %' THEN SUBSTRING(DESCRIPTION FROM 3)
        ELSE DESCRIPTION
    END AS DESCRIPTION
FROM
    FILM;

```

3. You can use the split_part (substring, ...) function to get the first word from the title column:

```sql
SELECT
    SUBSTRING(TITLE FROM '^\w+') AS FIRST_WORD
FROM
    FILM;

SELECT
    LEFT(TITLE, POSITION(' ' IN TITLE) - 1) AS FIRST_WORD
FROM
    FILM;

SELECT
    SPLIT_PART(TITLE, ' ', 1) AS FIRST_WORD
FROM
    FILM;

SELECT
    (REGEXP_MATCHES(TITLE, '^\w+'))[1] AS FIRST_WORD
FROM
    FILM;

SELECT
    SUBSTRING(TITLE, 1, STRPOS(TITLE, ' ') - 1) AS FIRST_WORD
FROM
    FILM;

```

</details>

##### More projects codeWars beginner

<details>
    <summary>

##### Strings Practice

</summary>

[Remove First and Last Character](https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/sql)

[Reverse String](https://www.codewars.com/kata/5168bb5dfe9a00b126000018/sql)

[String repeat](https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/sql)

[Remove String Spaces](https://www.codewars.com/kata/57eae20f5500ad98e50002c5/sql)

[Returning Strings](https://www.codewars.com/kata/55a70521798b14d4750000a4/sql)

[MakeUpperCase](https://www.codewars.com/kata/57a0556c7cb1f31ab3000ad7/sql)

[Fake Binary](https://www.codewars.com/kata/57eae65a4321032ce000002d/sql)

[Remove exclamation marks](https://www.codewars.com/kata/57a0885cbb9944e24c00008e/sql)

[Easy SQL: LowerCase](https://www.codewars.com/kata/594800ba6fb152624300006d/sql)

</details>

<details>
    <summary>

##### Math Practice

</summary>

[Even or Odd](https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/sql)

[Grasshopper - Summation](https://www.codewars.com/kata/55d24f55d7dd296eb9000030/sql)

[SQL Basics: Mod](https://www.codewars.com/kata/594a9592704e4d21bc000131/sql)

[Easy SQL: Square Root and Log](https://www.codewars.com/kata/594a691720ac16a544000075/sql)

[Multiply](https://www.codewars.com/kata/50654ddff44f800200000004/sql)

</details>
