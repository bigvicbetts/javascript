//Complete the following problems:

/************************************************************* */
// Problem 1: Refactor the for() loop to be a while loop.
//

for(let i=0; i<10; i++) {
    console.log(" the value of i in the loop is : " + i);
}


//your code...

var i = 0;
while (i < 10) {
    console.log(" the value of i in the loop is : " + i);
    i++;
}


/************************************************************* */
// Problem 2:
// multiply the sum of 30 added to two by 20.  Divide the product by 10 raised to the power of 2
//use javascript to compute the value of the above statement. Each individual operation needs to be a function expression. run all the functions after defining them, and print the answer to the console.

//your code...

var multiply = function(num1, num2) {
    return num1 * num2;
}

var add = function(num1, num2) {
    return num1 + num2;
}

var divide = function(num1, num2) {
    return num1 / num2;
}

var squared = function(num) {
    return num * num;
}

num = add(30, 2);
num = multiply(num, 20);
num = divide(num, squared(10));
console.log(num);


/************************************************************* */
//Problem 3:
//Determine whether the following values are "truthy" or "falsy".  console.log() the value, whether the value is 'truthy' or 'falsy', along with your reasoning why using String interpolation.
// values : 
// 20
// 0
// "zero";
// const zero = 20;
// null
// "0"
// !""
// {}
// () => {console.log("hello TEKcamp!");
// 125
// undefined
// ""

let val = 20;
console.log(`${val} is truthy because any number that is not 0 or -0 is true.`);
val = 0;
console.log(`${val} is falsy because any number that is 0 or -0 is false.`);
val = "'zero'";
console.log(`${val} is truthy because any non-empty string is true.`);
const zero = 20;
console.log(`${zero} is truthy because any number (regardless of variable type) that is not 0 or -0 is true.`);
val = null;
console.log(`${val} is falsy because it is the absence of any value.`);
val = "'0'";
console.log(`${val} is truthy because it is non-empty a string.`);
val = '!""';
console.log(`${val} is truthy because the ! negates the empty string.`);
val = '{}';
console.log(`${val} is truthy because Objects (even empty ones) are true.`);
val = '() => {console.log("hello TEKcamp!")};';
console.log(`${val} is truthy because functions are always true.`);
val = 125;
console.log(`${val} is truthy because any number that is not 0 or -0 is true.`);
val = undefined;
console.log(`${val} is falsy because it has not been initialized.`);
val = '""';
console.log(`${val} is falsy because empty strings are always false.`);




/************************************************************* */
// Problem 4:
// Refactor the following code using a switch statement:

const day = "friday";

if(day === "monday") {
    console.log("we got a long week ahead of us...");
} else if(day === "tuesday") {
    console.log("tuesday's are still beterr than mondays, but LONG way to go still");
} else if (day === "wednesday") {
    console.log("We are smack dab in the middle of the week");
} else if (day === "thursday") {
    console.log("Thursday night... the mood is right");
} else if (day === "friday") {
    console.log("TGIF.  Friday truly is the best day of the week!")
} else {
    console.log("It's a weekend!")
}

// your code...

switch(day) {
    case "monday":
        console.log("we got a long week ahead of us...");
        break;
    case "tuesday":
        console.log("tuesday's are still beterr than mondays, but LONG way to go still");
        break;
    case "wednesday":
        console.log("We are smack dab in the middle of the week");
        break;
    case "thursday":
        console.log("Thursday night... the mood is right");
        break;
    case "friday":
        console.log("TGIF.  Friday truly is the best day of the week!");
        break;
    default:
        console.log("It's a weekend!");
}




/************************************************************* */
// Problem 5: Refactor the following functions to use a ternary expression:
const age = 10;
if (age > 21) console.log("adult"); else {
    console.log("minor");
}

if (age > 13 && age < 19) console.log('teen'); else {
    console.log("not a teenager");
};

if (age > 65) console.log("retired"); else {
    console.log("still working...");
}


// your code...

var result = (age > 21) ? "adult" : "minor";
console.log(result);

result = (age > 13 && age < 19) ? "teen" : "not a teenager";
console.log(result);

result = (age > 65) ? "retired" : "still working...";
console.log(result);




/************************************************************* */
// Problem 6: Create an object literal that represents yourself.  set it to a variable that appropriately describes the object.  Include the following properties:
/*
-name
-age
-gender
-hobbies
-profession
-education

-add a method on your object, named learn. the learn method should print the value of the name property using the 'this' keyword.

-add another method on your object of any action you want to perform, using some property that exists on your object, making sure to utilize the 'this' keyword.
*/

//your code...

var victor = {
    name: "Victor",
    age: 38,
    gender: "male",
    hobbies: ["programming", "chess", "soccer", "reading"],
    profession: "Aspiring software developer",
    education: "Some college",
    learn: function() {
        console.log(this.name);
    },
    enjoy: function() {
        for (var i = 0; i < this.hobbies.length; i++) {
            console.log("I enjoy " + this.hobbies[i]);
        }
    }
}

victor.learn();
victor.enjoy();

/************************************************************* */
// Problem 7: Create an object literal that represents any object in the real world that you like.  Try to come up with a realistic set of properties and methods that would accurately describe that object.  In at least one of your methods, use the this keyword to refer back to one of the properties you defined on this object literal.  

//your code...

let footballTeam = {
    name: 'Cowboys',
    location: 'Dallas',
    players: 53,
    supberbowls: 5,
    owner: 'Jerry Jones',
    toString: function() {
        return 'The ' + this.location + ' ' + this.name + ' are owned by ' + this.owner + ' and have ' + this.supberbowls + ' Super Bowl victories.';
    },
    winSuperBowl: function() {
        this.supberbowls ++;
    }
}

console.log(footballTeam.toString());
footballTeam.winSuperBowl();
console.log(footballTeam.toString());


/************************************************************* */
//Problem 8: create a function that outputs your 3 favorite data types, with a message explaining why you like that data type.

//your code...
var dataTypes = {
    'tree structures': 'they are heirarchical',
    'booleans': 'they are simple yet powerful',
    'integers': 'they are primitive yet fundamental for programming'
}

function getDataTypes() {
    var key = Object.keys(dataTypes);
    for (i = 0; i < key.length; i++ ) {
        console.log('I like ' + key[i] + ' because ' + dataTypes[key[i]]);
    }
}

getDataTypes();




/************************************************************* */
//Bonus assignments:

// 1. Create a Higher Order Function called multiple(x) that takes a single parameter.
// This HOF should return another function fn(y) that takes another single parameter y.
// This inner function should compute the product of it's parameter with the parameter passed
// into multiple.  Use this returned "first-class" function to compute triples of any given number.

// your code...

let multiple = function(x) {
    let fn = function(y) {
        y = 3; // Per the last sentence in instructions, this will change the "first-class" function
        return x * y;  // to compute TRIPLES of any number passed into the Higher Order Function.
    }
    return fn;
}



console.log(multiple(3)(1));


// 2. Write an outer function called stockGain that has cost basis (basis) as a parameter;
// declare a variable called message that holds " is how much the stock has increased".  Return an
// inner function with years (yrs) as a parameter and declare a variable for growth rate (r) of 5%.
// Console log your calculation.

// Once finished, declare a variable called futureValue that holds your stockGain function and
// enter any amount for the cost basis and a number for the number of years.  Run the function
// returned by the higher order function to display the future value of the stock.  

//your code...

let stockGain = function(basis) {
    let message = ' is how much the stock has increased.';
    let years = function(yrs) {
        r = 1.05;
        newBasis = basis;
        for (i = 0; i < yrs; i++) {
            newBasis = newBasis * r;
        }
        console.log(newBasis + message);
    }
    return years;
}

futureValue = stockGain(100)(2);