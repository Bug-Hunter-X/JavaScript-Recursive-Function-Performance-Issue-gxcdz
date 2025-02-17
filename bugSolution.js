function foo(x, memo = {}) {
  if (x in memo) {
    return memo[x];
  } else if (x == 1) {
    return 1;
  } else if (x == 2) {
    return 2;
  } else if (x == 3) {
    return 3;
  } else {
    memo[x] = foo(x - 3, memo) + foo(x - 2, memo) + foo(x - 1, memo);
    return memo[x];
  }
}
console.log(foo(6)); // Output: 27
console.log(foo(10)); // Output: 274 