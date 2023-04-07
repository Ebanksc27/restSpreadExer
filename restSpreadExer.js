// refactor this code to use the rest operator and an arrow function:
function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

  // refactor version
    const filterOutOdds = (...nums) => {
        return nums.filter(num => num % 2 === 0);
    };


// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
// Make sure to do this using the rest and spread operator.
const findMin = (...nums) => Math.min(...nums);


// Write a function called mergeObjects that accepts two objects and returns a new object 
//which contains all the keys and values of the first object and second object.

function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

// example usage:
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const mergedObj = mergeObjects(obj1, obj2);
console.log(mergedObj); // { a: 1, b: 2, c: 3, d: 4 }

// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments
// The function should return a new array with the original array values and all of additional arguments doubled.

function doubleAndReturnArgs(arr, ...args) {
    const doubleArgs = args.map(num => num * 2);
    return [...arr, ...doubleArgs];
} 

// example usage:
const arr = [1, 2, 3];
const arrResult = doubleAndReturnArgs(arr, 4, 4);
console.log(arrResult); // [1, 2, 3, 8, 8]


// Slice and Dice
// For this section, write the following functions using rest, spread and 
// refactor these functions to be arrow functions!
// Make sure that you are always returning a new array or object and 
// not modifying the existing inputs.

/** remove a random element in the items array
 * and return a new array without that item. */
function removeRandom(items) { 
    const randomIndex = Math.floor(Math.random() * items.Length);
    return [...items.slice(0, randomIndex), ...items.slice(randomIndex + 1)];
}

/** Return a new array with every item in array1 and array2. */
function extend(array1, array2) {
    return [...array1, ...array2];
}

/** Return a new object with all the keys and values
 * from obj and a new key/value pair */
function addKeyVal(obj, key, val) {
    return { ...obj, [key]: val };
}

/** Return a new object with a key removed. */
function removeKey(obj, key) {
    const newObj = { ...obj };
    delete newObj[key];
    return newObj;
}

/** Combine two objects and return a new object. */
function combine(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

/** Return a new object with a modified key and value. */
function update(obj, key, val) {
    return { ...obj, [key]: val };
}
