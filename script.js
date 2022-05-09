console.log('I am in script.js 🌮');

let tacos = 'Edan';
console.log('my name is', tacos);
// console.log('my name is', 'Edan');
/*
let     -- a keyword, we are about to declare a variable
            says: we are about to declare a variable
tacos   --- the name of the variable
=       --- the assignment operator
'Edan'  --- the value
*/

/*
const tacos;
tacos = 'Edan';
*/

// Use camelCase!
let myLastName = 'Schwartz';
console.log('last name is', myLastName);
//console.log('last name is', lastname);
// console.log('last name is', 💥);

// Other kinds of casing 
// (don't use these, I will judge you!):
// snake_case
let my_last_name = 'Schwartz';
// kebob-case
// let my-last-name = 'Schwartz'
// SCREAMING_SNAKE_CASE
let MY_LAST_NAME = 'Schwartz';


/**
 * Expressions
 * 
 * Some code that evaluates to a single value
 */

//           👇 an expression!
console.log('My name is ' + tacos + ' ' + myLastName);
// console.log('My name is Edan Schwartz');

function add(n1, n2) {
    return n1 + n2;
}
let result = add(5, 7);
// let result = 12;


if (8 > 7) {
// if (false) {...}    
    // .....
}


let isJamesBond = (tacos + ' ' + myLastName) === 'James Bond';
// let isJamesBond = 'Edan Schwartz' === 'James Bond';
// let isJamesBond = false;
console.log('isJamesBond', isJamesBond);

let outOfOrderThing = tacos + ' ' + (myLastName === 'James Bond');
// let outOfOrderThing = tacos + ' ' + (false);
// let outOfOrderThing = 'Edan false';


let aNumberMaybe = '23';
aNumberMaybe + 2
// '232'        <-- concatenation
Number(aNumberMaybe) + 2
// 25           <-- addition

'ten' * 3;      // NaN


/**
NaN             "Not a Number". You did some bad math 🤷
undefined       The variable hasn't been defined
💥 not defined  The variable hasn't even been declared
null            Nothing, on purpose
 */

let somethingMaybe;
console.log('somethingMaybe', somethingMaybe);

function subtract(n1, n2) {
    // n1 = 7
    // n2 = undefined
    console.log('n1, n2', n1, n2)
    return n1 - n2;
}
subtract(7);

// console.log('nothingMaybe', nothingMaybe);
// 💥 ReferenceError: nothingMaybe is not defined

let artistFirstName = 'Prince';
let artistLastName = null;  // <- nothing, on purpose


8 === 8;          // true
8 === '8';        // false

// Don't do this!
8 == '8';         // true
// 8 === Number('8');


/**
 * Conditionals
 */
let isSomethingTrue = tacos === 'Edan';
// let isSomethingTrue = 'Edan' === 'Edan';
// let isSomethingTrue = true;

// if (true) {}
let age = '35'
if (age > 20) {
    // still a a yungin'
    // do this stuff
    // inside of this code block
}
else if (age < 30) {
    // start adulting
}
else if (age < 40) {
    // good luck
}
else {
    // yer old
}


let dayOfTheWeek = 'Monday';
if (dayOfTheWeek == 'Monday') {
    console.log('JS review');
}
else if (dayOfTheWeek === 'Tuesday') {
    console.log('Objects')
}

switch (dayOfTheWeek) {
    case 'Monday':
        console.log('JS review');
        break;
    case 'Tuesday': 
        console.log('Objects');
        break;
    default:
        console.log('🤷‍♀️');
        break
}

// Ternary: if/else, and resolves to a value
let height = 55;
let message = height > 50 ?
    'you can ride this ride'            // if
    :
    'keep growing, try later'           // else
// let message = 'you can ride this ride';

let welcomeMessage = `
    Welcome to the amusement park, ${tacos}!
    Check out the rollercoaster:
    ${height > 50 ? 'you can ride it!' : 'too short, so sorry'}
`;




/* while (isSomethingTrue) {
    // code blokc
} */

function something() {
    // code block
}

/**
 * Functions
 */

/*
Inputs ("arguments" or "parameters"):
    yourHeight
    dangerLevel
*/
function isTallEnoughToRide(yourHeight, dangerLevel) {
    // yourHeight = 50
    // dangerLevel 'kiddie'

    let minHeight;
    // if ('kiddie' === 'kiddie')
    if (dangerLevel === 'kiddie') {
        minHeight = 28;
    }
    else if (dangerLevel === 'intense') {
        minHeight = 55;
    }

    return yourHeight > minHeight;
    
    // console.log(yourHeight > minHeight);         // true
    // return undefined
}
let canIRide = isTallEnoughToRide(50, 'kiddie');
// let canIRide = undefined;

function welcomeVisitor(name, height) {
    sayHello(name);
    
    let message = getRiderMessage(height, 'kiddie');
    console.log(message);
}

function sayHello(name) {
    console.log(`Hello ${name}`);
}

function getRiderMessage(height, dangerLevel) {
    if (isTallEnoughToRide(height, dangerLevel)) {
        return 'Have fun!';
    }
    else {
        return 'Do you know where your parents are?';
    }
}

// if (undefined) {}
if (canIRide) {
    console.log('yippee!!!')
}

console.log('can we?', isTallEnoughToRide(50, 'kiddie'));
//console.log('can we?', undefined);

function stressRelease() {
    console.log('YAAAAAHAHAHAHAHAAAAAA 😱');
}

let stressLevel = 20;
while (stressLevel > 5) {
    stressRelease();
    stressLevel--;
}

makeASentence(['Welcome', 'to', 'Gaiman']);

// Declaring a function
// "function declaration"
function makeASentence(words) {
    return words.join(' ') + '.';
}

// Anonymous function
// "function expression"
let makeASentence2 = function(words) {
    return words.join(' ') + '.';
}

// Arrow function
let makeASentence3 = (words) => {
    return words.join(' ') + '.';
}
// Single arg does not need parentheses
let makeASentence4 = words => {
    return words.join(' ') + '.';
}
// One liner!
let makeASentence5 = words => words.join(' ') + '.';

// Calling a function
let welcome = makeASentence(['Welcome', 'to', 'Gaiman']);
// let welcome = 'Welcome to Gaiman.'


// log() is a method of the console object
console.log('yolo');

let numbers = [1, 2, 3, 4, 5];
// push() is a method of the numbers array
numbers.push(6);


/*
Javascript is: a loose / dynamic typed language
Other languages are: strongly / statically typed
*/

/**
Arrays
 */

let animals = [
    'cat',      // 0
    'dog',      // 1
    'bunny'     // 2
];

animals.push('newt', 'lion', 'tomato frog');


let menuItems = [
    {
        name: 'tacos',
        price: 3.99,
    },
    {
        name: 'burrito',
        price: 8.99
    }
];
for (let item of menuItems) {
    console.log(item);
}

// Access by index
let firstAnimal = animals[0];   // 'cat'
//let lastAnimal = animals[2];    // 'bunny'
let lastAnimal = animals[animals.length - 1];    // 'bunny'
/// animals.length - 1 = 2
// animals[2];      // bunny

// for..of
for (let animal of animals) {
    // animal = 'bunny';
    console.log('animal is', animal);
    if (animal === 'bunny') {
        console.log('🐇🐇🐇🐇🐇🐇🐇🐇');
    }
}

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

for (let i = 0; i < 1000; i += 5) {
    console.log(i);
}

let bigNumber = 2**6;
// while (bigNumber > 1) {
//     bigNumber = bigNumber / 2;
//     console.log(bigNumber);
// }

while (true) {
    bigNumber = bigNumber / 2;
    console.log(bigNumber);

    if (bigNumber <= 1) {
        break;
    }
}