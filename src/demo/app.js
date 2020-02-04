const calculator = {
  demo: 'Hallo Calculator;'
};

calculator.sum = function sum(a, b) {
  console.log(this.demo);
  return a + b;
};

calculator.sum(1, 2);

module.exports = calculator;

const person = {
  name: ' Max',

  getName: function () {
    console.log(this);
    return this.name;
  }
};

const name = 'Hugo';

console.log(person.getName());

function nameGlobal() {
  const name = 'Hugo';
  bind(person)
  return this.name;
}

console.log(nameGlobal());
