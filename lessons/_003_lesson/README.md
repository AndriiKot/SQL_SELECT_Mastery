<a id="title"></a>

## Mathematical Operations in PostgreSQL:

PostgreSQL supports a wide range of mathematical operations 
that can be performed directly in SQL queries. 
These operations include addition, subtraction, multiplication, division, 
exponentiation, modulo, integer division, rounding, and more. 
These are useful for manipulating numerical data directly in your queries.

---

#### Exercise

Using the `amount` field from the `payment` table, 
observe and identify the result and purpose of each mathematical operation below:

1. Add 2 to the amount:

```sql
SELECT amount AS original,
       amount + 2 AS "plus 2"
FROM payment;
```

2. Subtract 3 from the amount:

```sql
SELECT amount AS original,
       amount - 3 AS "minus 3"
FROM payment;
```

3. Multiply amount by 1.5:

```sql
SELECT amount AS original,
       amount * 1.5 AS "multy 1.5"
FROM payment;
```

4. Divide amount by 3:

```sql
SELECT amount AS original,
       amount / 3 AS "division 3"
FROM payment;
```

5. Raise amount to the power of 2:

```sql
SELECT amount AS original,
       amount ^ 2 AS "power 2"
FROM payment;
```

6. Modulo: remainder when amount is divided by 4:

```sql
SELECT amount AS original,
       amount % 4 AS "amount % 4"
FROM payment;
```

7. Modulo using the `mod()` function:

```sql
SELECT amount AS original,
       mod(amount, 4) AS "mod 4"
FROM payment;
```

8. Integer division using `div()`:

```sql
SELECT amount AS original,
       div(amount, 2) AS "div 2"
FROM payment;
```

9. Round division result (no decimals):

```sql
SELECT amount AS original,
       round(amount / 2, 0) AS "round 0 digits"
FROM payment;
```

10. Round division result to 1 decimal:

```sql
SELECT amount AS original,
       round(amount / 2, 1) AS "round 1 digit"
FROM payment;
```

11. Round down using `floor()`:

```sql
SELECT amount AS original,
       floor(amount / 2) AS "floor"
FROM payment;
```

12. Round up using `ceil()`:

```sql
SELECT amount AS original,
       ceil(amount / 2) AS "ceil"
FROM payment;
```

<details>
  <summary>

### Solution

  </summary>

1. **Addition (`amount + 2`)**: Adds 2 to each value in the `amount` column.

   * 🔹 **Answer**: A number 2 greater than `amount`.

2. **Subtraction (`amount - 3`)**: Subtracts 3 from each value.

   * 🔹 **Answer**: A number 3 less than `amount`.

3. **Multiplication (`amount * 1.5`)**: Scales the amount up by 50%.

   * 🔹 **Answer**: `amount` increased by 50%.

4. **Division (`amount / 3`)**: Performs normal division (result is a decimal).

   * 🔹 **Answer**: `amount` divided by 3.

5. **Exponentiation (`amount ^ 2`)**: Raises `amount` to the power of 2.

   * 🔹 **Answer**: Squares the value of `amount`.

6. **Modulo with `%` (`amount % 4`)**: Returns the remainder of `amount / 4`.

   * 🔹 **Answer**: Remainder, can be fractional with non-integer amounts.

7. **Modulo with `mod()`**: Also returns the remainder.

   * 🔹 **Difference**: `mod()` is a built-in SQL function and behaves consistently across types. `%` is a shorthand but might behave slightly differently with negative numbers or floats.

8. **Integer division (`div(amount, 2)`)**: Returns the whole number part of the division.

   * 🔹 **Answer**: Like `floor(amount / 2)` but works with integers.

9. **`round(amount / 2, 0)`**: Rounds the result to the nearest integer.

   * 🔹 **Answer**: Similar to `div()` but rounds instead of truncates.

10. **`round(amount / 2, 1)`**: Rounds the result to 1 decimal place.

* 🔹 **Answer**: More precise rounded result.

11. **`floor(amount / 2)`**: Rounds down to the nearest whole number.

* 🔹 **Answer**: Always rounds toward negative infinity.

12. **`ceil(amount / 2)`**: Rounds up to the nearest whole number.

* 🔹 **Answer**: Always rounds toward positive infinity.

#### 🔄 Difference summary:

* `amount % 4` vs `mod(amount, 4)`: Both return remainder. Use `mod()` for more consistent behavior with different numeric types.
* `amount / 2` returns decimal, `div(amount, 2)` returns only integer part.

</details>

[back to top](#title)
