import * as assert from "assert";
import {spread} from "./function-spread";

describe('function spread', () => {

    it('should call function with name and args', () => {
        // Arrange as explicit function
        const testFunction = function () {
            let result = 0;

            [...arguments].forEach((argument) => {
                result += argument;
            });

            return result;
        };

        // Arrange as lambda
        const testFunction2 = (...args) => {
            let result = 0;

            args.forEach((argument) => {
                result += argument;
            });

            return result;
        };

        const testArgs = [1, 2, 3];

        // Act
        const result = spread(testFunction, testArgs);
        const result2 = spread(testFunction2, testArgs);

        // Assert
        assert.equal(result, 6);
        assert.equal(result2, 6);
    });
});
