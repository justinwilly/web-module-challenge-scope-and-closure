//Scope
//answers the questions fo where are my variables and function available to me


/*
var
- can be redecleared
- can be updated
- function scope

let
- can no be redecleared
- can be updated
- block scoped

const 
- can not be redecleared
- can not be updated
- block scoped
*/ 

var school = 'Lambda'
console.log(school)

var school = 'Different school'
console.log(school)  //Different school over writes first var



////// FUNCTION SCOPING /////
//When variable are created inside of a function those variables will only ever be available inside of the function
// thing of the {} as gates - when you see them they keep variables in

const track = 'web'

function lambda() {
    const cohort = "Web25"
    console.log(track)
}

console.log(cohort); //would return undefined be cause in the function
lambda(); // "web" because returns console from inside function

const track = 'web'

function lambda() {
    const cohort = "Web25";
    const track = "UX";
    console.log(track);
}

lambda(); // "UX" returns the track inside the function first



//// BLOCK SCOPE //////
let answer;
if(1 === 1) {
    answer = "it's true"; // just updating the value, not redeclaring 
}

console.log(answer)

//
for (var i = 0; i < 10; i++){ //var is accessible anywhere in the program
    console.log(i) // 0-9
}

console.log(i) // 0-10

//
for (let k = 0; k < 5; i++){ //let is only accessible only in this loop
    console.log(k); //0-4
}
console.log(k) //undefined


///
const dog = 'fern';

function callDog() {
    console.log(dog)
}

function puppy() {
    const dog = "willo"
    return callDog();
}

puppy(); //returns fern



//Functions are scoped the exact same way as variables
function sayHi(name){
    function yell(){
        console.log(name.toUpperCase())
    }
    yell();
}

sayHi('Justin') //JUSTIN in all upper case


//If we create a function inside of a another function - that function will only be available in that parent function


////// HOISTING /////
// Hoisting allows us to access functions / variables before they have been created
// function declearations and variable declearations - 2 things that are hoisted
// know about it but NOT BEST PRACTICE

working(); //it works
function working() {
    console.log('it works')
}

//Arrow functions are NOT hoisted
working(); //cannot access before initialization
const working = () => console.log('it works')

//
working(); //it works
function working(){
    console.log('it works');
    console.log(add(1,2));
}

function add(num1, num2){
    return num1 + num2
}

//
console.log(name) //undefined
var name = 'Justin'
console.log(name) //justin




////// CLOSURES //////
// Closures give us the ability to put functions together
// the ability to access functions from a parent level scope in child level scope even after the parent function has been terminated
// code that has been identified else where that we can use later
// we can pass variables DOWN but we cannot pass them back UP

//
function country(countryName){
    const lang1 = 'French';
    const lang2 = 'English';
    console.log(`${lang1} and ${land2} are the official languages of ${countryName}`);
    console.log(countryName);

    function province(provinceName){
        console.log(`${lang1} and ${land2} are the official languages of ${countryName} and the most populated province is ${provinceName}`);
        console.log(provinceName);

        function city(cityName) {
            const food = 'Maple syrup'; //can NOT be passed up to province or country
            console.log(cityName);
        } // this closes the city
        city('Ottawa');
    } // this closes province
    province('Ontario')
} // this closes country
country('Canada')


// Inner scope references variables in outer scope - that is what is referred to as a closure
//
function game(sport) {
    let score = 0;
    return function win() {
        score ++; // incrementing score by 1
        return `Your ${sport} game score is ${score}`
    }
}

//private variables
const hockeyGame = game('hockey') // creates the `hockeyGame` function and calls the `game` functions
console.log(hockeyGame); // Your hockey game score is 1 (and increments by 1 each time it's called)
console.log(hockeyGame); // increments by 1

const football = game('football')
console.log(football); // calls the football game and score independent of hockey




///// CALLBACKS AND HIGHER ORDER FUNCTIONS /////
// Higher Order Function receive other functions as parameters
// Callback functions are passed into higher order functions as arguments
// higher order functions are passed in
// callback functions receive

// in this case KITCHEN is our higher order function - our callback is going to be passed into chef
const kitchen = function(i1, i2, chef) {
    return chef(i1, i2)
}

const pizzaChef = function(i1, i2) {
    return `I took ${i1} and I took ${i2} and I made you a pizza`
}

const pastaChef = function(i1, i2){
    return `I took ${i1} and I took ${i2} and I made you a spaghetti`
}

console.log(kitchen('sauce', 'dough', pizzaChef))  // returns pizzaChef
console.log(kitchen('sauce', 'dough', pastaChef))  // returns pastaChef



// Higher order functions 
function calculator(num1, num2, cb){
    return cb(num1, num2)
}
// call back functions
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

console.log(calculator(5, 6, add)); // 11
console.log(calculator(5, 6, subtract)); // -1
console.log(calculator(5, 6, multiply)); // 30
console.log(calculator(5, 6, divide)); // .833