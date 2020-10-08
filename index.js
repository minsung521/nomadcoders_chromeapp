const caculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

console.log(caculator.plus(2, 5));
console.log(caculator.minus(2, 5));
console.log(caculator.divide(2, 5));
console.log(caculator.multiply(2, 5));
console.log(caculator.power(2, 5));
