//Complete the following problems: 

// Problem 1:
// Part 1: Write a JavaScript function that converts the current temperature from Fahrenheit to Celsius. Declare a variable for the current temperature then store the Celsius temperature into a variable. Console log the variable.

// Part 2: Write another funciton that converts the Celsius temperature back to Fahrenheit. 

//your code...
var currentTemp;

// Part 1:
function farenheitToCelsius() {  // Part 1:
    currentTemp = (currentTemp - 32) * (5/9);
    console.log('The current temp in Celsius is', currentTemp + '.');
}

// Part 2:
function celsiusToFarenheit() {  //Part 2:
    currentTemp = (currentTemp * (9/5)) + 32;
    console.log('The current temp in Farenheit is', currentTemp + '.');
}










/************************************************************* */
// Problem 2:
// Write a JavaScript function to determine if someone is old enough to vote. Declare a variable for age and write a conditional statement for whether that age is old enough to vote. Console log "yes" or "no"

//your code...

var age;

function canVote() {
    if (age > 17) {
        console.log("Yes");
    }
    else {
        console.group("No");
    }
}










/************************************************************* */
// Problem 3:
// Write a JavaScript function that converts a string to an array. Declare a string variable with "The five boxing wizards jump quickly." Use the split() method to turn the string into an array of strings. (Be sure you separate the string into words, not characters.) After you have finished, use the join() method to change the array back into a string.

//your code...

var str = 'The five boxing wizards jump quickly.'
var words;
var newString;

function splitWords() {
    words = str.split(' ');
    newString = words.join(' ');
}










/************************************************************* */
// Problem 4:
// Write a JavaScript function with a function that reverses your telephone number. Use the split() and join() methods from the previous problem as well as the toString() method to convert a number into a string and reverse() method to reverse an array in place.

//your code...

var phoneNumber;
var numberArray;
var backwardsNumber;

function reversePhoneNumber() {
    phoneNumber = phoneNumber.toString();
    numberArray = phoneNumber.split('');
    numberArray.reverse();
    backwardsNumber = numberArray.join('');
}









/************************************************************* */
// Problem 5:
// Write a JavaScript function creates a car object using information about your car. Include the make, model, year, and color. Write a function to get the year, color, make, and model in that order.

//your code...

var myCar = {
    make: 'Nissan',
    model: 'Pathfinder',
    year: 2008,
    color: 'blue',

    getInfo: function() {
        return this.year + ' ' + this.color + ' ' + this.make + ' ' + this.model;
    }

}








/************************************************************* */
// Problem 6:
// Write a JavaScript function with a loop that will iterate from 0 to 15. Each iteration, the for loop will check if the current number is odd or even and display the output.


//your code...

function oddOrEven() {
    for (var i = 0; i < 16; i++) {
        if (i % 2 === 0) { // If there is no remainder when divided by 2, number is even.
            console.log(i + ' is even.');
        }
        else {              // If there IS a remainder when divided by 2, the number is odd.
            console.log(i + ' is odd.');
        }
    }
}









/************************************************************* */
// Problem 7:
// Write a JavaScript function that iterates the integers from 1 to 100. For multiples of 3 print "TEK" instead of the number and for multiples of 5, print "camp." For numbers that are multiples of both 3 and 5, print "TEKcamp."

//your code...

function tekCamp() {
    var str;

    for (var i = 1; i < 101; i++) { // Iterates over a list from 1 - 100
        str = ''                // Creates empty string to populate and print to console 
        if (i % 3 !== 0 && i % 5 !== 0) {
            str = i;            // If number is not divisible by 3 or 5, assign number to
        }                       // to the variable 'str'
        else {
            if (i % 3 === 0) {  // If number IS divisible by 3...
                str += 'TEK';   //add 'TEK' to variable 'str'
            }
            if (i %5 === 0) {   // If number IS divisible by 5...
                str += 'camp'   // add 'camp' to variable 'str'
            }
        }
        console.log(str);       //At the end of each iteration, print value of 'str' to console.
    }
}





/************************************************************* */
// Problem 8:
const nums = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
// Write a "for" loop that console.log()'s the first
// value in the nums array, and every 3rd number, i.e. 0, 3, 6,
// and 9: the zeroth, third, sixth, and ninth values.

//your code...

for (var i = 0; i < 11; i += 3) {
    console.log(nums[i]);
}













// Problem 9:
const foodArray = [ 'potatoes', 'tamales', 'lemon','strawberries','chocolate', 'pudding', {school : 'TEKcamp'} ];
//access the value of the last element of the array and set it to a variable called school.  print the school variable to the console.

var school = Object.values((foodArray[foodArray.length - 1]))[0];
console.log(school);


const adjectiveArray = [ 'salty', 'spicy', 'sour', 'sweet', 'rich','creamy','amazing'];
// Using both nameArray and adjectiveArray, make a
// "for" loop that console.log()'s a sentence for each
// corresponding value in the arrays. Add the word "is" or "are" depending on if the food is singular or plural.  "Potatoes are salty", "Lemon is sour".


var verb;
for (i = 0; i < foodArray.length; i++) { 
    var food;                             
    food = Object.values(foodArray[i]).join(''); 
                                   

    if (food[food.length - 1] === 's') { //If the 'food' variable ends in letter 's' (i.e. is plural),
        verb = 'are';                    //the appropriate verb 'are' is assigned to the variable 'verb'.
    }
    else {                               //Otherwise (i.e. if food is singular),
        verb = 'is';                     //the appropriate verb 'is' is assigned to the variable 'verb'.
    }

    //For each item in foodArray, that item is combined with the appropriate verb and
    //the associated item in adjectiveArray and printed to the console.
    console.log(food, verb, adjectiveArray[i]);
}








/************************************************************* */
// Bonus Assignment: Create 4 mathematical function expressions, add,subtract,multiply,divide.  put them in an array, and create a doMath() function that randomly does one of the 4 operations whenever it is run.  the doMath() function should print out what mathetmatical function was carried out.  The doMath() function should return the computed value of any operation performed.


const operations = [];

// Addition function
var add = function(num1, num2) {
    console.log('Function: Add');
    return num1+num2;
}
operations.push(add);

// Subtraction function
var subtract = function(num1, num2) {
    console.log('Function: Subtract');
    return num1-num2;
}
operations.push(subtract);

// Multiplication function
var multiply = function(num1, num2) {
    console.log('Function: Multiply');
    return num1*num2;
}
operations.push(multiply);

// Division function
var divide = function(num1, num2) {
    console.log('Function: Divide');
    return num1/num2;
}
operations.push(subtract);

Math.floor((Math.random() * operations.length));


function doMath(num1, num2) {
    var random = Math.floor((Math.random() * operations.length)); // Generates random number 
                                                                  //between 0 and (length of 
                                                                  //operations array - 1)
    return operations[random](num1, num2);
};
