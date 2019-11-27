const assert = require('assert');
const brokenGreetings = require('./broken-greetings');


describe('broken greetings node_module', () => {

  it('should work', () => {
    assert.equal([1, 2, 3].indexOf(4), -1);
  });

  it('should greet', () => {
    console.log(new brokenGreetings.Person('Hugo').greet('Lisa'));
  });
});
