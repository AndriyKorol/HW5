//1.
let arrayString = ['my', 'name', 'is', 'Trinity'],
    arrayNumber = [10, 20, 30],
    arrayObject = [{age: 45, name: 'Jhon'},{age: 20, name: 'Aaron'}],
    arrayStringSmall = ['abc', '123'],
    arrayStringNumber = ['1', '2', '3'];

function arrayToString(array, func) {
    let result = '';

    for (let j of array) {
        result += func(j);
    }
    return 'New value: ' + result;
}

function upperFirstletter(string){
    return string[0].toUpperCase() + string.slice(1,(string.length));
}

function multiplication(number){
    return number * 10 + ',';
}

function text(obj){
    return obj.name + ' is ' + obj.age + ', ';
}

function reverse(string){
    return string.split('').reverse().join('') + ', ';
}

function addition(number){
    return Number(number) + 5 + ', ';
}
console.log(arrayToString(arrayString, upperFirstletter));
console.log(arrayToString(arrayNumber, multiplication));
console.log(arrayToString(arrayObject, text));
console.log(arrayToString(arrayStringSmall, reverse));
console.log(arrayToString(arrayStringNumber, addition));

//2.
let cars = [
    {
        make: 'BMW',
        year: 2014
    },
    {
        make: 'Honda',
        year: 2018
    }
];

let prov = (item, el, arr) => car.year > 2014;
function some(arr, func) {
    for (let i=0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) return 'true';
    }
    return 'false';
}

let someCar = some(cars, (item, el, arr) => item.year > 2014);

console.log('some - ' + someCar);

function every(arr, func) {
    for (let i=0; i < arr.length; i++) {
        if (!func(arr[i], i, arr)) return 'false';
    }
    return 'true';
}

let everyCar = every(cars, (item, el, arr) => item.year > 2016);

console.log('every - ' + everyCar);

//3.1
let sortReverse = [2, 4, 7, 1, -2, 10, -9];
sortReverse.sort(function (prev, next) {
    return next - prev;
});
console.log(sortReverse);

//3.2
let arrayM = ['a', 'b', 'c', 'd', 'e', 'f'],
    frstItrm = 2,
    secndItem = 4;

function getNewArray(arrayM, frstItrm, secndItem) {

   let newArray = arrayM.slice(frstItrm, secndItem + 1);
    return newArray ;
}
console.log(getNewArray(arrayM, frstItrm, secndItem));

//3.3
let sortArrays = [[14, 45], [1], ['a', 'c', 'd']];
sortArrays.sort(function (prev1, next1) {

    return prev1 - next1;
});
console.log(sortArrays);

//3.4
let arrayObjs = [
    {cpu: 'intel', info: {core: 2, cache: 3}},
    {cpu: 'intel', info: {core: 4, cache: 4}},
    {cpu: 'amd', info: {core: 1, cache: 1}},
    {cpu: 'intel', info: {core: 3, cache: 2}},
    {cpu: 'amd', info: {core: 4, cache: 2}}
]
const sortedArr = arrayObjs.sort((prev, next) =>prev.info.core - next.info.core );
console.log(sortedArr);

//3.5
let a, b;
let products = [
    {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
    {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
    {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];

function filterRangeOfPrice(arr, a, b) {
    return arr.sort((prev, next) => prev.price - next.price )
        .filter(prod => {
            if (prod.price > a){
                if (prod.price < b){
                    return console.log(prod);
                }
            }
        });
};
console.log(filterRangeOfPrice(products, 10, 20));
 
//4.1
let arrNum = [1, 2, 3, 5, 8, 9, 10];

let arrayOfObjs = arrNum.map((item, i) => ({ digit: item, odd: Boolean(item % 2)}));
console.log(arrayOfObjs);

//4.2a
let sentences = [
    {char: 'a', index: 12}, {char: 'w', index: 8}, {char: 'Y', index: 10},
    {char: 'p', index: 13}, {char: 'p', index: 2}, {char: 'N', index: 6},
    {char: ' ', index: 5}, {char: 'y', index: 4}, {char: 'r', index: 13},
    {char: 'H', index: 0}, {char: 'e', index: 11}, {char: 'a', index: 1},
    {char: ' ', index: 9}, {char: '!', index: 14}, {char: 'e', index: 7},
];

function createSentences(arr) {
    return arr.sort((prev, next) => prev.index - next.index )
            .reduce((prev, curr) => prev + curr.char, '');
}
console.log(createSentences(sentences));

//4.2b
function createSentences2(arr){
    let newArr =[];

    for(i of arr) {
        newArr[i.index] = i.char;
    }
    return newArr.join('');
}
console.log(createSentences2(sentences));
