function getResult(callback) {
    let a = +prompt(`Введите первое число`);
    let b = +prompt(`Введите второе число`);
    return callback(a, b);
}

function exponentiation(a, b) {
    return console.log (a ** b);
}

function multiply(a, b) {
    return console.log(a * b);
}

function division(a, b) {
    return console.log(a / b);
}

function modulo(a, b) {
    return console.log(a % b);
}

getResult(exponentiation);
getResult(multiply);
getResult(division);
getResult(modulo);