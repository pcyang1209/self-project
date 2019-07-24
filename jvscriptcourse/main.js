// (for the most part don't use var), let (reassign values), const is constant

// Data TYPES: String, Numbers, Boolean, null, undefined, Symbol (beyond scope)

/* 
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;

let z;

console.log(typeof isCool);

const name = 'harry';
const age = 30;

// Template String
const hello = `My name is ${name} and I am ${age}`

console.log(hello); */

const s = 'Hello World';

/*console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,5));
console.log(s.substring(0,5).toLowerCase());

console.log(s.split(''));*/

const x = 'technology, computers, it code';

console.log(x.split(', '));

// Arrays - variables that hold multiple values

const numbers = new Array(1,2,3,4,5);
const fruits = ['apples', 'oranges', 'durian'
]

fruits[3] = 'grapes'
fruits.push('mangos');
fruits.unshift('strawberries');
// console.log(fruits[1]);
console.log(fruits);

console.log(fruits.indexOf('oranges'))
console.log(Array.isArray(fruits));

// OBJECT LITERALS

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '59 Main Street',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person.address.city);

/*const { firstName, lastName, address: { city }} = person;

console.log(city)*/

person.email = 'john@gmail.com'
console.log(person)

// --- ARRAYS --


const todos= [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },

    {
        id: 2,
        text: 'Meeting w/boss',
        isCompleted: true
    },

    {
        id: 3,
        text: 'Dentist',
        isCompleted: false
    }
];

console.log(todos[1].text);

// convert to JSON, sending data.

const todoJSON = JSON.stringify(todos);
console.log(todoJSON)

// FOR LOOPS

/*for(let i = 0; i < todos.length; i++){
    console.log(todo[i].text);

}*/

for(let todo of todos){
    console.log(todo.text)
}

// HIGH ORDER ARRAY METHODS, forEach, map, filter

/*todos.forEach(function(todo){
console.log(todo.text);
}); */

// MAP MAKES A NEW ARRAY

/* const todoText = todos.map(function(todo){
return todo.text

});

console.log(todoText); */

/* const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
    
    }).map(function(todo) {
        return todo.text;
    })


console.log(todoCompleted); */

// the data types need to match w/ triple =

const y = 6;
const z = 11;

// || is or, && is both
if(y > 5 && z > 10){
    console.log('y is more than 5 and z is greater than 10')
}

// ? = then, : = else || if a>10 then its red, else blue
const a = 9;

const color = a > 10 ? 'red': 'blue';

console.log(color);

/* SWITCHES

switch(color){
    case 'red':
        console.log('color is red');
            break;
    case 'blue':
         console.log('color is blue');
            break;
     default:
        console.log('color is NOT red or blue');
            break;
} */

// FUNCTIONS NaN -> not a number, default values

/* function addNums(num1 =1 , num2= 1) {
 return (num1 + num2);

}

console.log(addNums(5,6)); */

const addNums = (num1 = 1 , num2 = 1) => 
    num1 + num2;

console.log(addNums(5,5));

// OBJECT ORIENTED PROGRAM
// constructor function

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); 
    /* this.getBirthYear = function(){
        return this.dob.getFullYear;
    } 
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    } */

}

/*Person.prototype.getBirthYear = function () {
    return this.dob.getFullYear;
}

Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}
*/
// Class, method is a fxn inside of a class

class Personz {
    constructor(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}
getBirthYear(){
    return this.dob.getFullYear();
}

getFullName(){
    return `${this.firstName} ${this.lastName}`;

}
}
// INSTANTIATE OBJECT
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Ava', 'Doe', '5-3-1980');

console.log(person1);

// take html elements and put them into variables nwork with em

console.log(window);

// single element selectors, single so will only select 1st

//console.log(document.getElementById('my-form'));
//console.log(document.querySelector('h1'));

// multiple element selectors ALL equal more than one

// console.log(document.querySelectorAll('.item'));

// const items = document.querySelectorAll('.item');

// loop through grab each item and console

// items.forEach((item) => console.log(item));

// manipulating the DOM (user interface)

const ul = document.querySelector('.items');

// CHANGING HTML FROM JAVASCRIPT
/* ul.remove();
ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';

ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1> HEWWO </h1>';

const btn = document.querySelector('.btn')
btn.style.background = 'red'; */

//EVENTS, target gives element its on MAKE STUFF INTERACTIVE, mouseout
/* const btn = document.querySelector('.btn');

btn.addEventListener('mouseover', (e) => {
    e.preventDefault();
    // console.log(e.target.className);
    document.querySelector('#my-form').style.background = '#ccc';

    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1> greet </h1>';
}); */

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

// dont wanna submit unless both fields are filled
function onSubmit(e) {
    e.preventDefault();

    console.log(nameInput.value);

    if(nameInput.value === '' || emailInput.value === ''){
        // alert('Please enter all fields.');
        msg.classList.add('error');
;        msg.innerHTML = 'Please enter all fields'

        setTimeout(() => msg.remove(), 3000);
    } else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        // Clear fields

        nameInput.value = '';
        emailInput.value = '';
    }
}