//2.Написать модуль, который способен выполнять операции с числами любой длины.
// 4 метода для сложения, умножения, вычитания и деления.
//В задании не сказано как будут передаваться параметры. Я решил, что будут 3 параметра, Число, оператор, число.
//Также в задании сказано с числами люой длины, вы имеете ввиду тип данных BigInt? Если да, то могу попробовать добавить.
const operationWithNumbers = (num1, operation, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return `Вы передали не правильный тип данных, мы ожидаем число! Выдохните и попробуйте снова, мы в вас верим :) `
    }
    switch (operation) {
        case '+':
            return `Сумма двух чисел: ${num1 + num2}`;
            break;
        case '-':
            return `Разность двух чисел: ${num1 - num2}`;
            break;
        case '*':
            return `Произведение двух чисел: ${num1 * num2}`;
            break;
        case '/':
            return `Деление двух чисел: ${num1 / num2}`;
            break;
        default:
            return `Вы указали неверный оператор '${operation}' :( Пожалуйста, укажите корректный оператор '+', '-', '*', '/'`
    }
}
//
// console.log(operationWithNumbers(1, '+', 3))
// console.log(operationWithNumbers(1, '-', 3))
// console.log(operationWithNumbers(1, '*', 3))
// console.log(operationWithNumbers(1, '/', 3))
// console.log(operationWithNumbers(1, '&', 3))
// console.log(operationWithNumbers('d', '&', 3))
// тесты, отрабатывают верно

module.exports = operationWithNumbers;