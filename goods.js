// 3. Создать класс данных "Товар"
// С полями
// Название
// Цена
// Количество
// Описание
// Наполнить массив объектами такого класса.
//     Написать метод, который получает строку вида
// "name-contains-fd&price-=2&quantity->5&description-ends-abc"
// "name-starts-fd&quantity-=5"
// На выходе возвращает массив, только с подходящими объектами
// возможны (contains, starts, ends для строковых и <, =, >, <=, >= для числовых)
// Позволю себе кое что добавить. В метод пусть принимает строку и массив, который нужно отфильтровать.
class Good {
    constructor(name, price, quantity, description) {
        this.name = name,
            this.price = price,
            this.quantity = quantity,
            this.description = description
    }
}

let iphone = new Good('iphone', '1500', '177', 'IOS phone')
let ipad = new Good('ipad', '2000', '250', 'IOS tablet')
let samsung = new Good('samsung', '1000', '123', 'Android phone')
let realme = new Good('realme', '500', '457', 'bestPrice')
let htc = new Good('htc', '1200', '77', 'goodPhone')
let xiaomi = new Good('xiaomi', '800', '458', 'cheap phone')
let asus = new Good('asus', '200', '23', 'excellent phone')

let phoneArray = [iphone, samsung, realme, htc, ipad, xiaomi, asus]

const filtredObjects = (str, arr) => {
    let splitStr = str.split('&');
    console.log(splitStr)
    let copyArray = [...arr];
    let result;
    const textOperation = (filterName, filterStatus, filterSearchName, array) => {
        if (filterStatus === 'contains') {
            return array.filter(obj => obj[filterName].includes(filterSearchName))
        }
        if (filterStatus === 'starts') {
            return array.filter(obj => obj[filterName].startsWith(filterSearchName))
        }
        if (filterStatus === 'ends') {
            return array.filter(obj => obj[filterName].endsWith(filterSearchName))
        }
    }
    const numberOperation = (filterName, numberCondition, array) => {
        let number = Number(numberCondition.replace(/\D/g, ''))
        let operation = numberCondition.replace(/\d/g, '')

        switch (operation) {
            case '>':
                return array.filter(obj => obj[filterName] > number);
                break;
            case '<':
                return array.filter(obj => obj[filterName] < number);
                break;
            case '=':
                return array.filter(obj => obj[filterName] == number);
                break;
            case '<=':
                return array.filter(obj => obj[filterName] <= number);
                break;
            case '>=':
                return array.filter(obj => obj[filterName] >= number);
                break;
            default:
                return array;
        }
    }

    for (let filter of splitStr) {
        let filterArray = filter.split('-');
        let filterName = filterArray[0];
        if (filterName === 'name' || filterName === 'description') {
            copyArray = textOperation(filterName, filterArray[1], filterArray[2], copyArray)
        }
        if (filterName === 'price' || filterName === 'quantity') {
            copyArray = numberOperation(filterName, filterArray[1], copyArray)
        }
    }
    result = copyArray;
    return result;
}

//console.log(filtredObjects("name-contains-m&quantity->100", phoneArray))  Проверка, все работает


module.exports = filtredObjects();
