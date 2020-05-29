//Complete the following problems: 

/************************************************************* */

// Problem 1:
// Write a JavaScript function that determines whether a string is empty. If the string is 
// empty, the output should be true, otherwise it should return false. 



//your code...

let isEmpty = function(str) {
    if(str.length === 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isEmpty('string'));
console.log(isEmpty(''));



/************************************************************* */

// Problem 2:
// Declare a variable that holds a string (e.g., ‘Learning JavaScript is fun!’). Replace a 
// word so that the output uses the new word instead (e.g., ‘Learning JavaScript is cool!). 



//your code...

let fun = 'Learning JavaScript is fun!';  // Initial string
wordArray = fun.split(' ');      // Split string into array wherever there's a space
let newWord = 'cool!';          // Create a replacement word
wordArray[wordArray.length - 1] = newWord;  // Assign replacement word to the last element in array
let cool = wordArray.join(' ');  // Join elements of array back into string with space between each element
console.log(cool);


/************************************************************* */
// Problem 3:
// Write a function that declares an array of numbers from one to five and returns another array 
// with the squared value of each number from the first array. Use an arrow function and one of 
// the built-in array methods. 



//your code...

squaredArray = () => {
    let nums = [];
    let numsSquared = [];
    for (i = 1; i < 6; i++) {
        nums.push(i);
        numsSquared.push(i * i);
    }
    return numsSquared;
}


console.log(squaredArray());




/************************************************************* */
// Problem 4:
// Now declare another array of numbers that has the following numbers: 1, 3, 5, 7, 9, 1, 3, 5. 
// Write a JavaScript program that returns an array of the numbers that are greater than 3. Use 
// an arrow function and one of the built-in array methods.



//your code...

nums = [1, 3, 5, 7, 9, 1, 3, 5];

greaterThanThree = () => {
    newNums = [];
    myFunc = (num) => {
        return num > 3
    }
    return nums.filter(myFunc);
}

console.log(greaterThanThree());







/************************************************************* */
// Problem 5:
// Now declare another array of numbers that has any 5 numbers. Write a JavaScript program that 
// returns the sum of those numbers. Use an arrow function and one of the built-in array methods. 



//your code...

let numArray = [1, 1, 1, 1, 1, 1];

sumOfArray = (num) => {
    reduction = (total, num) => {
        return total + num;
    }
    return num.reduce(reduction);
}

console.log(sumOfArray(numArray));


/************************************************************* */
// Problem 6:
// DNA is made up of base pairs where every G is paired with a C and every T is paired with an A. 

// Write a function that takes in a DNA string as a parameter and returns an array with the 
// complementary strand. For example, a string of "GCTA" would return an array of 
// ["C", "G", "A", "T"].  



//your code...

let DNA = 'GCTA';

const matchingStrand = function(str) {
    const pair1 = ['G', 'A'];
    const pair2 = ['C', 'T'];
    let match = [];
    for (i = 0; i < str.length; i++) { // For each letter in str...
        for (j = 0; j < pair1.length; j++) { // Compare to each letter in...
            if (str[i] === pair1[j]) { // pair 1 array.  If it matches...
                match.push(pair2[j]);  // add the corresponding value in pair 2
            }                          // array to match.  Otherwise...
            else if (str[i] === pair2[j]) { // if the letter matches a letter in pair 2 array,
                match.push(pair1[j]); // add the corresponding value in pair 1 array to match.
            }
        }
    }
    return match;
}


console.log(matchingStrand(DNA));






/************************************************************* */
// Problem 7:

// 7.a - Write a function to find the maximum numerical value of the given array.  Get rid of 
//any non numerical values.  Convert the strings that are numbers to an actual number data type.  
//("one" => 1) ("1" => 1).  Use array methods to perform this task.  
const numbers = [2,23,1,2,1,1,1,2,2.5,20,200,2000,,{k:1},20000,19999,1878,140,23,4,"sk",true,true,"true-dat","nice","one","two","three","3","tea",[]];



function maxNumber(numbers) {
    //your code...


    for (i = 0; i < numbers.length; i++) {  // This for loop eliminates the empty space in array
        if (typeof (numbers[i]) === 'undefined') {
            numbers.splice(i, 1);
        }
    }
    let max = 0;
    const words = {
        'one' : 1,
        'two' : 2,
        'three' : 3,
        'four' : 4,
        'five' : 5,
    }
    
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] in words) {
            numbers.splice(i, 1, (words[numbers[i]]));
        }
    }

    for (i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] === 'object') {
            numbers.splice(i, 1, Object.values(numbers[i])[0]);
        }
    }

    for (i = 0; i < numbers.length; i++) {
        if (typeof (numbers[i] === 'string')) {
            numbers.splice(i, 1, +numbers[i]);
        }
    }

    numbers.sort();
    numbers.splice(25);

    max = Math.max(...numbers);

    return max;
   
}

console.log(maxNumber(numbers));
// 7.b -Write a function that sorts the given numbers array.  Allow the function to sort the 
// array in descending order

function sortNums(numbers,desc=false) {
    //your code...

    newArray = []
    let sortDescending = function(initial, next) {
        if (initial > next) {
            return -1;
        }
        else if (initial < next) {
            return 1;
        }
        else {
            return 0;
        }
    }
    newArray = numbers.sort(sortDescending);
    console.log(newArray);
};

sortNums(numbers);



/************************************************************* */
// Problem 8:
// add an example of at least 5 JavaScript data types to the given mapObj.  The
// key is the example data type, and the value is the name of the data type.
// An object data type has already been  set as the 1st key / val pair.

const myObject = {company : "TEKsystems"}
const mapObj = new Map();
mapObj.set(myObject,"object");
mapObj.set(1, "number");
mapObj.set([1, 2], "array");
mapObj.set('Hello TEKcamp', "string");
mapObj.set(true, "boolean");
mapObj.set(null, "null" )
 
console.log(mapObj.has({company : "TEKsystems"}));  
// The above console.log() statmeent returns false.  Write another console.log() statement 
// explaining why this line of code prints false.  Refactor the code on line 106, so you can 
// successfully check to see if {company : "TEKsystems"} exists in the mapObj.

// your code...
console.log("The above code returns as false because the map cannot see inside the object");
console.log("I solved this by creating an external object that contains the same");
console.log("information.  It returns as true in the .has test.  See below");
console.log(mapObj.has(myObject));  
// loop through the mapObj and create a new array of only the data types, leaving out the
// example keys of the mapObj.  Use array methods to do this.  
// Example output : ['string',number','boolean',array','object']

function loopThrough(obj) {

    const dataTypes = []
    mapObj.forEach((key, value) => dataTypes.push(key));
    return dataTypes;
}

console.log(loopThrough(mapObj));


/************************************************************* */
// Problem 9:

let ones = [1,11,111,1111,11111,111111,1111111,11111111,111111111,1111111111];
// reverse the array, without modifying the ones array.

let reverseOnes = function(arr) {
    let newOnes = [];
    for (i = ones.length - 1; i >= 0; i--) {
        newOnes.push(ones[i]);
    }
    return newOnes;
}

console.log(reverseOnes(ones));



/************************************************************* */
// Problem 10:
// create a function called performer(cb) that takes in a callback function and runs that 
// callback function.  It should return the output of the callback function.

function performer(cb) {
    //code goes here
    return cb()
}

function cb() {
    return 'TEKcamp is AMAZING!';
}

console.log(performer(cb));


/************************************************************* */
// Bonus assignment:
// research a new feature of ES6+ and create an example of it's use case here.
// Be sure to write comments explaining what the feature is and why it is useful.


// The template structure (or string interpolation) is a very useful tool that 
// came in ES6+.  It allows you to easily insert variables into a string of text.
// Many other languages have similar features (printf in Java) so it definitely 
// makes Javascript easier to handle.

const name = 'Victor Betts';
const age = 38;
const gender = 'male';
console.log(`Hi.  My name is ${name} and I am a ${age} ${gender}.`);