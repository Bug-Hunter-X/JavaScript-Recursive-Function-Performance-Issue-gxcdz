function foo(x){
  if (x == 1) {
    return 1;
  } else if (x == 2) {
    return 2;
  } else if (x == 3) {
    return 3;
  } else {
    return foo(x - 3) + foo(x - 2) + foo(x - 1);
  }
}
console.log(foo(6)); // Output: 27