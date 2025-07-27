<a name="title"></a>

## Combining Logical Expressions in PostgreSQL

You can combine multiple logical conditions in PostgreSQL using **AND**, **OR**, and **NOT** operators. This allows you to build more flexible and powerful queries.

| Operator | Description                         | Example                                                    |
| -------- | ----------------------------------- | ---------------------------------------------------------- |
| `AND`    | All conditions must be true         | `rental_rate > 1 AND rental_duration < 5`                  |
| `OR`     | At least one condition must be true | `rental_rate = 0.99 OR rental_rate = 4.99`                 |
| `NOT`    | Negates a condition                 | `NOT (rental_duration = 7)`                                |
| `()`     | Groups conditions                   | `(rental_rate > 1 AND rental_rate < 5) OR rental_rate = 0` |

[Back to Top](#title)

---

### 💡 Examples

#### 1. Films with rental rate greater than 2 **and** rental duration less than 5:

```sql
SELECT * FROM film
WHERE rental_rate > 2 AND rental_duration < 5;
```

#### 2. Films with rental rate **0.99 or 4.99**:

```sql
SELECT * FROM film
WHERE rental_rate = 0.99 OR rental_rate = 4.99;
```

#### 3. Films where the **title starts with 'A'** and **rental rate is greater than 1**:

```sql
SELECT * FROM film
WHERE title LIKE 'A%' AND rental_rate > 1;
```

#### 4. Films where **rental duration is not equal to 7**:

```sql
SELECT * FROM film
WHERE NOT rental_duration = 7;
```

#### 5. Complex expression with grouped conditions:

```sql
SELECT * FROM film
WHERE (rental_rate > 2 AND rental_duration < 5)
   OR (rental_rate = 0.99 AND title LIKE '%Airport%');
```

---

### 🧠 Exercises

1. Select all films where rental\_rate is greater than 3 and rental\_duration is less than 6
2. Select films where rental\_rate is **0.99 or 2.99**, and the **title contains "Dog"**
3. Select films where rental\_duration **is not equal to 5**
4. Select films where **rental\_rate is greater than 4** or **title starts with "Z"**
5. Select all from address where `address2` **is NULL** or `district` equals `'California'`

<details>
<summary>

### Solutions

</summary>

1.

```sql
SELECT * FROM film
WHERE rental_rate > 3 AND rental_duration < 6;
```

2.

```sql
SELECT * FROM film
WHERE (rental_rate = 0.99 OR rental_rate = 2.99)
  AND title LIKE '%Dog%';
```

3.

```sql
SELECT * FROM film
WHERE rental_duration <> 5;
```

4.

```sql
SELECT * FROM film
WHERE rental_rate > 4 OR title LIKE 'Z%';
```

5.

```sql
SELECT * FROM address
WHERE address2 IS NULL OR district = 'California';
```

</details>

---

### 📚 Additional Resources

* [PostgreSQL Logical Operators Documentation](https://www.postgresql.org/docs/current/functions-logical.html)
* [PostgreSQL Conditional Expressions](https://www.postgresql.org/docs/current/functions-conditional.html)

[Back to Top](#title)

---

Если хочешь — могу подготовить следующее занятие по `CASE`, `COALESCE`, `NULLIF` или агрегатным функциям.
