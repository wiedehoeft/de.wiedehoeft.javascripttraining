/* Functional programming */

function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    return a / b;
}

export function doSomeMath(a, b) {
    return multiply(
        divide(
            subtract(
                add(a, b),
                add(a, b)
            ),
            add(a, b)
        ), 5);
}

/* Function currying */
function mathCurry(a) {
    return function add(b) {
        return function subtract(c) {
            return a + b - c;
        }
    }
}

export const mathCurry2 = () => mathCurry(4)(4)(4);
