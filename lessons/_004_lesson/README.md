<a name="title"></a>

## String Functions in PostgreSQL

PostgreSQL provides a comprehensive set of string manipulation functions that can be used directly in SQL queries. Below are the most commonly used functions:

---

## Practical Exercises

Using the `actor` table, perform these operations:

1. Display the length of first names
2. Display first names in lowercase
3. Display first names in uppercase
4. Concatenate first and last names with a space
5. Format names as first_name last_name (proper capitalization) as "Full Name"
6. Display first names with only the last character capitalized

<details>
<summary><b>View Solutions</b></summary>

### Solutions

1. **Name length:**
```sql
SELECT
  first_name,
  LENGTH(first_name) AS name_length
FROM actor;

-- or variation
SELECT
  first_name,
  CHAR_LENGTH(first_name) AS name_length
FROM actor;
```

2. **Lowercase names:**

```sql
SELECT
  first_name,
  LOWER(first_name) AS lowercase_name
FROM actor;
```

3. **Uppercase names:**

```sql
SELECT
  first_name,
  UPPER(first_name) AS uppercase_name
FROM actor;
```

4. **Full name concatenation:**

```sql
SELECT
  CONCAT(first_name, ' ', last_name) AS full_name
FROM actor;

-- or variation
SELECT
  first_name || ' ' || last_name AS full_name
FROM actor;

-- or variation
SELECT
  CONCAT_WS(' ', first_name, last_name) AS full_name
FROM actor;
```

5. **Properly formatted full names:**

```sql
SELECT
  INITCAP(CONCAT(first_name, ' ', last_name)) AS "Full Name"
FROM actor;
```

6. **Last character capitalized:**
   ```sql
   SELECT
     first_name,
     LOWER(LEFT(first_name, LENGTH(first_name)-1)) || UPPER(right(first_name, 1)) AS modified_name
   FROM actor;
   ```
   </details>

---

## Complete Function Reference

For a complete list of string functions and their detailed usage, refer to the official PostgreSQL documentation:

📚 [PostgreSQL String Functions Documentation](https://www.postgresql.org/docs/current/functions-string.html)

Key features to note:

- Most string functions work with `TEXT`, `VARCHAR`, and `CHAR` types
- Functions are case-sensitive by default (use `lower()`/`upper()` for case-insensitive operations)
- Performance varies by function (simple operations like `upper()` are faster than regex operations)
- Many functions support multibyte character sets (UTF-8)

[Back to Top](#title)



### Core String Functions

1. **`length()` / `char_length()`**
   Returns the number of characters in a string.
   Example: `SELECT length('Hello');` → `5`
   [Documentation](https://www.postgresql.org/docs/current/functions-string.html)

2. **`lower()`**
   Converts a string to lowercase.
   Example: `SELECT lower('HeLLo');` → `hello`

3. **`upper()`**
   Converts a string to uppercase.
   Example: `SELECT upper('HeLLo');` → `HELLO`

4. **`substring()` / `substr()`**
   Extracts a portion of a string.
   Example: `SELECT substring('PostgreSQL' FROM 1 FOR 4);` → `Post`

5. **`trim()`**
   Removes leading and trailing whitespace (or other characters).
   Example: `SELECT trim('  hello  ');` → `hello`

6. **`concat()` / `concat_ws()`**
   Concatenates strings (with separator for `concat_ws`).
   Example: `SELECT concat('Post','gre','SQL');` → `PostgreSQL`

7. **`replace()`**
   Replaces all occurrences of a substring.
   Example: `SELECT replace('foo bar', 'bar', 'baz');` → `foo baz`

8. **`split_part()`**
   Splits a string and returns the specified part.
   Example: `SELECT split_part('a,b,c', ',', 2);` → `b`

[back to top](#title)

### Advanced String Functions

9. **`initcap()`**
   Capitalizes the first letter of each word.
   Example: `SELECT initcap('hello world');` → `Hello World`

10. **`position()` / `strpos()`**
    Returns the location of a substring.
    Example: `SELECT position('lo' in 'hello');` → `3`

11. **`overlay()`**
    Replaces a substring within a string.
    Example: `SELECT overlay('PostXXXX' placing 'gre' from 5 for 4);` → `Postgre`

12. **`repeat()`**
    Repeats a string N times.
    Example: `SELECT repeat('A', 3);` → `AAA`

13. **`reverse()`**
    Reverses the string.
    Example: `SELECT reverse('ABC');` → `CBA`

14. **`left()` / `right()`**
    Extracts N characters from left/right.
    Example: `SELECT left('database', 4);` → `data`

[back to top](#title)

### Cryptographic Functions

15. **`md5()`**
    Computes MD5 hash.
    Example: `SELECT md5('text');` → `1cb251ec0d568de6a929b520c4aed8d1`

16. **`sha256()` / `sha512()`**
    Computes SHA hashes (requires pgcrypto extension).
    Example: `SELECT encode(digest('text', 'sha256'), 'hex');`

[back to top](#title)
