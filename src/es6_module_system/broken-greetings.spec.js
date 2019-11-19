import {Person} from "./broken-greetings";

const assert = require('assert');

describe('broken greetings es6', () => {

    it('should work', () => {
        assert.equal([1, 2, 3].indexOf(4), -1);
    });

    it('should greet', () => {
        new Person('Hugo').greet('Lisa');
    });
});
