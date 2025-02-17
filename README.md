# JavaScript Recursive Function Performance Issue

This repository demonstrates a common performance issue in recursive JavaScript functions. The `foo` function calculates a value based on the input `x`, but its recursive nature leads to redundant calculations, resulting in exponential time complexity.

## Bug Description:
The provided JavaScript code calculates a recursive function inefficiently.  The recursive nature of the function causes repeated calculations of the same values, leading to extremely slow performance, especially for larger input values of `x`.

## Solution Description:
The solution utilizes memoization to store the results of previous calculations. By storing and reusing previously computed values, the solution avoids redundant calculations and improves performance significantly.  Memoization transforms the function's time complexity from exponential to linear.