<a name="title"></a>

## Logical Operators and Expressions in PostgreSQL

| Operator              | Description                  | Example                                             |
| --------------------- | ---------------------------- | --------------------------------------------------- |
| `=`                   | Equal to                     | `rental_rate = 4.99`                                |
| `!=` or `<>`          | Not equal to                 | `rental_duration <> 7`                              |
| `>`                   | Greater than                 | `rental_rate > 3`                                   |
| `<`                   | Less than                    | `rental_rate < 5`                                   |
| `>=`                  | Greater than or equal to     | `rental_rate >= 4.99`                               |
| `<=`                  | Less than or equal to        | `rental_rate <= 0.99`                               |
| `BETWEEN ... AND ...` | Between two values           | `rental_date BETWEEN '2005-05-26' AND '2006-02-28'` |
| `LIKE`                | Pattern matching             | `title LIKE 'A%'`                                   |
| `NOT LIKE`            | Not matching pattern         | `title NOT LIKE '%Epic%'`                           |
| `IS NULL`             | Checks for NULL values       | `address2 IS NULL`                                  |
| `IS NOT NULL`         | Checks for NOT NULL values   | `address2 IS NOT NULL`                              |
| `IN (...)`            | Matches any in a list        | `rental_duration IN (3, 4, 5, 6)`                   |
| `NOT IN (...)`        | Does not match any in a list | `rental_duration NOT IN (7)`                        |

[back to top](#title)

---

#### Exercises

Use the following tables: film, address.

1. Select all fields from film where rental_rate is equal to 4.99

2. Select all from film where rental_rate is greater than 3

3. Select all from film where rental_rate is less than 5

4. Select all from film where rental_rate is less than or equal to 0.99

5. Select all from film where rental_rate is greater than or equal to 4.99

6. Select all from film where rental_date is between '2005-05-26' and '2006-02-28'

7. Select all from film where title starts with 'A'

8. Select all from film where title contains the word 'Airport'

9. Select all from film where title does not contain the word 'Epic'

10. Select all from address where address2 is NULL

11. Select all from address where address2 is not NULL

12. Select all from film where rental_duration is not equal to 7

13. Select all from film where rental_duration is 3, 4, 5, or 6

<details>
<summary>

### Solutions

</summary>

1. **Select all fields from film where rental_rate is equal to 4.99**

```sql

SELECT
  *
FROM
  film
WHERE
  rental_rate = 4.99;

```

2. **Select all from film where rental_rate is greater than 3**

```sql

SELECT * FROM film WHERE rental_rate > 3;

```

3. **Select all from film where rental_rate is less than 5**

```sql

SELECT * FROM film WHERE rental_rate < 5;

```

4. **Select all from film where rental_rate is less than or equal to 0.99**

```sql

SELECT * FROM film WHERE rental_rate <= 0.99;

```

5. **Select all from film where rental_rate is greater than or equal to 4.99**

```sql

SELECT * FROM film WHERE rental_rate >= 4.99;

```

6. **Select all from film where rental_date is between '2005-05-26' and '2006-02-28'**

```sql

SELECT * FROM film WHERE rental_date BETWEEN '2005-05-26' AND '2006-02-28';

```

7. **Select all from film where title starts with 'A'**

```sql

SELECT * FROM film WHERE title LIKE 'A%';

```

8. **Select all from film where title contains the word 'Airport'**

```sql

SELECT * FROM film WHERE title LIKE '%Airport%';

```

9. **Select all from film where title does not contain the word 'Epic'**

```sql

SELECT * FROM film WHERE title NOT LIKE '%Epic%';

```

10. **Select all from address where address2 is NULL**

```sql

SELECT * FROM address WHERE address2 IS NULL;

```

11. **Select all from address where address2 is not NULL**

```sql

SELECT * FROM address WHERE address2 IS NOT NULL;

```

12. **Select all from film where rental_duration is not equal to 7**

```sql

SELECT * FROM film WHERE rental_duration <> 7;

```

13. **Select all from film where rental_duration is 3, 4, 5, or 6**

```sql

SELECT * FROM film WHERE rental_duration IN (3, 4, 5, 6);

```

</details>

---

#### Additional Resources

📚 [PostgreSQL Comparison Operators Documentation](https://www.postgresql.org/docs/current/functions-comparison.html)
📚 [PostgreSQL Pattern Matching Documentation](https://www.postgresql.org/docs/current/functions-matching.html)

[Back to Top](#title)
