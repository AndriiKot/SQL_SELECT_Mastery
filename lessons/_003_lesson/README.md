## Mathematical Operations in PostgreSQL:

PostgreSQL supports a wide range of mathematical operations that can be performed directly in SQL queries. These operations include addition, subtraction, multiplication, division, exponentiation, modulo, integer division, rounding, and more. These are useful for manipulating numerical data directly in your queries.

---

#### Exercise

Using the `amount` field from the `payment` table, identify the purpose and result of the following operations:

1. Add 2 to the amount
2. Subtract 3 from the amount
3. Multiply amount by 1.5
4. Divide amount by 3
5. Raise amount to the power of 2
6. Find remainder when amount is divided by 4 using `%`
7. Find remainder when amount is divided by 4 using `mod()`
8. Perform integer division using `div()`
9. Round amount divided by 2 to 0 decimal places
10. Round amount divided by 2 to 1 decimal place
11. Round down using `floor()`
12. Round up using `ceil()`

---

### Solution

1. **Addition (`amount + 2`)**

```sql
SELECT amount AS original,
       amount + 2 AS "plus 2"
FROM payment;
```

* 🔹 **Answer**: A number 2 greater than `amount`.

2. **Subtraction (`amount - 3`)**

```sql
SELECT amount AS original,
       amount - 3 AS "minus 3"
FROM payment;
```

* 🔹 **Answer**: A number 3 less than `amount`.

3. **Multiplication (`amount * 1.5`)**

```sql
SELECT amount AS original,
       amount * 1.5 AS "multy 1.5"
FROM payment;
```

* 🔹 **Answer**: `amount` increased by 50%.

4. **Division (`amount / 3`)**

```sql
SELECT amount AS original,
       amount / 3 AS "division 3"
FROM payment;
```

* 🔹 **Answer**: `amount` divided by 3.

5. **Exponentiation (`amount ^ 2`)**

```sql
SELECT amount AS original,
       amount ^ 2 AS "power 2"
FROM payment;
```

* 🔹 **Answer**: Squares the value of `amount`.

6. **Modulo with `%` (`amount % 4`)**

```sql
SELECT amount AS original,
       amount % 4 AS "amount % 4"
FROM payment;
```

* 🔹 **Answer**: Remainder, can be fractional with non-integer amounts.

7. **Modulo with `mod()`**

```sql
SELECT amount AS original,
       mod(amount, 4) AS "mod 4"
FROM payment;
```

* 🔹 **Difference**: `mod()` is a built-in SQL function and behaves consistently across types. `%` is a shorthand but might behave slightly differently with negative numbers or floats.

8. **Integer division using `div()`**

```sql
SELECT amount AS original,
       div(amount, 2) AS "div 2"
FROM payment;
```

* 🔹 **Answer**: Like `floor(amount / 2)` but works with integers.

9. **Round division result to 0 decimals (`round(amount / 2, 0)`)**

```sql
SELECT amount AS original,
       round(amount / 2, 0) AS "round 0 digits"
FROM payment;
```

* 🔹 **Answer**: Similar to `div()` but rounds instead of truncates.

10. **Round division result to 1 decimal (`round(amount / 2, 1)`)**

```sql
SELECT amount AS original,
       round(amount / 2, 1) AS "round 1 digit"
FROM payment;
```

* 🔹 **Answer**: More precise rounded result.

11. **Round down using `floor()`**

```sql
SELECT amount AS original,
       floor(amount / 2) AS "floor"
FROM payment;
```

* 🔹 **Answer**: Always rounds toward negative infinity.

12. **Round up using `ceil()`**

```sql
SELECT amount AS original,
       ceil(amount / 2) AS "ceil"
FROM payment;
```

* 🔹 **Answer**: Always rounds toward positive infinity.

---

#### 🔄 Difference summary:

* `amount % 4` vs `mod(amount, 4)`: Both return remainder. Use `mod()` for more consistent behavior with different numeric types.
* `amount / 2` returns decimal, `div(amount, 2)` returns only integer part.

[back to top](#title)
