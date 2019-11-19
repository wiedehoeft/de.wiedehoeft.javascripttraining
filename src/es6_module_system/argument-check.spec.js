import * as assert from "assert";

describe('Argument check', () => {

    it('should notify that arg is digit', () => {
        // Arrange
        const firstArg = 1;

        // Act
        let result = argumentTypeChecker(firstArg);

        // Assert
        assert.equal(result, true);
    });

    it('should notify that all args are digits', () => {
        // Arrange
        const firstArg = 1;
        const secondArg = 1;

        // Act
        let result = argumentTypeChecker(firstArg, secondArg);

        // Assert
        assert.equal(result, true);
    });

    it('should notify that there is a non digit param', () => {
        // Arrange
        const firstArg = 1;
        const secondArg = 1;
        const thirdArg = 'a';

        // Act
        let result = argumentTypeChecker(firstArg, secondArg, thirdArg);

        // Assert
        assert.equal(result, false);
    });
});

// TODO: This could be done shorter => exercise
function argumentTypeChecker() {

    const isNumber = (argument) => Array.prototype.map.call(argument, (current) => {
        return isNaN(current);
    });

    const hasOnlyNumbers = (argument) => argument.filter((current) => {
        return current === true;
    }).length === 0;

    return hasOnlyNumbers(isNumber(arguments));
}
