export function spread(functionToInvoke, argumentsToPass) {
    return functionToInvoke.apply(this, argumentsToPass);
}
