function increaseBalance(x, y) {
  x += y;
  return x;
}

function decreaseBalance(x, y) {
x -= y;
return x;
}

function divideBalanceByAccounts(x, y) {
  x /= y;
  console.log("x");
  return x;  
}

function getRestAfterDivision(x, y) {
  x %= y;
  return x;
}

function increaseByOne(x) {
  x = ++x;
  return x;
}

function decreaseByOne(x) {
  x = --x;
  return x;
}

console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2,));
console.log(getRestAfterDivision(7000, 3));

console.log(increaseByOne(100));
console.log(decreaseByOne(100));
